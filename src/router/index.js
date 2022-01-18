/*
 * @Author: your name
 * @Date: 2021-04-28 15:05:22
 * @LastEditTime: 2022-01-18 16:59:38
 * @LastEditors: Please set LastEditors
 * @Description: 创建router实例
 * @FilePath:
 */

import VueRouter from "vue-router";
import Routers from "./routers";

// import index from "@/views/home/index.vue";

const routes = [
  // 嵌套路由
  Routers,
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
