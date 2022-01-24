<!--
 * @Author: your name
 * @Date: 2021-04-09 14:51:23
 * @LastEditTime: 2022-01-24 14:03:59
 * @LastEditors: Please set LastEditors
 * @Description: 根实例
 * @FilePath: \hello-world\src\App.vue
-->
<template>
  <div id="app">
    <MenuLayoutMulti />
    <!-- <MenuLayout4Double /> -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <ContainerLayout />
  </div>
</template>

<script>
import MenuLayoutMulti from "@/layout/MenuLayoutMulti";
// import MenuLayout4Double from "@/layout/MenuLayout4Double"; // 测试单层菜单和双层菜单
import ContainerLayout from "@/layout/ContainerLayout";
export default {
  name: "App",
  components: {
    MenuLayoutMulti,
    ContainerLayout,
    // MenuLayout4Double,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
</style>
<style lang="less">
@import url("./styles/common.less");
</style>
