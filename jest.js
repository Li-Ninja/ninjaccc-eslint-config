/** @type { import('eslint').Linter.Config } */
module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: [
    'plugin:jest/recommended',
  ],

  plugins: [
    'jest',
  ],
}