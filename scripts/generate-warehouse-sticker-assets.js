const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");
const SVGtoPDF = require("svg-to-pdfkit");
const fontkit = require("next/dist/compiled/@next/font/dist/fontkit/index.js").default;

const ROOT_DIR = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT_DIR, "print", "warehouse-sticker");
const PIZZA_SOURCE_PATH = path.join(
  ROOT_DIR,
  "public",
  "assets",
  "user",
  "hero-choigang-half-half-pizza.png",
);
const PIZZA_OUTPUT_NAME = "warehouse-sticker-pizza-source.png";

const COLORS = {
  navy: "#08215D",
  navyDeep: "#041544",
  navyMid: "#0D2E77",
  gold: "#FFCF00",
  red: "#EF4136",
  white: "#FFFFFF",
  shadow: "#02102F",
};

const DIMENSIONS = {
  trimWidthMm: 3000,
  trimHeightMm: 470,
  panelWidthMm: 1500,
  panelHeightMm: 470,
  bleedMm: 5,
  safeMm: 15,
};

const VIEWPORTS = {
  master: {
    widthMm: DIMENSIONS.trimWidthMm,
    heightMm: DIMENSIONS.trimHeightMm,
    viewBox: `0 0 ${DIMENSIONS.trimWidthMm} ${DIMENSIONS.trimHeightMm}`,
    filename: "warehouse-sticker-master.svg",
  },
  leftPrint: {
    widthMm: DIMENSIONS.panelWidthMm + DIMENSIONS.bleedMm * 2,
    heightMm: DIMENSIONS.panelHeightMm + DIMENSIONS.bleedMm * 2,
    viewBox: `${-DIMENSIONS.bleedMm} ${-DIMENSIONS.bleedMm} ${
      DIMENSIONS.panelWidthMm + DIMENSIONS.bleedMm * 2
    } ${DIMENSIONS.panelHeightMm + DIMENSIONS.bleedMm * 2}`,
    filename: "warehouse-sticker-left-print.svg",
    pdfName: "warehouse-sticker-left-print.pdf",
  },
  rightPrint: {
    widthMm: DIMENSIONS.panelWidthMm + DIMENSIONS.bleedMm * 2,
    heightMm: DIMENSIONS.panelHeightMm + DIMENSIONS.bleedMm * 2,
    viewBox: `${DIMENSIONS.panelWidthMm - DIMENSIONS.bleedMm} ${-DIMENSIONS.bleedMm} ${
      DIMENSIONS.panelWidthMm + DIMENSIONS.bleedMm * 2
    } ${DIMENSIONS.panelHeightMm + DIMENSIONS.bleedMm * 2}`,
    filename: "warehouse-sticker-right-print.svg",
    pdfName: "warehouse-sticker-right-print.pdf",
  },
};

const blackFont = loadFont(
  path.join(
    ROOT_DIR,
    "node_modules",
    "pretendard",
    "dist",
    "public",
    "static",
    "Pretendard-Black.otf",
  ),
);

const boldFont = loadFont(
  path.join(
    ROOT_DIR,
    "node_modules",
    "pretendard",
    "dist",
    "public",
    "static",
    "Pretendard-Bold.otf",
  ),
);

function loadFont(filePath) {
  return fontkit(fs.readFileSync(filePath));
}

function mmToPt(mm) {
  return (mm / 25.4) * 72;
}

function clonePath(sourcePath) {
  const cloned = new sourcePath.constructor();

  for (const command of sourcePath.commands) {
    cloned[command.command](...command.args);
  }

  return cloned;
}

function measureText(font, text, size) {
  const run = font.layout(text);
  const scale = size / font.unitsPerEm;

  return run.positions.reduce((width, position, index) => {
    const glyph = run.glyphs[index];
    const advance = position.xAdvance || glyph.advanceWidth || 0;
    return width + advance * scale;
  }, 0);
}

function fitText(font, text, maxWidth, startingSize, minSize = 28) {
  let currentSize = startingSize;

  while (currentSize >= minSize) {
    if (measureText(font, text, currentSize) <= maxWidth) {
      return currentSize;
    }
    currentSize -= 1;
  }

  return minSize;
}

