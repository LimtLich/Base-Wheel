const webpack = require('webpack')
module.exports = {
  head: {
    title: '第二届中国横琴科技创业大赛',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'renderer', content: 'webkit' },
      { name: 'author', content: 'paddy' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { hid: 'description', name: 'description', content: '第二届中国横琴科技创业大赛' },
      { hid: 'keywords', name: 'keywords', content: '第二届中国横琴科技创业大赛' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/icon.png' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_252407_52v3a0559en.css' }
    ],
    script: [
      { src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      { src: '/gt.js' }
    ]
  },
  css: [
    '~/scss/main.scss'
  ],
  loading: false,
  modules: ['@nuxtjs/axios'],
  plugins: [
    '~/plugins/filters',
    '~/plugins/axios',
    '~/plugins/vue-moment',
    '~/plugins/element-ui'
  ],
  router: {
    middleware: ['route']
  },
  build: {
    analyze: process.env._ENV === 'development' ? true : false,
    extractCSS: true,
    cssSourceMap: false,
    maxChunkSize: 100000,
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 15 // 转换基本单位
    //   })
    // ],
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash',
        'numeral': 'numeral'
      })
    ]
  },
  env: {
    _ENV: process.env._ENV
  },
  axios: {
    // credentials: true,
    // proxy:true,
    debug: process.env._ENV == 'development' ? true : false
  }
}
