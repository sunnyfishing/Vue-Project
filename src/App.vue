<!--
 * @Author: your name
 * @Date: 2021-04-09 14:51:23
 * @LastEditTime: 2022-01-18 15:41:17
 * @LastEditors: Please set LastEditors
 * @Description: 根实例
 * @FilePath: \hello-world\src\App.vue
-->
<template>
  <div id="app">
    <MenuLayout />
    <!-- 路由匹配到的组件将渲染在这里 -->
    <ContainerLayout />
  </div>
</template>

<script>
import MenuLayout from "@/layout/MenuLayout";
import ContainerLayout from "@/layout/ContainerLayout";
export default {
  name: "App",
  components: { MenuLayout, ContainerLayout },
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
