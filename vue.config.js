/*
 * @Author: your name
 * @Date: 2021-04-28 15:15:14
 * @LastEditTime: 2022-01-17 17:22:57
 * @LastEditors: Please set LastEditors
 * @Description: vue配置文件，自己建的
 * @FilePath: \hello-world\vuer.config.js
 */
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
};
