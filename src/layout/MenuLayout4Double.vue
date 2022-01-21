<!--
 * @Author: your name
 * @Date: 2022-01-18 15:30:36
 * @LastEditTime: 2022-01-21 09:50:08
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \lagou-PC\src\layout\index.vue
-->

<!-- 该文件的配置只适用于单层菜单和双层菜单两种情况，不适用于多层菜单 -->
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
      <template v-for="item in routerData">
        <!-- 如果是双层菜单 -->
        <a-sub-menu
          v-if="item.children && item.children.length > 0"
          :key="item.path"
        >
          <span slot="title"
            ><a-icon type="mail" /><span>{{ item.meta.title }}</span></span
          >
          <a-menu-item v-for="menuItem in item.children" :key="menuItem.path">
            <a-icon type="pie-chart" />
            <span>{{ menuItem.meta.title }}</span>
          </a-menu-item>
        </a-sub-menu>
        <!-- 如果是单层菜单 -->
        <a-menu-item v-else :key="item.path">
          <a-icon type="pie-chart" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
      </template>
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
      routerData: [],
    };
  },
  created() {
    this.initRouter();
  },
  methods: {
    // 初始化路由
    initRouter() {
      // 处理第一层的隐藏菜单
      let firstRouterData = routerData.children.filter((item) => {
        return !item.isHiddenMenu;
      });
      // 处理第二层的隐藏菜单
      let secondRouterData = firstRouterData.map((item) => {
        return item.children
          ? {
              ...item,
              children: item.children.filter((itemSec) => {
                return !itemSec.isHiddenMenu;
              }),
            }
          : item;
      });
      console.log("secondRouterData", secondRouterData);
      this.routerData = secondRouterData;
    },
    // 点击菜单跳转路由
    changeMenu({ item }) {
      console.log("item", item);
      this.$router.replace(item.eventKey);
    },
  },
};
</script>
<style lang="less" scoped>
.layout {
  width: 200px;
  height: 100vh;
  background: #001529;
  padding-top: 10px;
}
::v-deep .ant-menu-item,
.ant-menu-submenu {
  text-align: left;
}
</style>
