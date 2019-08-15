/**
 * @2019-05-07
 * @author likunru
 * @description vue-cli 3.x配置文件
 */
const path = require('path');
const baseUrl = process.env.NODE_ENV === "production" ? "/static" : "/"; // font css资源路径

module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查(默认true)
    lintOnSave: process.env.NODE_ENV !== 'production',
    // 放置静态资源的目录
    assetsDir: 'assets',
    // 默认情况下，生成静态资源在它们的文件名中包含了hash以便更好的控制缓存。
    filenameHashing: true,
    configureWebpack: {
      plugins: [

      ]
    },
    chainWebpack: config => {

    },
    css: {
        // 启用css modules
        modules: false,
        // 开启css source maps
        sourceMap: false,
        // css 预设器配置项
        loaderOptions: {}
    },
    // 请求代理
    devServer: {
        host: 'localhost',
        port: '8088', // 端口号
        https: false,
        open: false, // 配置自动启动浏览器
        hotOnly: true, // 热更新
        // proxy: { // 反向代理
        // }
    }
}
