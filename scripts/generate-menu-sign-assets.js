const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { PDFDocument, rgb } = require("pdf-lib");
const { PNG } = require("pngjs");

const ROOT_DIR = path.resolve(__dirname, "..");
const SOURCE_AI = path.join(
  ROOT_DIR,
  "메뉴작업",
  "4.21최강피자16절3단접지_최종.ai",
);
const OUTPUT_DIR = path.join(ROOT_DIR, "메뉴작업", "입간판_600x1800");

const OUTPUT_BASENAME = "ckpizza-menu-sign-600x1800";
const OUTPUT_PDF = path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}.pdf`);
const OUTPUT_SVG = path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}.svg`);
const OUTPUT_AI = path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}.ai`);
const OUTPUT_PREVIEW = path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}-preview.png`);
const OUTPUT_PRINT_RASTER = path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}-print-raster.png`);
const TEMP_VECTOR_PDF = path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}-vector-source.pdf`);
const RASTER_DPI = 150;

const PAGE_WIDTH_PT = 737.004;
const PAGE_HEIGHT_PT = 524.414;
const SECTION_WIDTH_PT = PAGE_WIDTH_PT / 3;

const CROP_BOXES = {
  menu: {
    left: 0,
    bottom: 0,
    right: SECTION_WIDTH_PT,
    top: PAGE_HEIGHT_PT,
  },
  set: {
    left: SECTION_WIDTH_PT,
    bottom: 0,
    right: SECTION_WIDTH_PT * 2,
    top: PAGE_HEIGHT_PT,
  },
};

const COLORS = {
  menuCream: { hex: "#fbf9ee", pdf: rgb(0.984, 0.976, 0.933) },
  setGray: { hex: "#e9e8e0", pdf: rgb(0.914, 0.91, 0.878) },
  badgeRed: { hex: "#d35243" },
};

const PRICE_TEXT_REMOVE_REGIONS_MM = [
  { mode: "red", fill: "menuCream", x: 128, y: 255, width: 350, height: 30 },
  { mode: "red", fill: "menuCream", x: 158, y: 358, width: 290, height: 36 },
  { mode: "red", fill: "menuCream", x: 158, y: 468, width: 290, height: 40 },
  { mode: "red", fill: "menuCream", x: 158, y: 579, width: 290, height: 40 },
  { mode: "red", fill: "menuCream", x: 158, y: 690, width: 290, height: 40 },
  { mode: "red", fill: "menuCream", x: 158, y: 803, width: 290, height: 40 },
  { mode: "red", fill: "setGray", x: 305, y: 950, width: 110, height: 35, maxComponentWidth: 95 },
  { mode: "red", fill: "setGray", x: 125, y: 1048, width: 125, height: 55 },
  { mode: "red", fill: "setGray", x: 125, y: 1232, width: 125, height: 55 },
  { mode: "white", fill: "badgeRed", x: 405, y: 1387, width: 64, height: 154, maxComponentWidth: 55, paddingPixels: 1 },
  { mode: "red", fill: "setGray", x: 187, y: 1641, width: 32, height: 20, maxComponentWidth: 42 },
  { mode: "red", fill: "setGray", x: 312, y: 1641, width: 34, height: 20, maxComponentWidth: 42 },
  { mode: "red", fill: "setGray", x: 468, y: 1641, width: 32, height: 20, maxComponentWidth: 42 },
  { mode: "red", fill: "setGray", x: 203, y: 1716, width: 40, height: 34, maxComponentWidth: 42 },
  { mode: "red", fill: "setGray", x: 340, y: 1712, width: 38, height: 34, maxComponentWidth: 42 },
  { mode: "red", fill: "setGray", x: 468, y: 1715, width: 32, height: 20, maxComponentWidth: 42 },
];

function mmToPt(mm) {
  return (mm / 25.4) * 72;
}

function fitIntoBox(sourceWidth, sourceHeight, boxWidth, boxHeight) {
  const scale = Math.min(boxWidth / sourceWidth, boxHeight / sourceHeight);
  return {
    width: sourceWidth * scale,
    height: sourceHeight * scale,
    scale,
  };
}

function run(command, args) {
  execFileSync(command, args, { stdio: "inherit" });
}

