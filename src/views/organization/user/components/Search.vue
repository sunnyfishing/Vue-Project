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
        justify="start"
      >
        <a-col :xs="24" :lg="12" :xl="8" :xxl="6" class="mb24">
          <div class="col-item">
            <div class="search-text-content w300">名称</div>
            <a-input
              v-model.trim="form.name"
              placeholder="请输入API名称"
              allowClear
              class="w300"
            />
          </div>
        </a-col>
        <a-col :xs="24" :lg="12" :xl="8" :xxl="6" class="mb24">
          <div class="col-item">
            <div class="search-text-content w300">API分组</div>
            <a-input
              v-model.trim="form.groupId"
              placeholder="请输入API分组"
              allowClear
              class="w300"
            />
          </div>
        </a-col>
        <a-col :xs="24" :lg="12" :xl="8" :xxl="6" class="mb24">
          <div class="col-item">
            <div class="search-text-content w300">数据源类型</div>
            <a-input
              v-model.trim="form.name2"
              placeholder="请输入数据源类型"
              allowClear
              class="w300"
            />
          </div>
        </a-col>
        <a-col :xs="24" :lg="12" :xl="8" :xxl="6" v-if="isClose" class="mb24">
          <div class="search-button">
            <div>
              <a-button type="primary" @click="handleSubmit" class="mr24"
                >查询</a-button
              >
              <a-button @click="handleReset">重置</a-button>
            </div>
            <div class="set-up-down" @click.prevent="closeOpen">
              <a style="color: #3090f1">展开</a>
              <a-icon type="down" style="color: #3090f1" />
            </div>
          </div>
        </a-col>
        <template v-else>
          <a-col :xs="24" :lg="12" :xl="8" :xxl="6" class="mb24">
            <div class="col-item">
              <div class="search-text-content w300">状态</div>
              <a-input
                v-model.trim="form.name3"
                placeholder="请输入数据源类型"
                allowClear
                class="w300"
              />
            </div>
          </a-col>
          <a-col :xs="24" :lg="12" :xl="8" :xxl="6" push="18" class="mb24">
            <div class="search-button">
              <div>
                <a-button type="primary" @click="handleSubmit" class="mr24"
                  >查询</a-button
                >
                <a-button @click="handleReset">重置</a-button>
              </div>
              <div class="set-up-down" @click.prevent="closeOpen">
                <a style="color: #3090f1">收起</a>
                <a-icon type="up" style="color: #3090f1" />
              </div>
            </div>
          </a-col>
        </template>
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
        name: "", //
        groupId: "", // 企业名称
        name2: "", //
        name3: "", //
      },
      isClose: true,
    };
  },
  created() {},
  computed: {},
  methods: {
    // 查询
    handleSubmit() {
      const { groupId = [] } = this.form;
      const params = { ...this.form, groupId: groupId[groupId.length - 1] };
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
