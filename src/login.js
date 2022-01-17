/*
 * @Author: your name
 * @Date: 2022-01-17 16:27:29
 * @LastEditTime: 2022-01-17 17:49:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lagou-PC\src\login.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/views/login/index.vue";

Vue.config.productionTip = false;

console.log("login");

Vue.use(VueRouter);

new Vue({
  render: (h) => h(Login),
}).$mount("#login");
