<!--
 * @Author: your name
 * @Date: 2022-01-24 13:57:47
 * @LastEditTime: 2022-01-24 15:09:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lagou-PC\src\views\organization\user\components\EditModal.vue
-->
<template>
  <a-modal
    :title="title"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    :maskClosable="false"
    class="antd-ui-changed"
    ok-text="提交"
    cancel-text="取消"
  >
    <a-form-model ref="ruleForm" :model="form" :rules="rules" layout="vertical">
      <a-form-model-item label="应用名称" prop="name">
        <a-input
          v-model="form.name"
          :maxLength="64"
          placeholder="请输入应用名称"
        />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>
<script>
export default {
  name: "editModal",
  props: {
    modalType: {
      type: String,
      default: "add",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      title: `${this.modalType === "add" ? "新增" : "编辑"}`,
      confirmLoading: false,
      form: {
        name: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入名称",
          },
        ],
      },
    };
  },
  // computed
  created() {
    this.id && this.getDetail();
  },
  methods: {
    // 获取详情
    getDetail() {
      this.$log("detail");
      // this.$http
      //   .post("/data-center-server/api/auth/server/application/detail", {
      //     id: this.id,
      //   })
      //   .then((res) => {
      //     if (res && res.code === 10000) {
      //       this.form = {
      //         ...res.data,
      //       };
      //     }
      //   });
    },
    // 确认
    handleOk() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const params = {
            ...this.form,
            id: this.id || undefined,
          };
          this.$log("submit-params", params);
          // this.$http
          //   .post(
          //     "/data-center-server/api/auth/server/application/edit",
          //     params
          //   )
          //   .then((res) => {
          //     if (res && res.code === 10000) {
          //       this.$message.success("保存成功");
          //       this.handleCancel(1);
          //     }
          //   });
        }
      });
    },
    // 取消
    handleCancel(isOk = 0) {
      this.$emit("closeModal", isOk);
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../../../../styles/UIDesignChanged.less");
.wrap-class-name {
  border-radius: 20px;
}
</style>
