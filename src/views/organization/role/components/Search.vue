<!--
 * @Author: your name
 * @Date: 2022-01-24 13:57:20
 * @LastEditTime: 2022-01-24 15:08:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lagou-PC\src\views\organization\user\components\Search.vue
-->
<template>
  <div class="flex-row antd-ui-changed">
    <div class="flex-row">
      <a-row
        :gutter="24"
        style="width: 100%"
        type="flex"
        align="bottom"
        justify="space-between"
      >
        <a-col :xs="24" :lg="12" :xl="8" :xxl="6" class="mb24">
          <div class="col-item">
            <div class="search-text-content w300">用户名</div>
            <a-input
              v-model.trim="form.username"
              placeholder="请输入用户名"
              allowClear
              class="w300"
            />
          </div>
        </a-col>
        <a-col :xs="24" :lg="12" :xl="8" :xxl="6" class="mb24">
          <div class="search-button">
            <div>
              <a-button type="primary" @click="handleSubmit" class="mr24"
                >查询</a-button
              >
              <a-button @click="handleReset">重置</a-button>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
// import
export default {
  data() {
    return {
      form: {
        username: undefined, //
      },
      isClose: true,
    };
  },
  created() {},
  computed: {},
  methods: {
    // 查询
    handleSubmit() {
      const params = { ...this.form };
      this.$emit("search", params);
    },
    // 重置
    handleReset() {
      this.form = this.$options.data().form;
      this.handleSubmit();
    },
    closeOpen() {
      this.isClose = !this.isClose;
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../../../../styles/UIDesignChanged.less");
.flex-row {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
</style>
