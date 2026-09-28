#!/usr/bin/env node
/**
 * Lists every internal editorial note and every unset (null) content field in
 * src/content, so editors can see what still needs dates, photos, permissions or sources.
 * Usage: npm run editorial
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dir = path.join(root, "src/content");
const files = (await readdir(dir)).filter((f) => f.endsWith(".ts"));

const noteRe = /editorialNotes:\s*\n?\s*("(?:[^"\\]|\\.)*"|`[^`]*`)/g;
const nullRe = /^\s*(\w+):\s*null\b/;
const pendingRe = /verificationStatus:\s*"awaiting-confirmation"/;

let notes = 0;
let nulls = 0;
let awaiting = 0;
for (const file of files.sort()) {
  const src = await readFile(path.join(dir, file), "utf8");
  const lines = src.split("\n");
  const out = [];
  for (const m of src.matchAll(noteRe)) {
    const line = src.slice(0, m.index).split("\n").length;
    out.push(`  ⚑ ${file}:${line}  ${m[1].slice(1, -1)}`);
    notes++;
  }
  lines.forEach((l, i) => {
    const m = l.match(nullRe);
    if (m && !l.includes("as ") && !l.includes("//")) {
      out.push(`  ∅ ${file}:${i + 1}  ${m[1]} is not set`);
      nulls++;
    }
    if (pendingRe.test(l)) awaiting++;
  });
  if (out.length) console.log(`\n${file}\n${out.join("\n")}`);
}
console.log(
  `\n${notes} editorial notes · ${nulls} unset fields · ${awaiting} records awaiting confirmation\n` +
    "See EDITORIAL_CHECKLIST.md for the prioritised list.",
);
