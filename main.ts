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

// Gate validation: 1–200 characters, not only whitespace, exactly one line.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${SENTENCE.length}`);
}
if (SENTENCE.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (SENTENCE.includes("\n") || SENTENCE.includes("\r")) {
  throw new Error("Entry must be exactly one line");
}

writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
