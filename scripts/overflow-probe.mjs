/**
 * Names every element that sticks out past the viewport at a given width.
 * A clipped column is usually one child, not the container it shows up in.
 *
 *   node scripts/overflow-probe.mjs --url http://localhost:3000/brand --width 390
 */
import { chromium } from "playwright";

const arg = (flag, fallback) => {
  const i = process.argv.indexOf(flag);
  return i === -1 ? fallback : process.argv[i + 1];
};

const url = arg("--url", "http://localhost:3000/brand");
const width = Number(arg("--width", "390"));

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});

await page.goto(url, { waitUntil: "networkidle" });

const report = await page.evaluate((vw) => {
  const out = [];
  for (const el of document.querySelectorAll("*")) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    if (r.right > vw + 0.5 || r.left < -0.5) {
      out.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.getAttribute("class") || "").slice(0, 90),
        left: Math.round(r.left),
        right: Math.round(r.right),
        width: Math.round(r.width),
        text: (el.textContent || "").trim().slice(0, 24),
      });
    }
  }
  return {
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    offenders: out.slice(0, 25),
  };
}, width);

console.log(JSON.stringify(report, null, 2));
await browser.close();
