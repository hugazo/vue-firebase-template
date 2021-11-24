module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: [
      './tsconfig.eslint.json',
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
  },
  overrides: [
    {
      files: ['src/**/*.vue'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
  ],
};
