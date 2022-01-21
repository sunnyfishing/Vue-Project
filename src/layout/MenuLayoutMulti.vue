<!--
 * @Author: your name
 * @Date: 2022-01-18 15:30:36
 * @LastEditTime: 2022-01-21 10:05:09
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \lagou-PC\src\layout\index.vue
-->

<!-- 该文件的配置适用于多层菜单和单层菜单的配置 -->
<template>
  <div class="layout">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @click="changeMenu"
    >
      <template v-for="item in list">
        <template v-if="item.isHiddenMenu"></template>
        <a-menu-item v-else-if="!item.children" :key="item.path">
          <a-icon type="pie-chart" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>
<script>
import routerData from "@/router/routers";
import { Menu } from "ant-design-vue";

const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.meta.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
        <template v-if="item.isHiddenMenu"></template>
          <a-menu-item v-else-if="!item.children" :key="item.path">
            <a-icon type="pie-chart" />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: "SubMenu",
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};

export default {
  name: "MenuLayout",
  components: {
    "sub-menu": SubMenu,
  },
  data() {
    return {
      collapsed: false,
      list: [],
    };
  },
  created() {
    this.list = routerData.children;
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
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
