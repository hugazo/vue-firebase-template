module.exports = {
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: [
      './tsconfig.json',
      './functions/tsconfig.json',
    ],
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'airbnb-typescript/base',
    './.eslintrc-auto-import.json',
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
    // Disable Single Naming For Components
    'vue/multi-word-component-names': 0,
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
