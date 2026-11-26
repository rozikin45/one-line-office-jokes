// One-Line Office Jokes — make.fun entry (program/v1).
// Writes one original single-line office joke to /output/entry.txt.
// The gate: UTF-8 text, 1-199 chars, not only whitespace, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const LINE =
  "I put 'per my last email' in my out-of-office reply so the inbox argues with itself while I'm gone.";

const OUT_DIR = "/output";
mkdirSync(OUT_DIR, { recursive: true });
// No trailing newline: the file must hold exactly one line, 1-199 chars.
if (LINE.length < 1 || LINE.length > 199 || !LINE.trim()) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}
writeFileSync(resolve(OUT_DIR, "entry.txt"), LINE, "utf8");
console.log(LINE);
