/*
 * @Author: your name
 * @Date: 2022-01-18 15:44:57
 * @LastEditTime: 2022-01-18 16:59:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lagou-PC\src\routers.js
 */
module.exports = {
  path: "/",
  redirect: "/home",
  component: () => import("@/layout/EmptyLayout"), // 有子路由时，指向空布局
  children: [
    // {
    //   path: "/home",
    //   name: "home",
    //   isHiddenMenu: true, // 从菜单中隐藏
    //   component: () => import("@/views/home/index"),
    //   meta: {
    //     title: "欢迎页",
    //     key: "home",
    //   },
    // },
    // {
    //   path: "/organization",
    //   name: "organization",
    //   meta: {
    //     title: "组织管理",
    //   },
    //   redirect: "/organization/department",
    //   component: () => import("@/layout/EmptyLayout"),
    //   children: [
    //     {
    //       path: "/organization/department",
    //       name: "organization-department",
    //       component: () => import("@/views/organization/department/index"),
    //       meta: {
    //         title: "组织机构",
    //         key: "platform",
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: "/approval",
    //   name: "approval",
    //   meta: {
    //     title: "审批管理",
    //   },
    //   component: () => import("@/views/approval/index"),
    // },

    {
      path: "/platform",
      component: () => import("@/views/platform/index"),
      meta: {
        title: "组织管理",
        key: "platform",
      },
    },
    {
      path: "/platform1",
      component: () => import("@/views/platform/index copy"),
      meta: {
        title: "组织管理1",
        key: "platform1",
      },
    },
    {
      path: "/platform2",
      component: () => import("@/views/platform/index copy 2"),
      meta: {
        title: "组织管理2",
        key: "platform2",
      },
    },
    {
      path: "/platform3",
      component: () => import("@/views/platform/index copy 3"),
      meta: {
        title: "组织管理3",
        key: "platform3",
      },
    },
  ],
};
// module.exports = [
//   {
//     path: "/platform",
//     component: () => import("@/views/platform/index"),
//     meta: {
//       title: "组织管理",
//       key: "/platform",
//     },
//   },
//   {
//     path: "/platform1",
//     component: () => import("@/views/platform/index1"),
//     meta: {
//       title: "组织管理1",
//       key: "/platform1",
//     },
//   },
//   {
//     path: "/platform2",
//     component: () => import("@/views/platform/index2"),
//     meta: {
//       title: "组织管理2",
//       key: "/platform2",
//     },
//   },
//   {
//     path: "/platform3",
//     component: () => import("@/views/platform/index3"),
//     meta: {
//       title: "组织管理3",
//       key: "/platform3",
//     },
//   },
// ];
