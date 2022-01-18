<!--
 * @Author: your name
 * @Date: 2022-01-17 16:28:40
 * @LastEditTime: 2022-01-18 15:29:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lagou-PC\src\views\login\index.vue
-->
<template>
  <div class="login-page">
    <img :src="logo" alt="logo" class="logo" />
    <div class="form-cont">
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        :autocomplete="false"
        class="form"
      >
        <a-form-model-item label="用户名" prop="userName" class="w500">
          <a-input v-model="form.userName" placeholder="请输入用户名" />
        </a-form-model-item>
        <a-form-model-item label="密码" prop="password" class="w500">
          <a-input-password placeholder="请输入密码" v-model="form.password" />
        </a-form-model-item>
      </a-form-model>
      <a-button type="primary" @click="onSubmit" class="ml200 w300"
        >登录</a-button
      >
    </div>
  </div>
</template>
<script>
// import logo
export default {
  name: "login",
  data() {
    return {
      logo: require("@/assets/logo.png"),
      form: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
      },
      labelCol: { span: 8 },
      wrapperCol: { span: 14 },
    };
  },
  created() {
    this.$log("test log");
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const param = {
            ...this.form,
          };
          console.log("param", param);
          window.location = `${window.location.origin}/`;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #f0f2f5 url(../../assets/Bg.png) no-repeat;
  background-size: cover;
  .logo {
    width: 250px;
    position: fixed;
    top: 50px;
    left: 50px;
  }
  .ml200 {
    margin-left: 160px;
  }
  .form {
    ::v-deep .ant-form-item-label > label {
      color: #fff;
    }
  }
}
</style>