async function writeVectorPdf(filePath) {
  const sourceBytes = fs.readFileSync(SOURCE_AI);
  const sourcePdf = await PDFDocument.load(sourceBytes, { ignoreEncryption: true });
  const sourcePage = sourcePdf.getPage(1);
  const outputPdf = await PDFDocument.create();

  const pageWidth = mmToPt(600);
  const pageHeight = mmToPt(1800);
  const slotHeight = pageHeight / 2;
  const page = outputPdf.addPage([pageWidth, pageHeight]);

  page.drawRectangle({
    x: 0,
    y: slotHeight,
    width: pageWidth,
    height: slotHeight,
    color: COLORS.menuCream.pdf,
  });

  page.drawRectangle({
    x: 0,
    y: 0,
    width: pageWidth,
    height: slotHeight,
    color: COLORS.setGray.pdf,
  });

  const menuPanel = await outputPdf.embedPage(sourcePage, CROP_BOXES.menu);
  const setPanel = await outputPdf.embedPage(sourcePage, CROP_BOXES.set);
  const sourcePanelWidth = SECTION_WIDTH_PT;
  const sourcePanelHeight = PAGE_HEIGHT_PT;
  const fitted = fitIntoBox(sourcePanelWidth, sourcePanelHeight, pageWidth, slotHeight);
  const x = (pageWidth - fitted.width) / 2;

  page.drawPage(menuPanel, {
    x,
    y: slotHeight + (slotHeight - fitted.height) / 2,
    width: fitted.width,
    height: fitted.height,
  });

  page.drawPage(setPanel, {
    x,
    y: (slotHeight - fitted.height) / 2,
    width: fitted.width,
    height: fitted.height,
  });

  fs.writeFileSync(filePath, await outputPdf.save({ useObjectStreams: false }));
}

