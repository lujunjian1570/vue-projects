/**
 * Created by LuJunJian on 2020/6/10
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
        template: 'public/index_webpack.html',
        filename: 'index.html',
        title: '运营管理系统',
        cdn: isProduction ? cdn.build : cdn.dev
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
      config.plugins.delete('prefetch-index')
      // 移除 preload 插件
      config.plugins.delete('preload-index');
      // config.entry.app = ['babel-polyfill', '../src/projects/cms/main.js']
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
          config => config.devtool('source-map')
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
      if (isProduction) {
        config.externals = externals
      }
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
  test: {
    pages: {
      index: {
        entry: 'src/projects/test/main.js',
        template: 'public/index_webpack.html',
        filename: 'index.html',
        title: '运营管理系统',
        cdn: isProduction ? cdn.build : cdn.dev
      }
    },
    outputDir: 'dist/test/',
    devServer: {
      // 设置主机地址
      host: '0.0.0.0',
      // 设置默认端口
      port: 8080,
      before: require('../src/projects/test/mock/mock-server.js'),
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
      config.plugins.delete('prefetch-index')
      // 移除 preload 插件
      config.plugins.delete('preload-index');
      config.resolve.alias
        .set('@', resolve('../src/projects/test'))
        .set('$common', resolve('../src/common'))
      config.module
        .rule('svg')
        .exclude.add(resolve('../src/common/icons')).add(resolve('../src/projects/test/icons'))
        .end()
      config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('../src/common/icons')).add(resolve('../src/projects/test/icons'))
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
          config => config.devtool('source-map')
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
      if (isProduction) {
        config.externals = externals
      }
    },
    css: {
      loaderOptions: {
        // 给 sass-loader 传递选项
        sass: {
          prependData: `@import "@/styles/var.scss";`
        }
      }
    }
  }
}

const configObj = config[projectName.name]
module.exports = configObj