function buildTextPath(font, text, x, y, size, anchor = "start") {
  const run = font.layout(text);
  const scale = size / font.unitsPerEm;
  const width = measureText(font, text, size);
  const anchorOffset = anchor === "end" ? width : anchor === "middle" ? width / 2 : 0;
  let cursorX = x - anchorOffset;
  let d = "";

  run.glyphs.forEach((glyph, index) => {
    const position = run.positions[index];
    const glyphPath = clonePath(glyph.path);
    const xOffset = (position.xOffset || 0) * scale;
    const yOffset = (position.yOffset || 0) * scale;
    const advance = (position.xAdvance || glyph.advanceWidth || 0) * scale;

    glyphPath.scale(scale, -scale);
    glyphPath.translate(cursorX + xOffset, y - yOffset);
    d += glyphPath.toSVG();
    cursorX += advance;
  });

  return { d, width };
}

function pathElement({ id, d, fill }) {
  const idAttribute = id ? ` id="${id}"` : "";
  return `<path${idAttribute} d="${d}" fill="${fill}" />`;
}

function textElement({ id, font, text, x, y, size, anchor = "start", fill }) {
  const { d, width } = buildTextPath(font, text, x, y, size, anchor);
  return {
    svg: pathElement({ id, d, fill }),
    width,
    size,
  };
}

function brandMarkSvg(x, y, size, color) {
  const scale = size / 40;
  return [
    `<g id="brand-mark" transform="translate(${x} ${y}) scale(${scale})" fill="none" xmlns="http://www.w3.org/2000/svg">`,
    `<circle cx="7.5" cy="6.5" r="2.75" fill="${color}" />`,
    `<circle cx="20" cy="3.75" r="3.25" fill="${color}" />`,
    `<circle cx="32.5" cy="6.5" r="2.75" fill="${color}" />`,
    `<path d="M6.4 11.4 9.6 31.6 19.9 17.8 30.5 31.6 33.6 11.4" stroke="${color}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />`,
    `<path d="M9.7 31.6 20 22.2 30.3 31.6" stroke="${color}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />`,
    `</g>`,
  ].join("");
}

function diamondSvg(x, y, size, fill, opacity = 1) {
  return `<rect x="${x - size / 2}" y="${y - size / 2}" width="${size}" height="${size}" fill="${fill}" opacity="${opacity}" transform="rotate(45 ${x} ${y})" />`;
}

