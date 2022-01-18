/*
 * @Author: your name
 * @Date: 2022-01-17 16:27:29
 * @LastEditTime: 2022-01-18 14:18:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lagou-PC\src\login.js
 */
import Vue from "vue";
import AndDesignVue from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "@/styles/common.less";
// import VueRouter from "vue-router";

import Login from "@/views/login/index.vue";

Vue.config.productionTip = false;

console.log("login");
Vue.prototype.$log = console.log;

Vue.use(AndDesignVue);

new Vue({
  render: (h) => h(Login),
}).$mount("#login");
