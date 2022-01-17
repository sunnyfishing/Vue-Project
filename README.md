<!--
 * @Author: your name
 * @Date: 2022-01-17 14:09:51
 * @LastEditTime: 2022-01-17 17:02:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-Project\README.md
-->

# Vue-Project

### 前端

- 前端工程化环境（webpack）
- CSS 预处理工具（less）
- JS 库（Vue）
- 路由（vue-router）
- UI 组件库（Ant Design Vue）

### 遇到的问题

- vue 配置多页面应用
  思路：多页面应用需要创建多个 Vue 实例，每个实例需要绑定一个 id，因此在 public 中创建多个 html 文件。在 vue.config.js 文件中配置 pages 选项，设置每个页面的入口文件及模板。
