<!--
 * @Author: your name
 * @Date: 2022-01-18 15:30:36
 * @LastEditTime: 2022-01-18 17:16:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lagou-PC\src\layout\index.vue
-->
<template>
  <div class="layout">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @click="changeMenu"
    >
      <!-- v-html="menu" -->
      <a-menu-item v-for="item in routerData" :key="item.meta.key">
        <template v-if="!item.isHiddenMenu">
          <a-icon type="pie-chart" />
          <span>{{ item.meta.title }}</span>
        </template>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import routerData from "@/router/routers";
export default {
  name: "MenuLayout",
  data() {
    return {
      collapsed: false,
      routerData: routerData.children,
      // routerData,
      menu: [],
    };
  },
  created() {
    // const menu = this.getMenu(this.routerData.children);
    // this.$log(menu);
    // this.menu = menu.split("");
  },
  methods: {
    // getMenu(router) {
    //   console.log("router", router);
    //   return router.map((item) => {
    //     return `<a-menu-item :key="${
    //       item.meta.key
    //     }"><template v-if="${!item.isHiddenMenu}"><a-icon type="pie-chart" /><span>${
    //       item.meta.title
    //     }</span></template></a-menu-item>`;
    //   });
    //   // return
    // },
    // 点击菜单跳转路由
    changeMenu({ item }) {
      console.log("item", item);
      this.$router.push(item.eventKey);
    },
  },
};
</script>
<style lang="less" scoped>
.layout {
  width: 200px;
  height: 100vh;
  background: #001529;
}
</style>
