/*
 * @Author: your name
 * @Date: 2022-01-18 15:44:57
 * @LastEditTime: 2022-01-21 10:01:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lagou-PC\src\routers.js
 */
import platformRouter from "./plantformRouter";
export default {
  path: "/",
  redirect: "/home",
  component: () => import("@/layout/EmptyLayout"), // 有子路由时，指向空布局
  children: [
    {
      path: "/home",
      name: "home",
      isHiddenMenu: true, // 从菜单中隐藏
      component: () => import("@/views/home/index"),
      meta: {
        title: "欢迎页",
      },
    },
    ...platformRouter,
  ],
};
