/*
 * @Author: your name
 * @Date: 2021-04-28 15:05:22
 * @LastEditTime: 2022-01-17 17:48:58
 * @LastEditors: Please set LastEditors
 * @Description: 创建router实例
 * @FilePath:
 */

import VueRouter from "vue-router";

// import index from "@/views/index.vue";

const routes = [
  // 嵌套路由
  // {
  //   path: "/index",
  //   component: index,
  // },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
