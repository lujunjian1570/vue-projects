/**
 * Created by LuJunJian on 2020/4/28
 * 项目配置文件
 */
const projectName = require('./project');
const path = require('path');
const CompressionWebpackPlugin = require("compression-webpack-plugin")
const productionGzipExtensions = ['js', 'css']

function resolve(dir) {
  return path.join(__dirname, dir)
}

const config = {
  cms: {
    pages: {
      index: {
        entry: 'src/projects/cms/main.js',
        template: 'public/index.html',
        filename: 'index.html',
        title: 'cms'
      }
    },
    outputDir: 'dist/cms/',
    devServer: {
      // 设置主机地址
      host: '0.0.0.0',
      // 设置默认端口
      port: 8080,
      // 设置代理
      proxy: {
        '/sunsoft-cms': {
          // 目标 API 地址
          target: 'https://test.ygzykj.com:1906/sunsoft-cms',
          ws: false,
          // 将主机标头的原点更改为目标URL
          changeOrigin: false,
          pathRewrite: {
            '^/sunsoft-cms': ''
          },
          secure: false
        }
      }
    },
    chainWebpack: (config) => {
      config.entry.app = ['babel-polyfill', '../src/projects/cms/main.js']
      config.resolve.alias
        .set('$cms', resolve('../src/projects/cms'))
        .set('$common', resolve('../src/common'))
      config.module
        .rule('svg')
        .exclude.add(resolve('../src/common/icons')).add(resolve('../src/projects/cms/icons'))
        .end()
      config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('../src/common/icons')).add(resolve('../src/projects/cms/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
    },
    configureWebpack: (config) => {
      //开启gzip压缩,需要配置Nginx服务器gzip选项开启
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      );
    },
    css: {
      loaderOptions: {
        // 给 sass-loader 传递选项
        sass: {
          prependData: `@import "$cms/styles/variables.scss";`
        }
      }
    }
  },
  projectC: {
    pages: {
      index: {
        entry: 'src/projects/projectC/main.js',
        template: 'public/index.html',
        filename: 'index.html',
      }
    },
    outputDir: 'dist/projectC/',
    devServer: {
      // 设置主机地址
      host: '0.0.0.0',
      // 设置默认端口
      port: 8080,
      // 设置代理
      proxy: {
        '/sunsoft-cms': {
          // 目标 API 地址
          target: 'https://test.ygzykj.com:1906/sunsoft-cms',
          ws: false,
          // 将主机标头的原点更改为目标URL
          changeOrigin: false,
          pathRewrite: {
            '^/sunsoft-cms': ''
          },
          secure: false
        }
      }
    },
    chainWebpack: (config) => {
      config.entry.app = ['babel-polyfill', '../src/projects/projectC/main.js']
      config.resolve.alias
        .set('@', resolve('../src/projects/projectC'))
        .set('$common', resolve('../src/common'))
      config.module
        .rule('svg')
        .exclude.add(resolve('../src/projects/projectC/icons'))
        .end()
      config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('../src/projects/projectC/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
    },
    configureWebpack: (config) => {
      //开启gzip压缩,需要配置Nginx服务器gzip选项开启
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      );
    },
  }
}

const configObj = config[projectName.name]
module.exports = configObj
