const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  head: {
    title: 'Kiwi-Board',
    link: [{ rel: "icon", type: "image/x-icon", href: "/img/icon/favicon.ico" }]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'cookie-universal-nuxt',
    'nuxt-user-agent',
    ['nuxt-mq'],
  ],
  proxy: {
    //'/login/': { target: 'https://accounts.kakao.com', pathRewrite: {'^/login/': ''}, changeOrigin: true },
    //'/authorize/': { target: 'https://kauth.kakao.com/oauth', pathRewrite: {'^/authorize/': ''}, changeOrigin: true }
  },
  'mq': {
    defaultBreakpoint: 'default',
    breakpoints: {
      mobile: 859,
      desktop: Infinity,
    }
  },
  buildModules: [
    '@nuxtjs/moment',
  ],
  moment: {
    locales: ['ko']
  },
  plugins: [
    { mode: 'client', src: '~plugins/@polyfill.client.js' },
    { mode: 'server', src: '~plugins/@polyfill.server.js' },
    { src: '~/plugins/vee-validate.js', ssr: true },
    '~plugins/vue-js-modal.js',
    { src: '~/plugins/nuxt-client-init.js', ssr: false },
    { src: '~/plugins/vue-slider-component.js', ssr: false },
    //{ src: '~/plugins/vue-slide-bar.js', ssr: false },
    { src: '~/plugins/vue-long-click.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: true },
    { src: "~/plugins/tippy.js", ssr: false }
  ],
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
      // @see https://github.com/Urthen/case-sensitive-paths-webpack-plugin
      new CaseSensitivePathsPlugin({
        debug: false
        // debug: config.get('env').NODE_ENV === 'development'
      })
    ],
    analyze: false,
    extend(config, { isClient, isServer, isDev }) {
      if (isServer && !isDev) {
        config.devtool = 'hidden-source-map';
      }
      console.log('###webpack### => ', config, isServer, isClient);
      console.log("process.env.NODE_ENV", process.env.NODE_ENV)
    },
    publicPath: '/assets/',
    extractCSS: true,
    transpile: [
      /(.+)(library-name\/src\/path\/)(.+)(\.js)$/,
    ],
      babel: {
        presets({isServer}, [preset, options]) {
          return [[
            '@nuxt/babel-preset-app',
            {
              ...options,
              targets: isServer
                  ? {node: 'current'}
                  : {browsers: ['last 2 versions', '> 0.25%, not dead'], ie: 11},
              corejs: {version: 2},
            },
          ],
          ]
        }
      }

  },
  css: [
    { src: '~/static/css/bootstrap.css', lang: 'css' },
    { src: '~/static/css/font-awesome.css', lang: 'css' },
    { src: '~/static/css/flaticon.css', lang: 'css' },
    { src: '~/static/css/slick-slider.css', lang: 'css' },
    { src: '~/static/css/color.css', lang: 'css' },
    { src: '~/static/css/responsive.css', lang: 'css' },
    { src: '~/static/css/homepage-two.css', lang: 'css' },
    { src: '~/static/css/homepage-three.css', lang: 'css' },
    { src: '~/static/css/homepage-four.css', lang: 'css' },
    { src: '~/static/css/style.css', lang: 'css' },
    { src: '~/static/css/plugin-css/fancybox.css', lang: 'css' },
    { src: '~/static/css/plugin-css/plugin.css', lang: 'css' },
],
  axios: {
    browserBaseURL: process.env.NODE_ENV === 'production' ? 'http://localhost:8080' : 'http://localhost:8080',
    baseURL: process.env.NODE_ENV === 'production' ? 'http://localhost:8080' : 'http://localhost:8080',
    https: false,
  },
  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  server: {
    port: process.env.PORT || 3000,
  },
};
