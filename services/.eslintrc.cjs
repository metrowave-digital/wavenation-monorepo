export default {
  root: true,
  parserOptions: { project: true },
  ignorePatterns: ['**/dist/**', '**/.next/**'],
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:n/recommended',
  ],
};
