// eslint.config.js (root)
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';

export default [
  // 1) Ignore patterns (must be an array)
  {
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/node_modules/**',
      '**/*.config.js',
      '**/*.config.cjs',
    ],
  },

  // 2) Base JS rules
  js.configs.recommended,

  // 3) TypeScript rules
  ...tseslint.configs.recommended,

  // 4) React rules
  {
    plugins: { react },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },

  // 5) Prettier integration
  {
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // 6) Global settings
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
