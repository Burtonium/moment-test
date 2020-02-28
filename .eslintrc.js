module.exports = {
  root: true,
  env: {
      browser: true,
      node: true
  },
  parserOptions: {
      parser: 'babel-eslint'
  },
  extends: [
      "airbnb-base",
      'plugin:vue/essential',
  ],
  // required to lint *.vue files
  plugins: [
      'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
      props: true,
      ignorePropertyModificationsFor: [
          'context',
          'state',
          'storeState',
          'acc',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'app',
      ],
      },
    ],
  },
  settings: {
    'import/core-modules': ['vue', 'vuex', 'axios'],
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': __dirname,
              '~': __dirname,
            }
          }
        }
      }
    }
  }
}