/**
 * Stack the approved comp above the build screenshot at identical width so
 * the two can be judged as one image. Memory of the comp is not evidence;
 * this stack is.
 *
 *   node scripts/compare.mjs <comp.(png|jpg)> <build.png> <out.png> [--crop y:h]
 */
import { execFileSync } from "node:child_process";

const [comp, build, out, ...rest] = process.argv.slice(2);
if (!comp || !build || !out) {
  console.error("usage: node scripts/compare.mjs <comp> <build> <out> [--crop y:h]");
  process.exit(1);
}

const cropArg = rest[rest.indexOf("--crop") + 1];
const crop = rest.includes("--crop") && cropArg ? cropArg.split(":").map(Number) : null;

const probe = (file) =>
  execFileSync("ffprobe", [
    "-v", "error",
    "-select_streams", "v:0",
    "-show_entries", "stream=width,height",
    "-of", "csv=p=0",
    file,
  ])
    .toString()
    .trim()
    .split(",")
    .map(Number);

const [compW] = probe(comp);

// Comp width wins; the build is scaled to match it, never the other way round.
const cropFilter = crop ? `crop=iw:${crop[1]}:0:${crop[0]},` : "";
const filter =
  `[0:v]${cropFilter}scale=${compW}:-1:flags=lanczos,pad=iw:ih+6:0:0:0x00FF00[a];` +
  `[1:v]${cropFilter}scale=${compW}:-1:flags=lanczos[b];` +
  `[a][b]vstack=inputs=2`;

execFileSync("ffmpeg", ["-v", "error", "-y", "-i", comp, "-i", build, "-filter_complex", filter, out], {
  stdio: "inherit",
});

console.log(`✓ ${out}   (top: comp, bottom: build, both ${compW}px wide)`);
