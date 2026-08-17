/**
 * Comp-comparison screenshot tool.
 *
 * The approved comps are 1672x941, so desktop shots are taken at that exact
 * width — a screenshot at any other width cannot be laid over the comp.
 *
 *   node scripts/shot.mjs                      full page, desktop + mobile
 *   node scripts/shot.mjs --sel "#hero"        one section only
 *   node scripts/shot.mjs --sel "#hero" --name hero
 *   node scripts/shot.mjs --only desktop
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const arg = (flag, fallback) => {
  const i = process.argv.indexOf(flag);
  return i === -1 ? fallback : process.argv[i + 1];
};

const url = arg("--url", "http://localhost:3000/");
const selector = arg("--sel", null);
const name = arg("--name", selector ? "section" : "page");
const only = arg("--only", null);
const outDir = arg("--out", ".impeccable/review");

// Comp width. Every desktop capture must match it for overlay comparison.
const COMP_WIDTH = 1672;

const targets = [
  { id: "desktop", width: COMP_WIDTH, height: 941, scale: 1 },
  { id: "mobile", width: 390, height: 844, scale: 2, mobile: true },
].filter((t) => !only || t.id === only);

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();

for (const t of targets) {
  const context = await browser.newContext({
    viewport: { width: t.width, height: t.height },
    deviceScaleFactor: t.scale,
    isMobile: Boolean(t.mobile),
    hasTouch: Boolean(t.mobile),
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  // Not networkidle: the dev server's HMR socket never lets the page go idle.
  await page.goto(url, { waitUntil: "load", timeout: 120_000 });

  // Settle lazy images and any in-view reveal transitions.
  await page.evaluate(async () => {
    await Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map((img) => new Promise((r) => { img.onload = img.onerror = r; })),
    );
  });
  await page.waitForTimeout(600);

  const file = `${outDir}/${name}-${t.id}.png`;
  if (selector) {
    const el = page.locator(selector).first();
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await el.screenshot({ path: file });
  } else {
    await page.screenshot({ path: file, fullPage: true });
  }
  console.log(`✓ ${file}  (${t.width}x${t.height} @${t.scale}x)`);
  await context.close();
}

await browser.close();
