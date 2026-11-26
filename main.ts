import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function line(): string {
  return "Tests are green because CI cached last Tuesday's green badge — nobody told it the app retired on Wednesday.";
}

function validate(text: string): void {
  if (text.length < 1 || text.length >= 140) {
    throw new Error("line must be 1..139 characters");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("line must not have leading or trailing whitespace");
  }
}

function main(): void {
  const text = line();
  validate(text);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, text, "utf8");
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== text) {
    throw new Error("read-back mismatch");
  }
  const sha256 = createHash("sha256").update(readBack, "utf8").digest("hex");
  console.log(`entry.txt written (${readBack.length} chars) sha256=${sha256}`);
}

main();
