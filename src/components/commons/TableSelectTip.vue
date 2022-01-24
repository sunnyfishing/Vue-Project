<!--
 * @Author: your name
 * @Date: 2021-12-30 14:11:31
 * @LastEditTime: 2022-01-24 14:01:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \yhzgh-ms-portal\src\components\commons\TableSelectTip.vue
-->
<template>
  <div class="table-select-tip">
    <div class="left">
      <!-- <img :src="imgPath" /> -->
      <div>
        {{ name }}共计<a href="javascript:;">{{ total }}</a
        >个，当前选中<a href="javascript:;">{{ chooseNum }}</a
        >个
      </div>
    </div>
    <a @click.prevent="onClear">清空</a>
  </div>
</template>
<script>
// import imgPath from '@/assets/alert_icon_ifo@2x.png'
export default {
  name: "tableSelectTip",
  props: {
    name: {
      type: String,
      default: "",
    },
    total: {
      type: Number,
      default: 0,
    },
    chooseNum: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      // imgPath,
    };
  },
  methods: {
    // 清空选中
    onClear() {
      this.$emit("clearChoose");
    },
    // alert_icon_ifo@2x.png
  },
};
</script>
<style lang="less" scoped>
.table-select-tip {
  width: 100%;
  border: 1px solid #3090f1;
  border-radius: 8px;
  height: 44px;
  line-height: 44px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.95);
  .left {
    display: flex;
    align-items: center;
    a {
      margin: 0 5px;
    }
  }
  img {
    width: 17px;
    height: 17px;
    margin-right: 11px;
  }
}
</style>