function sceneMarkup() {
  const headlineMaxWidth = 1180;
  const phoneMaxWidth = 520;
  const urlMaxWidth = 530;
  const brandNameMaxWidth = 430;

  const brandNameSize = fitText(blackFont, "최강피자", brandNameMaxWidth, 82, 64);
  const line1Size = fitText(blackFont, "소화가", headlineMaxWidth, 146, 118);
  const line2Size = fitText(blackFont, "잘되는", headlineMaxWidth, 146, 118);
  const line3Size = fitText(blackFont, "맛있는 피자", headlineMaxWidth, 144, 112);
  const phoneSize = fitText(blackFont, "1866-1623", phoneMaxWidth, 88, 68);
  const urlSize = fitText(boldFont, "ckpizza.co.kr", urlMaxWidth, 46, 34);

  const brandName = textElement({
    id: "brand-name",
    font: blackFont,
    text: "최강피자",
    x: 188,
    y: 101,
    size: brandNameSize,
    fill: COLORS.white,
  });

  const headlineLine1 = textElement({
    id: "headline-line-1",
    font: blackFont,
    text: "소화가",
    x: 110,
    y: 198,
    size: line1Size,
    fill: COLORS.white,
  });

  const headlineLine2 = textElement({
    id: "headline-line-2",
    font: blackFont,
    text: "잘되는",
    x: 110,
    y: 300,
    size: line2Size,
    fill: COLORS.gold,
  });

  const headlineLine3 = textElement({
    id: "headline-line-3",
    font: blackFont,
    text: "맛있는 피자",
    x: 110,
    y: 402,
    size: line3Size,
    fill: COLORS.white,
  });

  const franchiseLabel = textElement({
    id: "franchise-label",
    font: boldFont,
    text: "가맹문의",
    x: 2860,
    y: 382,
    size: 42,
    anchor: "end",
    fill: COLORS.red,
  });

  const franchisePhone = textElement({
    id: "franchise-phone",
    font: blackFont,
    text: "1866-1623",
    x: 2860,
    y: 434,
    size: phoneSize,
    anchor: "end",
    fill: COLORS.navyDeep,
  });

  const websiteUrl = textElement({
    id: "website-url",
    font: boldFont,
    text: "ckpizza.co.kr",
    x: 2860,
    y: 462,
    size: urlSize,
    anchor: "end",
    fill: COLORS.navyDeep,
  });

  const badgeSince = textElement({
    font: boldFont,
    text: "SINCE",
    x: 2340,
    y: 106,
    size: 21,
    anchor: "middle",
    fill: COLORS.white,
  });

  const badgeYear = textElement({
    font: blackFont,
    text: "2010",
    x: 2340,
    y: 155,
    size: 48,
    anchor: "middle",
    fill: COLORS.white,
  });

  return {
    pizzaPlacementWidthMm: 540,
    markup: [
      `<g id="background">`,
      `<rect x="-40" y="-40" width="3080" height="550" fill="${COLORS.navy}" />`,
      `<path d="M-40 188 L1020 -40 L1680 -40 L640 282 L-40 282 Z" fill="${COLORS.navyMid}" opacity="0.32" />`,
      `<ellipse cx="640" cy="285" rx="840" ry="255" fill="${COLORS.navyMid}" opacity="0.34" />`,
      `<ellipse cx="1185" cy="88" rx="160" ry="108" fill="${COLORS.gold}" opacity="0.06" />`,
      `<ellipse cx="2495" cy="205" rx="460" ry="215" fill="${COLORS.navyMid}" opacity="0.55" />`,
      `<ellipse cx="2758" cy="334" rx="188" ry="34" fill="${COLORS.shadow}" opacity="0.28" />`,
      `<path d="M1600 336H3040V510H1515L1600 336Z" fill="${COLORS.gold}" />`,
      `<line x1="1648" y1="336" x2="3030" y2="336" stroke="${COLORS.white}" stroke-width="3" opacity="0.55" />`,
      `</g>`,
      `<g id="left-panel">`,
      diamondSvg(111, 66, 10, COLORS.gold, 1),
      diamondSvg(144, 66, 10, COLORS.gold, 0.94),
      diamondSvg(177, 66, 10, COLORS.gold, 0.88),
      diamondSvg(210, 66, 10, COLORS.gold, 0.82),
      brandMarkSvg(110, 50, 48, COLORS.gold),
      brandName.svg,
      `<line x1="110" y1="120" x2="720" y2="120" stroke="${COLORS.gold}" stroke-width="3" stroke-linecap="round" opacity="0.7" />`,
      headlineLine1.svg,
      headlineLine2.svg,
      headlineLine3.svg,
      `</g>`,
      `<g id="badge">`,
      `<circle cx="2340" cy="128" r="64" fill="${COLORS.red}" />`,
      `<circle cx="2340" cy="128" r="56" fill="none" stroke="${COLORS.white}" stroke-width="4" stroke-dasharray="10 8" opacity="0.92" />`,
      diamondSvg(2340, 80, 7, COLORS.white, 0.96),
      badgeSince.svg,
      badgeYear.svg,
      `</g>`,
      `<g id="pizza">`,
      `<image x="2462" y="-28" width="540" height="543" href="./${PIZZA_OUTPUT_NAME}" xlink:href="./${PIZZA_OUTPUT_NAME}" preserveAspectRatio="xMidYMid meet" />`,
      `</g>`,
      `<g id="contact">`,
      `<line x1="2280" y1="399" x2="2860" y2="399" stroke="${COLORS.navyDeep}" stroke-width="3" stroke-linecap="round" opacity="0.24" />`,
      franchiseLabel.svg,
      franchisePhone.svg,
      websiteUrl.svg,
      `</g>`,
    ].join("\n"),
  };
}

function buildSvgDocument({ widthMm, heightMm, viewBox, scene }) {
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${widthMm}mm" height="${heightMm}mm" viewBox="${viewBox}" role="img" aria-labelledby="title desc">`,
    `<title id="title">최강피자 창고 벽면 스티커</title>`,
    `<desc id="desc">최강피자 브랜드 슬로건과 가맹 문의 정보를 담은 2연판 창고 벽면 스티커 디자인</desc>`,
    scene.markup,
    `</svg>`,
  ].join("\n");
}

