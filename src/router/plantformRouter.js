// 平台管理路由
module.exports = [
  {
    path: "/platform",
    name: "platform",
    component: () => import("@/layout/EmptyLayout"),
    meta: {
      title: "平台管理",
    },
    children: [
      {
        path: "/platform/department",
        name: "platform-department",
        component: () => import("@/views/organization/department/index"),
        meta: {
          title: "组织管理",
        },
      },
      {
        path: "/platform/role",
        name: "platform-role",
        component: () => import("@/views/organization/role/index"),
        meta: {
          title: "角色管理",
        },
      },
      {
        path: "/platform/user",
        name: "platform-user",
        component: () => import("@/views/organization/user/index"),
        meta: {
          title: "员工管理",
        },
      },
    ],
  },
];
