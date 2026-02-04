import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
  { files: ["**/*.json"], ...json.configs.recommended },
  { files: ["**/*.jsonc"], ...json.configs.recommended },
  { files: ["**/*.md"], ...markdown.configs.recommended },
  { files: ["**/*.css"], ...css.configs.recommended },
  { rules: { 
    "indent": ["error", 2], 
    "semi": ["error", "always"],
    "typescript-eslint/no-empty-interface": "off" } }
]);
 