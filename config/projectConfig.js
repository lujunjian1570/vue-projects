/**
 * Created by LuJunJian on 2020/4/28
 * 项目配置文件
 */
const projectName = require('./project')
const path = require('path')
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

//判断非开发环境
const isProduction = process.env.NODE_ENV === 'production'

const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios',
  'element-ui': 'ELEMENT'
}
// cdn
const cdn = {
  // 开发环境
  dev: {
    css: ['https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css'],
    js: ['https://cdn.bootcss.com/babel-polyfill/7.8.3/polyfill.min.js']
  },
  // 生产环境
  build: {
    css: ['https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css'],
    js: [
      'https://cdn.bootcss.com/babel-polyfill/7.8.3/polyfill.min.js',
      'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
      'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
      'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
      'https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js',
      'https://cdn.bootcss.com/crypto-js/4.0.0/crypto-js.min.js',
      'https://cdn.bootcss.com/element-ui/2.13.0/index.js'
    ]
  }
}

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
        title: 'cms',
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
      // 移除 prefetch 插件
      config.plugins.delete('preload');
      config.plugins.delete('prefetch');
      // config.entry.app = ['babel-polyfill', '../src/projects/cms/main.js']
      config.resolve.alias
        .set('$cms', resolve('../src/projects/cms'))
        .set('$common', resolve('../src/common'))

      // 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html
      /*if (isProduction) {
        config.plugin('html').tap(args => {
            args[0].cdn = cdn.build;
            return args;
          })
      }*/

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
      // set preserveWhitespace
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.compilerOptions.preserveWhitespace = true
          return options
        })
        .end()
      config
        // https://webpack.js.org/configuration/devtool/#development
        .when(!isProduction,
          config => config.devtool('cheap-source-map')
        )
      config
        .when(isProduction,
          config => {
            config
              .plugin('ScriptExtHtmlWebpackPlugin')
              .after('html')
              .use('script-ext-html-webpack-plugin', [{
                // `runtime` must same as runtimeChunk name. default is `runtime`
                inline: /runtime\..*\.js$/
              }])
              .end()
            config
              .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                 elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('../src/projects/cms/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
            config.optimization.runtimeChunk('single')
          }
        )
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
      /*if (isProduction) {
        config.externals = externals
      }*/
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