function writeFile(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents);
}

function writePdfFromSvg(filePath, svgString, widthMm, heightMm) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: [mmToPt(widthMm), mmToPt(heightMm)],
      margin: 0,
      info: {
        Title: path.basename(filePath, ".pdf"),
        Author: "OpenAI Codex",
        Subject: "Choigang Pizza warehouse sticker print asset",
      },
    });

    const output = fs.createWriteStream(filePath);
    doc.pipe(output);

    try {
      SVGtoPDF(doc, svgString, 0, 0, {
        width: mmToPt(widthMm),
        height: mmToPt(heightMm),
        preserveAspectRatio: "none",
        assumePt: false,
        imageCallback: (link) => {
          if (/^(https?:|data:)/.test(link)) {
            return link;
          }

          return path.resolve(OUTPUT_DIR, link);
        },
      });
      doc.end();
    } catch (error) {
      reject(error);
      return;
    }

    output.on("finish", resolve);
    output.on("error", reject);
  });
}

function writeMetadata(scene) {
  const placedWidthInches = scene.pizzaPlacementWidthMm / 25.4;
  const pizzaDpi = 2663 / placedWidthInches;

  const metadata = {
    trimSizeMm: {
      width: DIMENSIONS.trimWidthMm,
      height: DIMENSIONS.trimHeightMm,
    },
    panelTrimSizeMm: {
      width: DIMENSIONS.panelWidthMm,
      height: DIMENSIONS.panelHeightMm,
    },
    bleedMm: DIMENSIONS.bleedMm,
    safeAreaInsetMm: DIMENSIONS.safeMm,
    palette: COLORS,
    requiredText: [
      "최강피자",
      "소화가 잘되는 맛있는 피자",
      "가맹문의",
      "1866-1623",
      "ckpizza.co.kr",
    ],
    pizzaImageEffectiveDpi: Number(pizzaDpi.toFixed(2)),
  };

  writeFile(
    path.join(OUTPUT_DIR, "warehouse-sticker-metadata.json"),
    `${JSON.stringify(metadata, null, 2)}\n`,
  );

  if (pizzaDpi < 120) {
    throw new Error(`Pizza image effective DPI is below 120: ${pizzaDpi}`);
  }
}

async function main() {
  const scene = sceneMarkup();

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.copyFileSync(PIZZA_SOURCE_PATH, path.join(OUTPUT_DIR, PIZZA_OUTPUT_NAME));

  const masterSvg = buildSvgDocument({
    widthMm: VIEWPORTS.master.widthMm,
    heightMm: VIEWPORTS.master.heightMm,
    viewBox: VIEWPORTS.master.viewBox,
    scene,
  });

  const leftSvg = buildSvgDocument({
    widthMm: VIEWPORTS.leftPrint.widthMm,
    heightMm: VIEWPORTS.leftPrint.heightMm,
    viewBox: VIEWPORTS.leftPrint.viewBox,
    scene,
  });

  const rightSvg = buildSvgDocument({
    widthMm: VIEWPORTS.rightPrint.widthMm,
    heightMm: VIEWPORTS.rightPrint.heightMm,
    viewBox: VIEWPORTS.rightPrint.viewBox,
    scene,
  });

  writeFile(path.join(OUTPUT_DIR, VIEWPORTS.master.filename), masterSvg);
  writeFile(path.join(OUTPUT_DIR, VIEWPORTS.leftPrint.filename), leftSvg);
  writeFile(path.join(OUTPUT_DIR, VIEWPORTS.rightPrint.filename), rightSvg);

  await writePdfFromSvg(
    path.join(OUTPUT_DIR, VIEWPORTS.leftPrint.pdfName),
    leftSvg,
    VIEWPORTS.leftPrint.widthMm,
    VIEWPORTS.leftPrint.heightMm,
  );

  await writePdfFromSvg(
    path.join(OUTPUT_DIR, VIEWPORTS.rightPrint.pdfName),
    rightSvg,
    VIEWPORTS.rightPrint.widthMm,
    VIEWPORTS.rightPrint.heightMm,
  );

  writeMetadata(scene);

  console.log(`Generated assets in ${OUTPUT_DIR}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
