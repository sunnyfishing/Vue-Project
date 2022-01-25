/*
 * @Author: your name
 * @Date: 2021-04-09 14:51:23
 * @LastEditTime: 2022-01-24 17:04:57
 * @LastEditors: Please set LastEditors
 * @Description: 挂载根实例及其他实例上需要用到的工具
 * @FilePath: \hello-world\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";

// 引入axios
import { axios_get, axios_post } from "@/utils/axios";
Vue.prototype.$axiosGet = axios_get;
Vue.prototype.$axiosPost = axios_post;

// 引入UI库
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

// 引入路由实例
// 将路由绑定在vue上
import router from "./router";
import VueRouter from "vue-router";
Vue.use(VueRouter);

Vue.prototype.$log = console.log;
Vue.config.productionTip = false;

new Vue({
  router, // 将路由实例挂载在vue根实例上
  render: (h) => h(App),
}).$mount("#app");
