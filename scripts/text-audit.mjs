/**
 * Text layout audit.
 *
 * Walks every text-bearing element at each breakpoint and reports the four
 * failures that are invisible in a screenshot review until they are pointed
 * at: text overflowing its own box, text clipped by an ancestor, a line that
 * wraps leaving an orphan fragment, and anything pushed outside the viewport.
 *
 *   node scripts/text-audit.mjs [--url http://localhost:3000/]
 */
import { chromium } from "playwright";

const arg = (flag, fallback) => {
  const i = process.argv.indexOf(flag);
  return i === -1 ? fallback : process.argv[i + 1];
};

const url = arg("--url", "http://localhost:3000/");

const VIEWPORTS = [
  { w: 1672, h: 941, label: "comp" },
  { w: 1440, h: 900, label: "laptop" },
  { w: 1280, h: 800, label: "small laptop" },
  { w: 1024, h: 768, label: "tablet landscape" },
  { w: 820, h: 1180, label: "tablet portrait" },
  { w: 390, h: 844, label: "phone" },
  { w: 360, h: 740, label: "small phone" },
];

const audit = () => {
  const findings = [];
  const seen = new Set();

  const label = (el) => {
    const text = (el.textContent || "").trim().replace(/\s+/g, " ");
    const id = el.closest("section[id],footer")?.id || el.closest("footer") ? "footer" : "?";
    return {
      section: el.closest("section[id]")?.id || (el.closest("footer") ? "footer" : id),
      tag: el.tagName.toLowerCase(),
      text: text.slice(0, 46),
    };
  };

  const push = (kind, el, detail) => {
    const info = label(el);
    const key = `${kind}|${info.section}|${info.text}|${detail}`;
    if (seen.has(key)) return;
    seen.add(key);
    findings.push({ kind, ...info, detail });
  };

  const all = Array.from(document.querySelectorAll("body *"));

  for (const el of all) {
    const style = getComputedStyle(el);
    if (style.display === "none" || style.visibility === "hidden") continue;
    if (Number(style.opacity) === 0) continue;
    // Screen-reader-only text is a 1px clipped box on purpose.
    if (style.clipPath !== "none" && el.clientWidth <= 1) continue;
    if (el.closest("[aria-hidden='true']")) continue;

    const hasOwnText = Array.from(el.childNodes).some(
      (n) => n.nodeType === 3 && n.textContent.trim().length > 0,
    );
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) continue;

    // 1. Text content wider than its own box, and therefore cut off. An
    //    image deliberately bleeding past a clipped section is not this.
    if (hasOwnText && el.scrollWidth > el.clientWidth + 1 && style.overflowX !== "visible") {
      push("overflow", el, `content ${el.scrollWidth} > box ${el.clientWidth}`);
    }

    // 2. Clipped by an ancestor that hides its overflow.
    if (hasOwnText) {
      let parent = el.parentElement;
      while (parent && parent !== document.body) {
        const ps = getComputedStyle(parent);
        if (ps.overflow !== "visible" && ps.overflowX !== "visible") {
          const pr = parent.getBoundingClientRect();
          const cutRight = Math.round(rect.right - pr.right);
          const cutLeft = Math.round(pr.left - rect.left);
          const cutBottom = Math.round(rect.bottom - pr.bottom);
          // A few pixels of tolerance: inside a scaled subtree the child and
          // parent rects round independently, which reads as a hairline
          // overflow that measures as clearance when checked directly.
          if (cutRight > 8 || cutLeft > 8 || cutBottom > 8) {
            push(
              "clipped",
              el,
              `by <${parent.tagName.toLowerCase()}> right+${cutRight} left+${cutLeft} bottom+${cutBottom}`,
            );
          }
          break;
        }
        parent = parent.parentElement;
      }
    }

    // 3. A wrapped line whose last fragment is an orphan.
    const laysOutChildren = /flex|grid/.test(style.display);
    if (hasOwnText && style.whiteSpace !== "nowrap" && !laysOutChildren) {
      const range = document.createRange();
      range.selectNodeContents(el);
      // Group rects into visual lines: an inline <span> inside a sentence
      // yields its own rect on the same line, and counting rects as lines
      // reports a one-line heading as four.
      const byTop = new Map();
      for (const r of range.getClientRects()) {
        if (r.width <= 0) continue;
        const key = Math.round(r.top / 4);
        const cur = byTop.get(key);
        if (cur) {
          cur.left = Math.min(cur.left, r.left);
          cur.right = Math.max(cur.right, r.right);
        } else {
          byTop.set(key, { top: r.top, left: r.left, right: r.right });
        }
      }
      const lines = Array.from(byTop.values())
        .sort((a, b) => a.top - b.top)
        .map((r) => ({ width: r.right - r.left }));
      if (lines.length > 1) {
        const widest = Math.max(...lines.map((r) => r.width));
        const last = lines[lines.length - 1];
        if (widest > 60 && last.width / widest < 0.24) {
          push(
            "orphan",
            el,
            `last line ${Math.round(last.width)}px of ${Math.round(widest)}px over ${lines.length} lines`,
          );
        }
      }
    }

    // 4. Pushed outside the viewport horizontally. A carousel track parks its
    //    off-screen cards there deliberately, so anything inside a
    //    horizontally-clipping ancestor is out of scope for this check.
    let inTrack = false;
    for (let node = el.parentElement; node && node !== document.body; node = node.parentElement) {
      const ns = getComputedStyle(node);
      if (ns.overflowX === "hidden" || ns.overflowX === "clip") {
        inTrack = true;
        break;
      }
    }
    if (!inTrack && hasOwnText && (rect.right > window.innerWidth + 2 || rect.left < -2)) {
      push("offscreen", el, `left ${Math.round(rect.left)} right ${Math.round(rect.right)} of ${window.innerWidth}`);
    }
  }

  return findings;
};

const browser = await chromium.launch();
let total = 0;

for (const vp of VIEWPORTS) {
  const context = await browser.newContext({
    viewport: { width: vp.w, height: vp.h },
    isMobile: vp.w < 768,
    hasTouch: vp.w < 768,
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120_000 });
  await page.waitForTimeout(1200);

  // Walk the page so lazy content lays out before measuring.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });

  const findings = await page.evaluate(audit);
  total += findings.length;

  console.log(`\n=== ${vp.w}x${vp.h}  ${vp.label} — ${findings.length} finding(s) ===`);
  for (const f of findings) {
    console.log(
      `  [${f.kind}] ${f.section} <${f.tag}> "${f.text}"\n      ${f.detail}`,
    );
  }

  await context.close();
}

await browser.close();
console.log(`\n${total} finding(s) across ${VIEWPORTS.length} viewports.`);
