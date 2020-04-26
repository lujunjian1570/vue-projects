const projectName = require('./project');
const path = require('path');
const CompressionWebpackPlugin = require("compression-webpack-plugin")
const productionGzipExtensions = ['js', 'css']
function resolve (dir) {
  return path.join(__dirname, dir)
}
const config = {
    projectA: {
      pages: {
        index: {
          entry: 'src/projects/projectA/main.js',
          template: 'public/index.html',
          filename: 'index.html',
        }
      },
      outputDir:'dist/projectA/',
      devServer: {
        // 设置主机地址
        host: '0.0.0.0',
        // 设置默认端口
        port: 8080,
        // 设置代理
        proxy: {
          '/api': {
            // 目标 API 地址
            target: '',
            ws: false,
            // 将主机标头的原点更改为目标URL
            changeOrigin: false,
            pathRewrite: {
              '^/api': ''
            },
            secure: false
          }
        }
      },
      chainWebpack: (config)=> {
        config.entry.app = ['babel-polyfill', '../src/projects/projectA/main.js']
        config.resolve.alias
          .set('$a', resolve('../src/projects/projectA'))
          .set('$projects', resolve('../src/common'))
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
    },
    projectB: {
      pages: {
        index: {
          entry: 'src/projects/projectB/main.js',
          template: 'public/index_s.html',
          filename: 'index.html',
        }
      },
      outputDir:'dist/projectB/',
      devServer: {
        // 设置主机地址
        host: '0.0.0.0',
        // 设置默认端口
        port: 8080,
        // 设置代理
        proxy: {
          '/api': {
            // 目标 API 地址
            target: '',
            // 如果要代理 websockets
            ws: false,
            // 将主机标头的原点更改为目标URL
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            },
            secure: false
          }
        }
      },
      chainWebpack: (config)=> {
        config.entry.app = ['babel-polyfill', '../src/projects/projectB/main.js']
        config.resolve.alias
          .set('$b', resolve('../src/projects/projectB'))
          .set('$projects', resolve('../src/common'))
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
    },
  projectC: {
    pages: {
      index: {
        entry: 'src/projects/projectC/main.js',
        template: 'public/index.html',
        filename: 'index.html',
      }
    },
    outputDir:'dist/projectC/',
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
    chainWebpack: (config)=> {
      config.entry.app = ['babel-polyfill', '../src/projects/projectC/main.js']
      config.resolve.alias
          .set('@', resolve('../src/projects/projectC'))
          .set('$projects', resolve('../src/common'))
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