function cropSectionSvg(name, cropX, cropY, cropWidth, cropHeight) {
  const outputPath = path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}-${name}-section.svg`);

  run("pdftocairo", [
    "-svg",
    "-f",
    "2",
    "-l",
    "2",
    "-r",
    "72",
    "-x",
    String(Math.round(cropX)),
    "-y",
    String(Math.round(cropY)),
    "-W",
    String(Math.round(cropWidth)),
    "-H",
    String(Math.round(cropHeight)),
    SOURCE_AI,
    outputPath,
  ]);

  return outputPath;
}

function mmRegionToPixels(region, imageWidth, imageHeight) {
  const x = Math.max(0, Math.floor((region.x / 600) * imageWidth));
  const y = Math.max(0, Math.floor((region.y / 1800) * imageHeight));
  const width = Math.ceil((region.width / 600) * imageWidth);
  const height = Math.ceil((region.height / 1800) * imageHeight);

  return {
    x,
    y,
    width: Math.max(0, Math.min(width, imageWidth - x)),
    height: Math.max(0, Math.min(height, imageHeight - y)),
  };
}

function isPriceRed(r, g, b) {
  return r > 100 && g < 175 && b < 175 && r - g > 10 && r - b > 10;
}

function isWhiteText(r, g, b) {
  return r > 165 && g > 165 && b > 165;
}

function getPredicate(mode) {
  if (mode === "white") {
    return isWhiteText;
  }

  return isPriceRed;
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");

  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
}

function fillPixel(png, x, y, fill) {
  const index = (png.width * y + x) << 2;
  png.data[index] = fill.r;
  png.data[index + 1] = fill.g;
  png.data[index + 2] = fill.b;
  png.data[index + 3] = 255;
}

function findTextFillBoxes(png, regions) {
  const fillBoxes = [];
  const neighborOffsets = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  for (const region of regions) {
    const bounds = mmRegionToPixels(region, png.width, png.height);
    const visited = new Uint8Array(bounds.width * bounds.height);
    const predicate = getPredicate(region.mode);
    const maxComponentWidth = region.maxComponentWidth ?? 36;
    const maxComponentHeight = region.maxComponentHeight ?? 30;
    const minComponentPixels = region.minComponentPixels ?? 3;
    const fill = hexToRgb(COLORS[region.fill].hex);

    for (let localY = 0; localY < bounds.height; localY += 1) {
      for (let localX = 0; localX < bounds.width; localX += 1) {
        const localIndex = localY * bounds.width + localX;
        if (visited[localIndex]) {
          continue;
        }

        visited[localIndex] = 1;

        const startX = bounds.x + localX;
        const startY = bounds.y + localY;
        const startPixel = (png.width * startY + startX) << 2;

        if (!predicate(png.data[startPixel], png.data[startPixel + 1], png.data[startPixel + 2])) {
          continue;
        }

        const queue = [{ x: localX, y: localY }];
        const component = [];
        let minX = localX;
        let maxX = localX;
        let minY = localY;
        let maxY = localY;

        for (let index = 0; index < queue.length; index += 1) {
          const current = queue[index];
          component.push(current);

          if (current.x < minX) minX = current.x;
          if (current.x > maxX) maxX = current.x;
          if (current.y < minY) minY = current.y;
          if (current.y > maxY) maxY = current.y;

          for (const [offsetX, offsetY] of neighborOffsets) {
            const nextX = current.x + offsetX;
            const nextY = current.y + offsetY;

            if (nextX < 0 || nextX >= bounds.width || nextY < 0 || nextY >= bounds.height) {
              continue;
            }

            const nextLocalIndex = nextY * bounds.width + nextX;
            if (visited[nextLocalIndex]) {
              continue;
            }

            visited[nextLocalIndex] = 1;
            const nextPixel = (png.width * (bounds.y + nextY) + bounds.x + nextX) << 2;

            if (predicate(png.data[nextPixel], png.data[nextPixel + 1], png.data[nextPixel + 2])) {
              queue.push({ x: nextX, y: nextY });
            }
          }
        }

        const componentWidthMm = ((maxX - minX + 1) / png.width) * 600;
        const componentHeightMm = ((maxY - minY + 1) / png.height) * 1800;

        if (
          component.length < minComponentPixels ||
          componentWidthMm > maxComponentWidth ||
          componentHeightMm > maxComponentHeight
        ) {
          continue;
        }

        const padding = region.paddingPixels ?? 0;
        const maskStartX = Math.max(0, minX - padding);
        const maskEndX = Math.min(bounds.width - 1, maxX + padding);
        const maskStartY = Math.max(0, minY - padding);
        const maskEndY = Math.min(bounds.height - 1, maxY + padding);

        fillBoxes.push({
          x: bounds.x + maskStartX,
          y: bounds.y + maskStartY,
          width: maskEndX - maskStartX + 1,
          height: maskEndY - maskStartY + 1,
          fill,
          mode: region.mode,
        });
      }
    }
  }

  return fillBoxes;
}

function buildBoxMask(imageWidth, imageHeight, boxes) {
  const mask = new Uint8Array(imageWidth * imageHeight);

  for (const box of boxes) {
    for (let y = box.y; y < box.y + box.height; y += 1) {
      for (let x = box.x; x < box.x + box.width; x += 1) {
        mask[imageWidth * y + x] = 1;
      }
    }
  }

  return mask;
}

function sampleBoxFill(original, mask, imageWidth, imageHeight, box) {
  if (box.mode === "white") {
    return box.fill;
  }

  for (let radius = 2; radius <= 35; radius += 1) {
    let red = 0;
    let green = 0;
    let blue = 0;
    let count = 0;

    const minX = Math.max(0, box.x - radius);
    const maxX = Math.min(imageWidth - 1, box.x + box.width - 1 + radius);
    const minY = Math.max(0, box.y - radius);
    const maxY = Math.min(imageHeight - 1, box.y + box.height - 1 + radius);

    for (let y = minY; y <= maxY; y += 1) {
      for (let x = minX; x <= maxX; x += 1) {
        const isPerimeter = x === minX || x === maxX || y === minY || y === maxY;
        if (!isPerimeter) {
          continue;
        }

        const pixel = imageWidth * y + x;
        if (mask[pixel]) {
          continue;
        }

        const dataIndex = pixel << 2;
        const r = original[dataIndex];
        const g = original[dataIndex + 1];
        const b = original[dataIndex + 2];

        if ((box.mode === "red" && isPriceRed(r, g, b)) || (box.mode === "white" && isWhiteText(r, g, b))) {
          continue;
        }

        red += r;
        green += g;
        blue += b;
        count += 1;
      }
    }

    if (count >= 8) {
      return {
        r: Math.round(red / count),
        g: Math.round(green / count),
        b: Math.round(blue / count),
      };
    }
  }

  return box.fill;
}

function processPriceRemoval(inputPath, outputPath) {
  const png = PNG.sync.read(fs.readFileSync(inputPath));
  const fillBoxes = findTextFillBoxes(png, PRICE_TEXT_REMOVE_REGIONS_MM);
  const original = Buffer.from(png.data);
  const mask = buildBoxMask(png.width, png.height, fillBoxes);

  for (const box of fillBoxes) {
    const fill = sampleBoxFill(original, mask, png.width, png.height, box);

    for (let y = box.y; y < box.y + box.height; y += 1) {
      for (let x = box.x; x < box.x + box.width; x += 1) {
        fillPixel(png, x, y, fill);
      }
    }
  }

  fs.writeFileSync(outputPath, PNG.sync.write(png));
}

function writePrintRaster() {
  const rasterBase = path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}-raw-raster`);
  const rawRasterPath = `${rasterBase}.png`;

  run("pdftocairo", ["-png", "-singlefile", "-r", String(RASTER_DPI), TEMP_VECTOR_PDF, rasterBase]);
  processPriceRemoval(rawRasterPath, OUTPUT_PRINT_RASTER);
  fs.rmSync(rawRasterPath, { force: true });
}

