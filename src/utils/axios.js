/*
 * @Author: your name
 * @Date: 2022-01-24 16:25:18
 * @LastEditTime: 2022-01-26 15:49:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lagou-PC\src\utils\axios.js
 */
import axios from "axios";
import { notification } from "ant-design-vue";

// 创建基础请求
const axiosIns = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : "/proxy",
});

// 重定向
function goLoginPage() {
  // location.href = `${process.env.BASE_URL}/login`;
}

// 设置req拦截器
axiosIns.interceptors.request.use(
  // 第一个参数
  (req) => {
    // 判断url是否存在
    if (!req.url) {
      console.info("请检查，url为空：" + req.url);
    }
    try {
      // 配置请求头部
      req.headers.Authorization = "Bearer ";
      req.headers.author = "admin";
    } catch (e) {
      console.error("req封装header 出差", e);
    }
    return req;
  },
  // 配置错误回调
  (err) => {
    console.info("request err", err);
    return Promise.reject(err.request);
  }
);

// 设置res拦截器，用于处理返回的第一层内容
axiosIns.interceptors.response.use(
  // 第一个参数
  (result) => {
    // if (!result) {
    //   this.$message.error("请求出错");
    //   return;
    // } else if (result && result.code !== 10000) {
    //   this.$message.error("接口返回失败");
    //   return;
    // }
    return result.data;
    // 从接口返回的result 对象
    // result:{
    //   config:{},    // 配置
    //   data:{},      // 要返回的内容，也是浏览器预览里展示的内容
    //   headers:{}    // 响应头
    //   request:{},   // 请求体
    //   status:200,   // 网络状态码
    // }
  },
  // 返回错误
  (err) => {
    console.info("response err", err);
    return Promise.resolve(err.response);
  }
);

// get请求
const axios_get = (url, data = {}, msg, headers) => {
  return axiosIns
    .get(url, { params: { ...data, ...headers } })
    .then((res) => {
      if (res) {
        if (res.code === 20003) {
          // token失效
          notification.error({
            message: res.msg && "token失效，请重新登录！",
            onClose: () => {
              goLoginPage();
            },
          });
        } else if (res.code === 60000) {
          notification.error({
            message: res.data.message && "接口出错",
          });
        }
      } else {
        // 接口异常
        notification.error({
          message: "接口异常，请联系管理员！",
        });
      }
      return Promise.resolve(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

// post请求，用来处理第二层内容，即 result.data
const axios_post = (url, data = {}, msg, headers) => {
  return axiosIns
    .post(url, data, headers)
    .then((res) => {
      console.log("res", res);
      if (res) {
        if (res.code === 20003) {
          // token失效
          notification.error({
            message: res.msg && "token失效，请重新登录！",
            onClose: () => {
              goLoginPage();
            },
          });
        } else if (res.code === 60000) {
          notification.error({
            message: res.data.message || "接口出错",
          });
        }
      } else {
        // 接口异常
        notification.error({
          message: "接口异常，请联系管理员！",
        });
      }
      return Promise.resolve(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export { axios_get, axios_post };
