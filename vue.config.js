/*
 * @Author: your name
 * @Date: 2021-04-28 15:15:14
 * @LastEditTime: 2022-01-26 14:12:22
 * @LastEditors: Please set LastEditors
 * @Description: vue配置文件，自己建的
 * @FilePath: \hello-world\vuer.config.js
 */
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  runtimeCompiler: true,
  // publicPath: "/vue-project", // 服务前缀
  pages: {
    login: {
      entry: "src/login.js",
      template: "public/login.html",
      title: "登录 - 拉钩",
    },
    index: {
      // page 的入口
      entry: "src/main.js",
      template: "public/index.html",
      title: "拉钩",
    },
  },
  devServer: {
    port: 8000,
    proxy: {
      "/proxy": {
        target: "http://localhost:3000",
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/proxy": "",
        },
      },
    },
  },
  // configureWebpack:{
  //   plugins:[
  //     new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  //     new UglifyJsPlugin({
  //       uglifyOptions: {
  //         compress: {
  //           drop_debugger: true,
  //           drop_console: true
  //         }
  //       },
  //       sourceMap: false,
  //       parallel: true
  //     }),
  //     // 配置compression-webpack-plugin压缩
  //     new CompressionWebpackPlugin({
  //       algorithm: 'gzip',
  //       test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  //       threshold: 10240,
  //       minRatio: 0.8
  //     })
  //   ]
  // }
  chainWebpack: (config) => {
    // 生产环境，开启js\css压缩
    if (process.env.NODE_ENV === "production") {
      config.plugin("compressionPlugin").use(
        new CompressionPlugin({
          test: /\.(js|css|less)$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          minRatio: 0.8,
          deleteOriginalAssets: true, // 删除源文件
        })
      );
    }
  },
};
