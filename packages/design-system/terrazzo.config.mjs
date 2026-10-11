import { defineConfig } from "@terrazzo/cli";
import css from "@terrazzo/plugin-css";

const name = (id) => (id.startsWith("color.") ? id.slice(6) : id.replaceAll(".", "-"));
// Noms historiques des variables de typo : --text-<style>-font|size|line|weight|tracking.
const SUB = { "font-family": "font", "font-size": "size", "line-height": "line", "font-weight": "weight", "letter-spacing": "tracking" };
const px = (d) => `${d.value}${d.unit}`;

// dist/tokens.css (point d'entrée importé par les apps) = les variables + une classe par style de texte.
function textClasses() {
  return {
    name: "letteron-text-classes",
    build({ tokens, outputFile }) {
      const rules = Object.values(tokens)
        .filter((t) => t.$type === "typography")
        .sort((a, b) => a.id.localeCompare(b.id))
        .map((t) => {
          const v = `--${name(t.id)}`;
          const tracking = t.$value.letterSpacing.value !== 0 ? ` letter-spacing: var(${v}-tracking);` : "";
          return `.lo-${name(t.id)} { font-family: var(${v}-font); font-size: var(${v}-size); line-height: var(${v}-line); font-weight: var(${v}-weight);${tracking} }`;
        });
      outputFile(
        "tokens.css",
        ["/* Généré par Terrazzo depuis tokens/*.tokens.json — ne pas éditer. */", '@import "./variables.css";', "", "/* Une classe par style de texte (tokens text.*). */", ...rules, ""].join("\n"),
      );
    },
  };
}

// Contrastes promis dans les $description des couleurs (WCAG 2.1 AA), vérifiés sur le thème par défaut.
const pair = (fg, bg, largeText = false) => ({ foreground: `color.${fg}`, background: `color.${bg}`, largeText });
const CONTRAST_PAIRS = [
  ...["paper", "surface", "coral-soft"].flatMap((bg) => [pair("ink", bg), pair("ink-muted", bg), pair("coral-strong", bg)]),
  pair("on-coral", "coral-strong"),
  pair("on-sun", "sun"),
  ...["paper", "surface", "mint-soft"].map((bg) => pair("mint", bg)),
  pair("line-strong", "surface", true), // contrôles : 3:1
];

export default defineConfig({
  tokens: ["./tokens/letteron.resolver.json"],
  outDir: "./dist/",
  lint: {
    rules: {
      "core/descriptions": "error",
      "core/consistent-naming": ["error", { format: "kebab-case" }],
      "a11y/min-contrast": ["error", { level: "AA", pairs: CONTRAST_PAIRS }],
    },
  },
  plugins: [
    textClasses(),
    css({
      filename: "variables.css",
      legacyHex: true,
      omitTypographyShorthand: true,
      variableName: (token) => `--${name(token.id)}`,
      subValueVariableName: (v, sub) => `${v}-${SUB[sub] ?? sub}`,
      // Typographie : hauteur de ligne en px (le ratio DTCG × la taille) et pas d'interlettrage à 0.
      transform(token) {
        if (token.$type !== "typography") return undefined;
        const v = token.$value;
        const out = {
          "font-family": `var(--${name(token.partialAliasOf.fontFamily)})`,
          "font-size": px(v.fontSize),
          "line-height": `${Math.round(v.lineHeight * v.fontSize.value)}px`,
          "font-weight": String(v.fontWeight),
        };
        if (v.letterSpacing.value !== 0) out["letter-spacing"] = px(v.letterSpacing);
        return out;
      },
      permutations: [
        { input: {}, prepare: (c) => `:root {\n${c}\n  color-scheme: light;\n}` },
        { input: { theme: "dark" }, include: ["color.**", "shadow.**", "focus.**"], prepare: (c) => `@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n${c}\n    color-scheme: dark;\n  }\n}\n:root[data-theme="dark"] {\n${c}\n  color-scheme: dark;\n}` },
      ],
    }),
  ],
});
