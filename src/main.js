/*
 * @Author: your name
 * @Date: 2021-04-09 14:51:23
 * @LastEditTime: 2021-04-28 15:35:34
 * @LastEditors: Please set LastEditors
 * @Description: 挂载根实例及其他实例上需要用到的工具
 * @FilePath: \hello-world\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

// 引入路由实例
import router from './router'

// 将路由绑定在vue上
import VueRouter from 'vue-router'
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  router, // 将路由实例挂载在vue根实例上
  render: h => h(App),
}).$mount('#app')
