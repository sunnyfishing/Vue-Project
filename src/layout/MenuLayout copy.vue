<!--
 * @Author: your name
 * @Date: 2022-01-18 15:30:36
 * @LastEditTime: 2022-01-18 16:59:20
 * @LastEditors: Please set LastEditors
 * @Description: 单层路由
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
      // menu:[]
    };
  },
  created() {
    // this.getMenu(this.routerData)
  },
  methods: {
    // getMenu(router) {
    //   router.map(item =>{
    //     if(item.children&&item.children.length>0){
    //       this.getMenu(item.children)
    //     }else{
    //       menu
    //     }
    //   })
    //   return
    // }
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