async function writeRasterPdf() {
  const outputPdf = await PDFDocument.create();
  const pageWidth = mmToPt(600);
  const pageHeight = mmToPt(1800);
  const page = outputPdf.addPage([pageWidth, pageHeight]);
  const raster = await outputPdf.embedPng(fs.readFileSync(OUTPUT_PRINT_RASTER));

  page.drawImage(raster, {
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
  });

  fs.writeFileSync(OUTPUT_PDF, await outputPdf.save({ useObjectStreams: false }));
  fs.copyFileSync(OUTPUT_PDF, OUTPUT_AI);
}

function writeSvg() {
  const rasterName = path.basename(OUTPUT_PRINT_RASTER);

  const svg = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="600mm" height="1800mm" viewBox="0 0 600 1800" role="img" aria-labelledby="title desc">`,
    `<title id="title">최강피자 메뉴 입간판</title>`,
    `<desc id="desc">PIZZA MENU 섹션과 세트 방문포장 할인 섹션을 위아래로 배치한 600mm x 1800mm 입간판 출력 파일</desc>`,
    `<image x="0" y="0" width="600" height="1800" href="./${rasterName}" preserveAspectRatio="none" />`,
    `</svg>`,
  ].join("\n");

  fs.writeFileSync(OUTPUT_SVG, svg);
}

function writePreview() {
  const previewBase = path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}-preview`);

  run("pdftocairo", ["-png", "-singlefile", "-r", "40", OUTPUT_PDF, previewBase]);

  const generated = `${previewBase}.png`;
  if (generated !== OUTPUT_PREVIEW) {
    fs.renameSync(generated, OUTPUT_PREVIEW);
  }
}

function writeReadme() {
  const readme = [
    "# 최강피자 메뉴 입간판 600x1800",
    "",
    "- 원본: `../4.21최강피자16절3단접지_최종.ai` 2페이지",
    "- 상단: `PIZZA MENU` 섹션",
    "- 하단: `세트 방문포장시 5,000원 할인` 섹션",
    "- 가격/추가금 숫자는 글자 영역만 제거했습니다.",
    "- 출력 크기: `600mm x 1800mm`",
    "- PDF 호환 AI: `ckpizza-menu-sign-600x1800.ai`",
    "- 최종 SVG는 같은 폴더의 고해상도 출력 이미지 `ckpizza-menu-sign-600x1800-print-raster.png`를 참조합니다.",
    "- 가격 제거는 고해상도 출력 이미지에서 처리했습니다.",
    "",
    "재생성:",
    "",
    "```bash",
    "node scripts/generate-menu-sign-assets.js",
    "```",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUTPUT_DIR, "README.md"), readme);
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.rmSync(path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}-menu-section.svg`), { force: true });
  fs.rmSync(path.join(OUTPUT_DIR, `${OUTPUT_BASENAME}-set-section.svg`), { force: true });

  await writeVectorPdf(TEMP_VECTOR_PDF);
  writePrintRaster();
  await writeRasterPdf();
  writeSvg();
  writePreview();
  writeReadme();
  fs.rmSync(TEMP_VECTOR_PDF, { force: true });

  console.log(`Generated menu sign assets in ${OUTPUT_DIR}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
