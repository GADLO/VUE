const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    overlay: {
      wanrnings: false,
      errors: false
    },
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/",  //目标地址
        changeOrigin: true,          //是否跨域，跨域改变源为true
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    lintOnSave: false
  },
})
