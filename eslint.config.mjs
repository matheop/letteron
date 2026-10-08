import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default defineConfig(
  // artifact/ est le miroir de l'artifact claude.ai : on ne le lint pas, on ne l'édite pas.
  { ignores: ["**/node_modules/", "**/dist/", "packages/design-system/artifact/", "packages/design-system/preview/"] },
  js.configs.recommended,
  tseslint.configs.recommended,
  { languageOptions: { globals: globals.node } },
);
