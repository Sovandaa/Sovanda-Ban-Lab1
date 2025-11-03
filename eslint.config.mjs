import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended"),

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.mocha,
        },

        ecmaVersion: 12,
        sourceType: "module",
    },

    rules: {},
}]);

// const { defineConfig } = require("eslint/config");
// const globals = require("globals");
// const js = require("@eslint/js");
// const { FlatCompat } = require("@eslint/eslintrc");

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
//   allConfig: js.configs.all,
// });

// module.exports = defineConfig([
//   {
//     extends: compat.extends("eslint:recommended"),
//     languageOptions: {
//       globals: {
//         ...globals.node,
//         ...globals.mocha,
//       },
//       ecmaVersion: 2021,
//       sourceType: "script",
//     },
//     rules: {},
//   },
// ]);