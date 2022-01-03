/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2022-01-03 10:54:29
 * @LastEditors: 杨自强
 * @LastEditTime: 2022-01-03 14:00:51
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [ 'eslint:recommended', 'plugin:vue/vue3-recommended','prettier'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'vue-scoped-css/no-unused-selector': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1, maxEOF: 1 }],
    // '@typescript-eslint/no-namespace': 'off',
    // '@typescript-eslint/ban-types': 'off',
    // 'space-before-function-paren': 'off',
    // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // '@typescript-eslint/no-this-alias': [
    //   'error',
    //   {
    //     // Allow `const { props, state } = this`; false by default
    //     allowDestructuring: true,
    //     // Allow `const self = this`; `[]` by default
    //     allowedNames: ['self'],
    //   },
    // ],
  },
};
