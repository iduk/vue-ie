const { defineConfig } = require('@vue/cli-service')
const postcss = require('postcss')

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
}

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: {
      // mini-css-extract-plugin
      ignoreOrder: true,
    },
    loaderOptions: {
      css: {
        modules: {
          auto: true,
          localIdentName: '[local]-[hash:base64:5]',
        },
      },
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
                grid: 'autoplace',
              },
            }),
            require('postcss-import'),
            require('postcss-flexbugs-fixes'),
            require('postcss-gap-properties'),
            require('postcss-css-variables'),
            require('postcss-nested'),
          ],
        },
      },
      scss: {
        additionalData: `@import "@/assets/_variables.scss";`,
      },
    },
  },
})
