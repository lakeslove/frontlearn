// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  // lintOnSave: process.env.NODE_ENV !== 'production',
  lintOnSave: false,
  productionSourceMap: false,
  // filenameHashing: false,
  /* devServer: {
    proxy: "http://XXX.XXX.XXX.XXX:YYYYY"
  } */
  publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '/service': {
        target: 'http://192.168.202.10:20000',
        // target: 'http://192.168.205.161:20000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/service': '' // rewrite path
        }
      },
        '/themeGet': {//themeGet/configCenter/themeConfig/get
            target: 'http://192.168.202.10:30080',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/themeGet': ''
            }
        },
      '/crawler': {
        target: 'http://58.48.57.98:58090',
        changeOrigin: true,
        pathRewrite: {
          '^/crawler': '',
        },
      },
    },
  },
  configureWebpack: config => {
    config.entry = {
      index: './src/main.js',
      dash: './src/dash/dash.js'
    }
    config.externals = {
      jquery: '$',
    }
  },
  pages: {
    dash: {
      // entry for the page
      entry: './src/dash/dash.js',
      // the source template
      template: './public/dash.html',
      // output as dist/index.html
      filename: 'dash.html'
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      // title: "Index Page",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      // chunks: ["dash-vendors", "dash-common", "dash"]
    },
    index: {
      // entry for the page
      entry: './src/main.js',
      // the source template
      template: './public/index.html',
      // output as dist/index.html
      filename: 'index.html'
      // chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  chainWebpack: config => {

    config.plugin('copy').tap(([options]) => {
      options[0].ignore.push('.svn/**/*')
      options[0].ignore.push('**/.svn/**/*')
      options[0].ignore.push('**/.svn/**/*')
      return [options]
    })
    config.plugins.delete("prefetch")
    config.plugins.delete('preload-index');
    config.plugins.delete('prefetch-index');
  },
}
