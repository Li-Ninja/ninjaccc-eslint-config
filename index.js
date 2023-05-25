module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  root: true,

  parserOptions: {
    sourceType: 'module',
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
    jest: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb-base',
  ],

  plugins: [
    'import',
    'jest',
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      env: {
        browser: true,
        node: true,
      },
      plugins: [
        // required to apply rules which need type information
        '@typescript-eslint',
      ],
      extends: [
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
        // ESLint typescript rules
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-shadow': 'error',
        // this rule, if on, would require explicit return type on the `render` function
        '@typescript-eslint/explicit-function-return-type': 'off',
        /**
         * in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule,
         * so it has to be disabled
         */
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['*.vue'],
      env: {
        browser: true,
        node: true,
      },
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
      },
      plugins: [
        'vue',
      ],
      extends: [
        'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
      ],
      rules: {
        'vue/space-infix-ops': 'error',
        'vue/multi-word-component-names': 'off',
      },
    },
    {
      files: ['**/*.test.js', '**/*.spec.js', '**/*.test.ts', '**/*.spec.ts'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/no-jest-import': 'off',
      },
    },
  ],

  // add your custom rules here
  rules: {

    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',

    'no-shadow': 'off',

    // import
    'import/first': 'off',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/first': 'error',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': ['error', {
      'newlines-between': 'always',
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': false
      },
    }],
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'sort-imports': ['error', {
      'ignoreDeclarationSort': true
    }],
    'object-curly-newline': ['error', {
      'ImportDeclaration': { 'multiline': true, 'minProperties': 2 }
    }],

    'prefer-promise-reject-errors': 'off',

    quotes: ['warn', 'single', { avoidEscape: true }],

    // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
    // does not work with type definitions
    'no-unused-vars': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'arrow-parens': ['error', 'as-needed'],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['if', 'switch', 'do', 'while', 'for', 'debugger', 'function'] },
      { blankLine: 'always', prev: ['if', 'switch', 'do', 'while', 'for', 'debugger', 'function'], next: '*' },
      { blankLine: 'always', prev: ['import'], next: '*' },
      { blankLine: 'any', prev: ['import'], next: ['import'] },
    ],

    'no-useless-return': 'off',

    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],

    'newline-after-var': 'error',

    // brace-style and curly is control if, need brace and need change line
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    curly: ['error', 'all'],

    'dot-notation': ['error', { allowPattern: '^_[a-z, 0-9]+$' }],

    // jest
    'jest/no-jest-import': 'error',
    },
  };
