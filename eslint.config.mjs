import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: { js, react: pluginReact },
    extends: ['js/recommended'],
  },
  tseslint.configs.recommended,
  {
    // Note: there should be no other properties in this object
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**'],
  },
]);
