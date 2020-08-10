module.exports = {
  publicPath: '/', // 部署应用包时-基本URL
  outputDir: 'dist', // 生产环境构建文件的目录
  lintOnSave: process.env.NODE_ENV !== 'production', // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '智慧园区数据看板'
        return args
      })
  },
  css: {
    loaderOptions: {
      // https://cli.vuejs.org/zh/config/#css-loaderoptions
      scss: {
        additionalData: '@import "~@/assets/styles/variable.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      // localhost:8080/api  /user/public/login
      // http://10.138.130.1:35359/user-auth-api  /user/public/login
      '/api': {
        target: 'http://10.138.130.1:35359',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/user-auth-api'
        }
      },
      // 综合态势
      '/camp-kanban-api': {
        target: 'http://10.138.130.1:32894',
        changeOrigin: true,
        pathRewrite: {
          '^/camp-kanban-api': '/camp-kanban-api'
        }
      }
    }
  }
}
