<!--
 * @Author: your name
 * @Date: 2022-01-17 14:09:51
 * @LastEditTime: 2022-01-18 17:07:43
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

#### vue 配置多页面应用

场景：登陆页和主页分为两个入口
思路：多页面应用需要创建多个 Vue 实例，每个实例需要绑定一个 id，因此在 public 中创建多个 html 文件。在 vue.config.js 文件中配置 pages 选项，设置每个页面的入口文件及模板。
问题：配置不生效
原因：login 页面的路由模式和 index 页面的路由模式不同，导致 url 解析出错
解决：将两个入口的路由模式修改一致
PS：如果路由模式为 hash 则登陆页的 uri 是 /login.html#/ 而 主页的 uri 是 /index.html/#

#### 遇到的报错

- corejs 报错

* core-js/modules/es.array.filter.js in ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js core-js/modules/es.object.get-own-property-descriptor.js in ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js core-js/modules/es.object.get-own-property-descriptors.js in ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js core-js/modules/es.object.keys.js in ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js core-js/modules/es.object.to-string.js in ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js core-js/modules/es.symbol.js in ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js core-js/modules/web.dom-collections.for-each.js in ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

* 应该是安装过程中拉的包不完整导致的，删除 node_modules 里面相关的包，在重新安装

- 使用 less 时报错：this.getOptions is not a function

* less 版本太高了，使用版本 "less": "^3.0.4", "less-loader": "^5.0.0",

#### 路由菜单

- 路由文件

* router/index.js 是用来创建 router 的，并把 router 暴露给 APP.vue 的 Vue 实例
* router/routers.js 是用来配置路由的，这部分内容一方面会被引入到 router/index.js 来创建路由，另一方面，会被引入到菜单中用来配置菜单。各个模块的路由会被引入到这里来统一处理。
* router/router-xxx.js 是每个大模块对应的路由文件，里面是该大模块下的路由与菜单。然后暴露给 router/routers.js

- 路由配置偏好
  path 用来放页面对应的 uri，
  name 用来放页面对应的 key，一般是 path 的变形
  component 采用懒加载的形式。如果无对应页面，则使用 layout/EmptyLayout.vue 来加载 <router-view>
  isHiddenMenu true: 在菜单中隐藏。
  meta.title 页面名称对应于菜单名称

- 菜单配置
