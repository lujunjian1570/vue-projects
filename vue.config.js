const path = require('path');
const conf = require('./config/projectConfig');
module.exports = {
  pages: conf.pages,
  publicPath: '/',
  outputDir: conf.outputDir,
  assetsDir: 'static',
  //取消eslint检查
  lintOnSave: false,
  devServer: conf.devServer,
  productionSourceMap: false,
  chainWebpack: conf.chainWebpack,
  configureWebpack: conf.configureWebpack,
  css: conf.css
};
