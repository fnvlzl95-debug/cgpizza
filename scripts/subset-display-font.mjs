/**
 * Rebuilds the site's three decorative faces as tiny subsets.
 *
 * Full Korean webfonts run 1–2.5 MB each; every string these faces set is
 * fixed copy, so we ship only those glyphs — each face lands at 10–60 KB.
 *
 *   - Black Han Sans   → the display headlines (menu hero, brand hero)
 *   - Nanum Pen Script → the brand page's handwritten annotations
 *   - Caveat           → the brand page's one English script line
 *
 * Re-run after changing any of that copy, or the new syllables silently
 * fall back to Pretendard mid-word.
 *
 *   node scripts/subset-display-font.mjs
 *
 * Needs Python with fonttools and brotli:  pip install fonttools brotli
 *
 * Behind a TLS-intercepting proxy the download fails with
 * SELF_SIGNED_CERT_IN_CHAIN; point Node at the machine's own roots first:
 *   NODE_EXTRA_CA_CERTS=/path/to/root-ca.pem node scripts/subset-display-font.mjs
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, existsSync, rmSync, statSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "src/fonts");
mkdirSync(outDir, { recursive: true });

const GITHUB = "https://raw.githubusercontent.com/google/fonts/main/ofl";

const FACES = [
  {
    file: "black-han-sans-headline.woff2",
    source: "BlackHanSans-Regular.ttf",
    upstream: `${GITHUB}/blackhansans/BlackHanSans-Regular.ttf`,
    // Every string the site sets in this face: the menu hero's lockup, and
    // the brand sheet's hero, kitchen panel, store block, ingredient counter,
    // strength titles, ingredient names, menu call to action and tagline.
    //
    // Miss one syllable and only that syllable drops to Pretendard, mid-word —
    // which is exactly what happened to 파 and 로 in "파로 도우의 맛", the
    // largest line on the brand page. Re-run this script after touching any
    // display copy, and check the render, not just the diff.
    text:
      "최강 답게고르는재미,한판의임팩트!피자역시매일반죽하도우맛실제주방부천본점" +
      "파로좋은료가를만듭니다직접정조리통새바질토마모짜렐라베이컨블랙올브오늘메뉴기립런분께추해요",
  },
  {
    file: "nanum-pen-annotations.woff2",
    source: "NanumPenScript-Regular.ttf",
    upstream: `${GITHUB}/nanumpenscript/NanumPenScript-Regular.ttf`,
    // Every handwritten annotation on the brand sheet.
    text: [
      "파로 도우의 3가지 강점!",
      "눈으로 확인하는",
      "가까운 곳에서 가장 빠르게!",
      "정직한 재료가 맛의 차이를 만듭니다!",
      "소화가 잘되는 맛있는 파로 도우!",
      "탱글탱글",
      "향긋한 풍미",
      "상큼한 과즙",
      "고소한 풍미",
      "짭조름한 감칠맛",
      "풍부한 식감",
    ].join(""),
  },
  {
    file: "caveat-script.woff2",
    source: "Caveat[wght].ttf",
    upstream: `${GITHUB}/caveat/Caveat%5Bwght%5D.ttf`,
    // Latin only — one English script line on the brand sheet.
    text: "",
  },
];

for (const face of FACES) {
  const source = resolve(outDir, face.source);
  const output = resolve(outDir, face.file);

  if (!existsSync(source)) {
    console.log(`fetching ${face.source}…`);
    const response = await fetch(face.upstream);
    if (!response.ok) throw new Error(`${face.source}: download failed ${response.status}`);
    writeFileSync(source, Buffer.from(await response.arrayBuffer()));
  }

  execFileSync(
    "python",
    [
      "-m",
      "fontTools.subset",
      source,
      ...(face.text ? [`--text=${face.text}`] : []),
      // Latin and digits cost almost nothing and keep stray characters from
      // dropping out of a headline mid-edit.
      "--unicodes=U+0020-007E",
      "--layout-features=*",
      "--flavor=woff2",
      `--output-file=${output}`,
    ],
    { stdio: "inherit" },
  );

  // The megabyte originals are build input, not something to keep in the tree.
  rmSync(source, { force: true });
  console.log(`${face.file} — ${(statSync(output).size / 1024).toFixed(1)} KB`);
}
