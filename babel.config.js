module.exports = {
  //presets字段设定转码规则。
  presets: [
    '@vue/app',
    // 在babel.config.js文件中引用程序包babel-preset-env时，需要引用'@babel/preset-env'，而不是'env'。
    // 借助插件babel-preset-env,下面这个配置说的是babel对es6,es7,es8进行转码。
    // 最新转码规则 npm install --save-dev @babel/preset-env
    [ '@babel/preset-env',
      {
        'modules': false
      }
    ]
  ],
  plugins: [
    //需要npm install babel-plugin-component -D
    [
      'component',
      {
        'libraryName': 'element-ui', // 按需引用element-ui插件
        'styleLibraryName': 'theme-chalk' // 按需引用element-ui主题
      },
    ]
  ],
  // npm install babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props babel-preset-env --save-dev
};
