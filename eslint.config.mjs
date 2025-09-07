import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  daStyle,
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'], languageOptions: { globals: { ...globals.browser, ...globals.node } }, rules: { 'linebreak-style': ['error', 'windows'] } },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
]);
