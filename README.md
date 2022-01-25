<!--
 * @Author: your name
 * @Date: 2022-01-17 14:09:51
 * @LastEditTime: 2022-01-25 11:45:55
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
* router/routers.js 汇总各个模块的路由信息。这部分内容一方面会被引入到 router/index.js 来创建路由，另一方面，会被引入到菜单中用来配置菜单。
* router/router-xxx.js 是每个大模块的菜单对应的路由文件，里面是该大模块下的路由与菜单。然后暴露给 router/routers.js

- 路由配置偏好
  path 用来放页面对应的 uri，默认是菜单配置中的 key
  component 采用懒加载的形式。如果无对应页面，则使用 layout/EmptyLayout.vue 来加载 <router-view>
  isHiddenMenu true: 在菜单中隐藏。
  meta.title 页面名称对应于菜单名称

- 菜单配置

* 方式 1
  只设置两层菜单嵌套，一层为分组，不对应页面，一层为子菜单，会有对应页面。
  在 MenuLayout.vue 文件中只需要循环一层配置信息，避免了使用递归。
  通过使用 path 作为 key 来区分路由。
  对于要隐藏的路由，使用过滤掉隐藏路由之后的数据。
* 方式 2
  支持多层嵌套
  使用 Ant Design Vue 提供的【单文件递归菜单】进行构建。https://www.antdv.com/components/menu-cn/#components-menu-demo-single-file-recursive-menu
  隐藏项的配置：遍历中使用 <template v-if="item.isHiddenMenu"></template> 来代替隐藏的菜单

- 封装请求

* utils-axios.js 文件
  对 req 和 res 进行拦截并配置基本请求状态判断
* 接口直接返回的内容如下，避免后续多层取值，在拦截器处将 result.data 作为请求结果返回
  result:{
  config:{}, // 配置
  data:{}, // 要返回的内容
  headers:{} // 响应头
  request:{}, // 请求体
  status:200, // 网络状态码
  }

- 配置代理

* 在 vue.config.js 文件中加上 devServer-proxy-target 进行代理
  报错：尝试重启服务
