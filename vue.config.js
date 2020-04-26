const path = require('path');
const conf = require('./config/projectConfig');
module.exports = {
  pages: conf.pages,
  publicPath: './',
  outputDir: conf.outputDir,
  assetsDir: 'static',
  //取消eslint检查
  lintOnSave: false,
  devServer: conf.devServer,
  productionSourceMap: false,
  chainWebpack: conf.chainWebpack,
  configureWebpack: conf.configureWebpack,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // prependData: `@import "@/assets/scss/base.scss";`
      }
    }
  }
};
