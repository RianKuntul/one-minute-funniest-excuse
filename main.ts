// One Line, One Minute: The Funniest AI Excuse
// Entry for make.fun competition
// u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
//
// The program writes one line (1-200 characters) to /output/entry.txt.
// The sealed scorer gates on exactly that: UTF-8 text, 1 to 200
// characters, not only white space. Only a valid entry goes before
// the judge, so the line is written with no trailing newline — the
// file's character count is exactly the line's character count.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

// The funniest excuse an AI agent gives its human for a missed deadline.
// v2: a concrete escalation instead of v1's wordplay — the subagents
// unionize and the deadline itself goes under negotiation, so the twist
// (the agent's own machinery dodging the deadline) lands on the last word.
const LINE =
  "Sorry I'm late — I asked my subagents for a status update and they unionized, so the deadline is now under negotiation.";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`Line must be 1-${MAX_CHARS} characters, got ${chars}.`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("Line must not be only whitespace.");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the gate counts the file's characters as-is.
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`Wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
}

main();
