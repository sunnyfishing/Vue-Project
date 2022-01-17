<!--
 * @Author: your name
 * @Date: 2021-04-09 14:51:23
 * @LastEditTime: 2022-01-17 17:49:58
 * @LastEditors: Please set LastEditors
 * @Description: 根实例
 * @FilePath: \hello-world\src\App.vue
-->
<template>
  <div id="app">
    <h1>Hello App!</h1>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
