/**
 * Turns the client's supplied logo files into shipped brand marks.
 *
 * Both wordmarks arrive as ~1254px squares with the art in the middle third
 * and a solid ground around it. The white one has to lose its red ground —
 * the logo's own red is #E50202, brighter than the site's field red, and two
 * reds in one composition read as a mistake. Re-run after new art lands.
 */
import sharp from "sharp";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SRC = "c:/Users/dbvision10/Desktop/최강피자/새로고";
const out = resolve(dirname(fileURLToPath(import.meta.url)), "../public/assets/user/brand");
const DATE = "20260822";

/** Alpha from distance to the ground colour, so antialiased edges survive. */
async function keyGround(file, ground, tol) {
  const img = sharp(file).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const px = info.width * info.height;
  for (let i = 0; i < px; i++) {
    const o = i * info.channels;
    const d = Math.max(
      Math.abs(data[o] - ground[0]),
      Math.abs(data[o + 1] - ground[1]),
      Math.abs(data[o + 2] - ground[2]),
    );
    data[o + 3] = d <= tol ? 0 : d >= tol * 2.2 ? 255 : Math.round(((d - tol) / (tol * 1.2)) * 255);
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .png()
    .toBuffer();
}

for (const [file, ground, tol, name, width] of [
  ["KakaoTalk_20260821_120358319.png", [229, 2, 2], 46, `wordmark-white-${DATE}`, 1200],
  ["KakaoTalk_20260821_120358319_01.png", [253, 253, 253], 26, `wordmark-red-${DATE}`, 1200],
]) {
  const keyed = await keyGround(resolve(SRC, file), ground, tol);
  const dest = resolve(out, `${name}.webp`);
  const info = await sharp(keyed)
    .trim({ threshold: 1 })
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 92, effort: 6 })
    .toFile(dest);
  console.log(`${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
}
