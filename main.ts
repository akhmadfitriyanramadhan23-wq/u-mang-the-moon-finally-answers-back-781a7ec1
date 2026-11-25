import { mkdirSync, writeFileSync } from "node:fs";

// One line the Moon says back to everyone who stared up at it.
// Wry, old, a little tired of being wished upon: three escalating
// wishes, then the turn — nobody ever wished the Moon anything back.
// v2 (revised): one single sentence instead of two, so the turn lands
// at the very end in one breath — "not one of you" stings harder than
// "nobody has", and the line now reads as one comeback, not a setup
// followed by a punchline.
const line =
  "You wished on me for a promotion, a parking spot, and your ex's Wi-Fi password — and in four billion years, not one of you has wished me a good night.";

// Validate: 1-240 Unicode code points, non-blank, single line.
const count = [...line].length;
if (count < 1 || count > 240) {
  throw new Error(`line is ${count} code points, must be 1-240`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
