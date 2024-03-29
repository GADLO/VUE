module.exports = {
    devServer: {
        proxy: {
            //*对以myApi开头的请求进行代理
            '/myApi': {
                //将请求目标指定到接口服务地址
                target: 'http://apis.juhe.cn/',
                //*设置允许跨域
                changeOrigin: true,
                //*设置非HTTPS的请求
                secure: false,
                //*重写路径，将 /myApi（即之前的内容）清除
                pathRewrite: {
                    '^/myApi': ''
                }
            }
        }
    }
}