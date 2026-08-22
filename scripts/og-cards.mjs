/**
 * Builds the share cards (og:image) from the pages themselves.
 *
 * The card a search result shows should be the page the click lands on —
 * so each card is a real 1200×630 render of that route's hero, not a
 * separately designed graphic that drifts out of date. Re-run after any
 * hero change, bump DATE, and point the route metadata at the new file.
 *
 * New date = new URL, on purpose. Search engines hold on to old image URLs;
 * a fresh path is unambiguous where an overwrite is invisible. Old cards
 * are retired with 301s in next.config.ts, never deleted.
 *
 *   node scripts/og-cards.mjs [--url http://localhost:3000] [--only home,menu]
 *
 * Requires the dev server (or a prod build) running, plus playwright and
 * sharp (npm i -D playwright sharp).
 */
import { chromium } from "playwright";
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const DATE = "20260822";
const CARD_W = 1200;
const CARD_H = 630;
/* Naver guidance: over 150×150, over 5 KB, ratio no wider than 3:1. We also
   stay far under the megabyte range where OG scrapers start giving up —
   the /menu card this replaces was a 2.6 MB PNG. */
const MAX_BYTES = 200 * 1024;

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const baseUrl = flag("url", "http://localhost:3000");
const only = flag("only", "").split(",").filter(Boolean);

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "public/assets/user/og");
mkdirSync(outDir, { recursive: true });

/**
 * Each card: which route, which capture width, and which slice of the first
 * screen. The heroes are taller than 1.9:1, so we shoot a wide viewport and
 * crop a card-shaped window — `top` pins it by hand where a route needs it,
 * "auto" centres it on the `#top` hero. `width` narrows the shot when a
 * hero's content would rattle around in a 2400px frame.
 */
const CARDS = [
  { name: "home", path: "/", width: 2400, top: 210 },
  { name: "menu", path: "/menu", width: 2400, top: 190 },
  { name: "brand", path: "/brand", width: 1500, top: "auto" },
];

const browser = await chromium.launch();
const failures = [];

for (const card of CARDS) {
  if (only.length && !only.includes(card.name)) continue;
  const shotW = card.width ?? CARD_W * 2;
  const shotH = Math.round((shotW * CARD_H) / CARD_W);
  const page = await browser.newPage({
    // Wider than the card so the hero lays out at a realistic desktop
    // width; the crop keeps the card's own aspect and downscales.
    viewport: { width: shotW, height: Math.max(shotH + 200, 1200) },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  try {
    await page.goto(`${baseUrl}${card.path}`, {
      waitUntil: "networkidle",
      timeout: 90_000,
    });
    await page.waitForTimeout(1200);
    // The fixed header would sit inside every crop; the card is the hero.
    await page.addStyleTag({ content: "header{visibility:hidden!important}" });
    let top = card.top;
    if (top === "auto") {
      top = await page.evaluate((h) => {
        const hero = document.querySelector("#top");
        if (!hero) return 0;
        const box = hero.getBoundingClientRect();
        return Math.max(0, Math.round(box.top + window.scrollY + (box.height - h) / 2));
      }, shotH);
    }
    const png = await page.screenshot({
      clip: { x: 0, y: top, width: shotW, height: shotH },
    });

    const out = resolve(outDir, `${card.name}-hero-${DATE}.webp`);
    let quality = 82;
    let buffer;
    do {
      buffer = await sharp(png)
        .resize(CARD_W, CARD_H, { kernel: "lanczos3" })
        .webp({ quality, effort: 6 })
        .toBuffer();
      quality -= 6;
    } while (buffer.length > MAX_BYTES && quality >= 40);
    await sharp(buffer).toFile(out);

    console.log(
      `${card.name.padEnd(6)} ${CARD_W}x${CARD_H}  ${(buffer.length / 1024).toFixed(0).padStart(4)} KB  ${out}`,
    );
  } catch (error) {
    failures.push(`${card.name}: ${error.message.split("\n")[0]}`);
  } finally {
    await page.close();
  }
}

await browser.close();
if (failures.length) {
  console.error(`\nFAILED:\n${failures.join("\n")}`);
  process.exit(1);
}
