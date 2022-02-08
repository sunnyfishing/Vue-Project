<!--
 * @Author: your name
 * @Date: 2022-01-24 13:57:47
 * @LastEditTime: 2022-01-26 15:43:36
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
      <a-form-model-item label="用户名" prop="username">
        <a-input
          v-model="form.username"
          :maxLength="64"
          placeholder="请输入用户名"
        />
      </a-form-model-item>
      <a-form-model-item label="密码" prop="password">
        <a-input-password
          v-model="form.password"
          :maxLength="64"
          placeholder="请输入密码"
        />
      </a-form-model-item>
      <a-form-model-item label="手机号" prop="phone">
        <a-input
          v-model="form.phone"
          :maxLength="11"
          placeholder="请输入手机号"
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
        username: "",
        password: "",
        phone: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入名称",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入名称",
          },
        ],
        phone: [
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
          this.$axiosPost("/users/new", params).then((res) => {
            if (res && res.code === 10000) {
              this.$message.success("保存成功");
              this.handleCancel(1);
            }
          });
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
