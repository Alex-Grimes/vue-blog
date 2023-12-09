const { computed } = require("vue");

module.exports = {
    root: true,
    env: {
      node: true,
      es2022: true,
    },
    'extends': [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      'prettier',
    ],
    parserOptions: {
      parser: '',
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }
