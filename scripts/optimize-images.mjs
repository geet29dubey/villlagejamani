#!/usr/bin/env node
/**
 * Creates optimised display copies of archival images.
 *
 * Originals in assets/archive/originals and assets/photos are never modified.
 * Output: public/images/<id>-<width>.webp plus src/content/generated/image-manifest.json
 * (dimensions + tiny blurred placeholder), used by <ArchiveImage/> to prevent layout shift.
 */
import { readdir, mkdir, stat, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SOURCE_DIRS = ["assets/archive/originals", "assets/photos"];
const OUT_DIR = path.join(root, "public/images");
const MANIFEST = path.join(root, "src/content/generated/image-manifest.json");
const WIDTHS = [480, 960, 1600, 2400];

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  if (existsSync(MANIFEST)) {
    console.warn("[images] sharp unavailable — keeping existing manifest and outputs.");
    process.exit(0);
  }
  console.error("[images] sharp is required to generate the image manifest.");
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });
await mkdir(path.dirname(MANIFEST), { recursive: true });

const previous = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, "utf8")) : {};
const manifest = {};

for (const dir of SOURCE_DIRS) {
  const abs = path.join(root, dir);
  if (!existsSync(abs)) continue;
  for (const file of (await readdir(abs)).sort()) {
    if (!/\.(jpe?g|png|webp|tiff?)$/i.test(file)) continue;
    const id = file.replace(/\.[^.]+$/, "");
    const src = path.join(abs, file);
    const srcStat = await stat(src);
    const meta = await sharp(src).rotate().metadata();
    const width = meta.autoOrient?.width ?? meta.width;
    const height = meta.autoOrient?.height ?? meta.height;
    const widths = WIDTHS.filter((w) => w < width).concat(width > WIDTHS.at(-1) ? [] : [width]);
    const unique = [...new Set(widths)].sort((a, b) => a - b);

    const variants = [];
    for (const w of unique) {
      const out = path.join(OUT_DIR, `${id}-${w}.webp`);
      const fresh = existsSync(out) && (await stat(out)).mtimeMs >= srcStat.mtimeMs;
      if (!fresh) {
        await sharp(src).rotate().resize({ width: w }).webp({ quality: 80 }).toFile(out);
      }
      variants.push({ width: w, src: `/images/${id}-${w}.webp` });
    }

    let blur = previous[id]?.blur;
    if (!blur || previous[id]?.sourceMtime !== Math.round(srcStat.mtimeMs)) {
      const buf = await sharp(src).rotate().resize({ width: 16 }).webp({ quality: 40 }).toBuffer();
      blur = `data:image/webp;base64,${buf.toString("base64")}`;
    }

    manifest[id] = {
      width,
      height,
      original: path.posix.join(dir, file),
      sourceMtime: Math.round(srcStat.mtimeMs),
      blur,
      variants,
    };
  }
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`[images] ${Object.keys(manifest).length} images → ${path.relative(root, MANIFEST)}`);

// Open Graph share image (1200×630), generated from brand shapes.
const ogOut = path.join(root, "public/og/jamani-og.png");
if (!existsSync(ogOut)) {
  await mkdir(path.dirname(ogOut), { recursive: true });
  const rays = Array.from({ length: 28 }, (_, i) => {
    const a = (i / 28) * Math.PI * 2;
    const r1 = 190;
    const r2 = i % 2 ? 250 : 230;
    const x = (r) => 900 + Math.cos(a) * r;
    const y = (r) => 315 + Math.sin(a) * r;
    const b = a + 0.1;
    const c = a - 0.1;
    return `<polygon points="${900 + Math.cos(c) * r1},${315 + Math.sin(c) * r1} ${x(r2)},${y(r2)} ${900 + Math.cos(b) * r1},${315 + Math.sin(b) * r1}" fill="${i % 2 ? "#F9A825" : "#EF6C00"}"/>`;
  }).join("");
  const dots = Array.from({ length: 36 }, (_, i) => {
    const a = (i / 36) * Math.PI * 2;
    return `<circle cx="${900 + Math.cos(a) * 165}" cy="${315 + Math.sin(a) * 165}" r="5" fill="#EF6C00"/>`;
  }).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#1A2359"/>
  ${rays}<circle cx="900" cy="315" r="192" fill="#F9A825"/>${dots}
  <circle cx="900" cy="315" r="120" fill="#EF6C00"/>
  <rect x="888" y="300" width="24" height="170" fill="#6D2E1F"/>
  <ellipse cx="860" cy="270" rx="70" ry="80" fill="#2E7D32"/><ellipse cx="940" cy="270" rx="70" ry="80" fill="#2E7D32"/>
  ${Array.from({ length: 30 }, (_, i) => `<circle cx="${820 + (i % 6) * 32}" cy="${215 + Math.floor(i / 6) * 26 + (i % 2) * 10}" r="5" fill="#FFF6E8"/>`).join("")}
  <ellipse cx="870" cy="330" rx="11" ry="14" fill="#F9A825"/><ellipse cx="945" cy="320" rx="11" ry="14" fill="#F9A825"/>
  <rect x="0" y="600" width="1200" height="30" fill="#AD1457"/>
  <text x="80" y="300" font-family="DejaVu Sans, sans-serif" font-weight="700" font-size="110" fill="#F9A825">JAMANI</text>
  <text x="84" y="370" font-family="DejaVu Sans, sans-serif" font-size="34" fill="#FFF6E8">Near Itarsi · Madhya Pradesh</text>
  <text x="84" y="425" font-family="DejaVu Sans, sans-serif" font-size="26" fill="#F4E4C8">Music · Kathak · Orchards · Heritage</text>
  <text x="84" y="540" font-family="DejaVu Sans, sans-serif" font-size="24" fill="#F4E4C8">villagejamani.com</text>
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(ogOut);
  console.log("[images] generated public/og/jamani-og.png");
}
