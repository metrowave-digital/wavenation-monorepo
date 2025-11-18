// eslint.config.js
import { fileURLToPath } from 'url';
import path from 'path';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import next from '@next/eslint-plugin-next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname);

export default [

  // ───────────────────────────────────────────────────────────────
  // 1. BASE CONFIG (JS + TS)
  // ───────────────────────────────────────────────────────────────
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // ───────────────────────────────────────────────────────────────
  // 2. MAIN LINTING RULESET
  // ───────────────────────────────────────────────────────────────
  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: ROOT,               // ← FIXED
        project: ['./tsconfig.json'],         // ← Root tsconfig
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier,
      'jsx-a11y': jsxA11y,
      next,
    },

    settings: {
      react: { version: 'detect' },
    },

    rules: {
      // Prettier formatting
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'es5',
          endOfLine: 'lf',
          printWidth: 100,
        },
      ],

      // TS hygiene
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'off',

      // React rules
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Console cleanup
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // ───────────────────────────────────────────────────────────────
  // 3. NODE / CONFIG FILES
  // ───────────────────────────────────────────────────────────────
  {
    files: ['**/*.config.{js,cjs,mjs,ts}'],
    ignores: true, // Ignore all config files
  },

  // ───────────────────────────────────────────────────────────────
  // 4. JS COMMONJS OVERRIDE
  // ───────────────────────────────────────────────────────────────
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },

  // ───────────────────────────────────────────────────────────────
  // 5. TEST ENVIRONMENTS (Vitest / Playwright)
  // ───────────────────────────────────────────────────────────────
  {
    files: ['**/*.test.*', '**/*.spec.*', '**/__tests__/**'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
  },

  // ───────────────────────────────────────────────────────────────
  // 6. GLOBAL IGNORES
  // ───────────────────────────────────────────────────────────────
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      '.turbo',
      '.next',
      'coverage',
      'pnpm-lock.yaml',

      // Ignore monorepo app build output
      'apps/**/.expo',
      'apps/**/build',
    ],
  },
];
