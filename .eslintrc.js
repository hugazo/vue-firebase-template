/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const fs = require('fs');

function parseAutoImportsDts(contents) {
  const matchResults = contents.matchAll(/^\s+const (\w+): typeof import/gm);
  return Array.from(matchResults, ([, word]) => word);
}

function uiPackageAutoImportGlobals() {
  const SRC = path.resolve(__dirname, './auto-imports.d.ts');
  const contents = fs.readFileSync(SRC, { encoding: 'utf-8' });
  const parsed = parseAutoImportsDts(contents);
  return parsed.reduce((acc, word) => {
    acc[word] = 'readonly';
    return acc;
  }, {});
}

module.exports = {
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  globals: {
    ...uiPackageAutoImportGlobals(),
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: [
      './tsconfig.json',
    ],
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  rules: {
    // Enable vue/script-setup-uses-vars rule
    'vue/script-setup-uses-vars': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true },
    ],
    'no-multiple-empty-lines': [
      'error',
      { max: 2 },
    ],
  },
  ignorePatterns: ['*.d.ts'],
  overrides: [
    {
      files: ['src/**/*.vue'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
  ],
};
