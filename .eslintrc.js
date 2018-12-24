module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['node', 'react-hooks'],
  rules: {
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules'],
      },
    ],
    'node/no-missing-require': [
      'error',
      {
        tryExtensions: ['.js', '.jsx', '.json'],
      },
    ],
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  settings: {
    react: {
      version: '16.7.0-alpha.2',
    },
  },
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
};
