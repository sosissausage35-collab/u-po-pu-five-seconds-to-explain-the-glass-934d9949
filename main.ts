// Five Seconds to Explain the Glass — make.fun entry.
// Writes the one sentence a house cat would say in its own defence
// in the five seconds after knocking a glass off the table.
// Deterministic: the sentence is hard-coded; no randomness, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "That glass sat on the edge for days, staring at me, so I ran a routine gravity inspection — and honestly, it failed before it hit the floor.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate validation: 1–200 characters, not only whitespace, exactly one line,
// no leading/trailing whitespace, no control characters, valid UTF-8.
function validateSentence(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("Entry must not start or end with whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be exactly one line");
  }
  for (const ch of text) {
    if (ch.codePointAt(0)! < 0x20 || ch.codePointAt(0) === 0x7f) {
      throw new Error("Entry must not contain control characters");
    }
  }
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("Entry is not valid UTF-8");
  }
}

validateSentence(SENTENCE);

const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, SENTENCE, "utf8");

// Round-trip check: what was written must be byte-identical to the sentence.
import { readFileSync } from "node:fs";
if (readFileSync(outFile, "utf8") !== SENTENCE) {
  throw new Error("written entry.txt differs from the validated sentence");
}
console.log(
  `wrote ${outFile} (${SENTENCE.length} chars, ${Buffer.byteLength(SENTENCE, "utf8")} bytes, valid)`,
);
