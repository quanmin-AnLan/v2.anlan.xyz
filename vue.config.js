require('events').EventEmitter.defaultMaxListeners = 0
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false,

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '安澜网'
      return args
    })
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      const plugins = []
      plugins.push(
        new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.(html|js|json|ttf|css|jpeg|jpg|png)$/,
          threshold: 0,
          minRatio: 1,
          deleteOriginalAssets: false
        })
      )
      config.plugins = [
        ...config.plugins,
        ...plugins
      ]
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/less/main.less')
      ]
    }
  }
}
