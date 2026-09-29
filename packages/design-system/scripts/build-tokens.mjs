#!/usr/bin/env node
// Génère dist/tokens.css depuis artifact/tokens.json (format du type « Design System » de Claude).
// Thème clair par défaut, sombre via [data-theme="dark"] ou le réglage système (D-25).
// --check : échoue si dist/tokens.css n'est pas à jour.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(readFileSync(join(root, "artifact/tokens.json"), "utf8"));
const themes = tokens.color.themes.map((t) => t.id);
const [base, ...others] = themes;

const decl = (name, value) => `  --${name}: ${value};`;
const themed = (list, theme) =>
  list.map((t) => decl(t.name, typeof t.value === "string" ? t.value : t.value[theme] ?? t.value[base]));
const flat = (family) => (tokens[family]?.tokens ?? []).filter((t) => typeof t.value === "string" || t.value[base]);

const colors = tokens.color.tokens;
const shadows = tokens.shadow?.tokens ?? [];
const lines = [];
lines.push(`/* Généré par scripts/build-tokens.mjs depuis artifact/tokens.json — ne pas éditer. */`);
lines.push(":root {");
lines.push(...themed(colors, base));
lines.push(...themed(shadows, base));
for (const [k, v] of Object.entries(tokens.type.families)) lines.push(decl(`font-${k}`, v));
for (const fam of ["spacing", "radius"]) for (const t of flat(fam)) lines.push(decl(t.name, t.value));
for (const g of tokens.type.groups) {
  for (const s of g.styles) {
    lines.push(decl(`text-${s.name}-font`, `var(--font-${g.family})`));
    lines.push(decl(`text-${s.name}-size`, s.fontSize));
    lines.push(decl(`text-${s.name}-line`, s.lineHeight));
    lines.push(decl(`text-${s.name}-weight`, String(s.fontWeight)));
    if (s.letterSpacing) lines.push(decl(`text-${s.name}-tracking`, s.letterSpacing));
  }
}
lines.push("  color-scheme: light;");
lines.push("}");
for (const theme of others) {
  const body = [...themed(colors, theme), ...themed(shadows, theme), `  color-scheme: ${theme};`];
  lines.push(`@media (prefers-color-scheme: ${theme}) {`);
  lines.push(`  :root:not([data-theme="${base}"]) {`, ...body.map((l) => "  " + l), "  }", "}");
  lines.push(`:root[data-theme="${theme}"] {`, ...body, "}");
}
// Une classe par style de texte : .lo-text-display, .lo-text-body…
for (const g of tokens.type.groups) {
  for (const s of g.styles) {
    const n = s.name;
    lines.push(
      `.lo-text-${n} { font-family: var(--text-${n}-font); font-size: var(--text-${n}-size); line-height: var(--text-${n}-line); font-weight: var(--text-${n}-weight);${s.letterSpacing ? ` letter-spacing: var(--text-${n}-tracking);` : ""} }`
    );
  }
}
const css = lines.join("\n") + "\n";
const out = join(root, "dist/tokens.css");

if (process.argv.includes("--check")) {
  const current = existsSync(out) ? readFileSync(out, "utf8") : "";
  if (current !== css) {
    console.error("dist/tokens.css n'est pas à jour : lance `npm run tokens`.");
    process.exit(1);
  }
  console.log("tokens.css à jour.");
} else {
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, css);
  console.log(`dist/tokens.css écrit (${colors.length} couleurs, thèmes : ${themes.join(", ")}).`);
}
