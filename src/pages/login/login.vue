<template>
  <view class="wrap">
    <view class="register-wrap" v-if="isRegister">
      <view class="register-back" @click="backLogin">返回</view>
      <u-form class="register-form" :model="registerForm">
        <u-form-item label-width="140rpx" label="账号">
          <u-input v-model="registerForm.username" placeholder="请输入账号" />
        </u-form-item>
        <u-form-item label-width="140rpx" label="密码">
          <u-input
            type="password"
            password-icon="true"
            :clearable="false"
            v-model="registerForm.password"
            placeholder="请输入密码"
          />
        </u-form-item>
        <u-form-item label-width="140rpx" label="确认密码">
          <u-input
            type="password"
            password-icon="true"
            :clearable="false"
            v-model="registerForm.againPassword"
            placeholder="请再次输入密码"
          />
        </u-form-item>
        <u-button class="register-btn" type="primary" @click="handlerRegister"
          >注册</u-button
        >
      </u-form>
    </view>
    <view class="login-wrap" v-else>
      <u-form :model="loginForm" ref="uForm">
        <u-form-item label="账号">
          <u-input v-model="loginForm.username" placeholder="请输入账号" />
        </u-form-item>
        <u-form-item label="密码">
          <u-input
            type="password"
            password-icon="true"
            :clearable="false"
            v-model="loginForm.password"
            placeholder="请输入密码"
          />
        </u-form-item>
        <view class="register-hint" @click="showRegister"
          >尚未注册？点击注册</view
        >
        <u-button type="primary" @click="handleLogin">登陆</u-button>
      </u-form>
    </view>
    <u-toast ref="uToast" />
    <u-mask :show="isshow">加载中···</u-mask>
  </view>
</template>

<script>
import { postLogin, postRegister } from "../../apis/user.js";
import { getuuid } from "../../utils/util.js";
export default {
  data() {
    return {
      isshow: false,
      isRegister: false,
      loginForm: {
        password: null,
        username: null,
        role: null,
      },
      registerForm: {
        password: null,
        againPassword: null,
        username: null,
      },
    };
  },
  methods: {
    showRegister() {
      this.isRegister = true;
    },
    backLogin() {
      this.isRegister = false;
    },
    handlerRegister() {
      // 注册
      this.isshow = true;
      postRegister(this.registerForm)
        .then((res) => {
          if (res.code == 200) {
            this.$refs.uToast.show({
              title: res.message || "注册成功",
              type: "success",
            });
            this.loginForm = { ...this.registerForm, role: null };
            this.handleLogin();
          } else {
            this.$refs.uToast.show({
              title: res.message || "注册失败",
              type: "error",
            });
          }
          this.isshow = false;
        })
        .catch((e) => {
          this.isshow = false;
        });
    },
    handleLogin() {
      this.isshow = true;
      // 登陆
      postLogin(this.loginForm)
        .then((res) => {
          if (res.code == 200) {
            try {
              uni.setStorageSync("token", getuuid());
            } catch (e) {
              console.log(e);
            }
            this.$refs.uToast.show({
              title: res.message || "登陆成功，跳转中",
              type: "success",
              url: "pages/index/index",
              isTab: true,
            });
          } else {
            this.$refs.uToast.show({
              title: res.message || "登陆失败，请重试",
              type: "error",
            });
          }
          this.isshow = false;
        })
        .catch((e) => {
          this.isshow = false;
        });
    },
  },
};
</script>

<style lang='scss' scoped>
.wrap {
  padding: 20rpx;
  .login-wrap {
    margin-bottom: 40rpx;
    .register-hint {
      margin-top: 40rpx;
      margin-bottom: 50rpx;
      text-align: center;
      color: #999;
      font-size: 24rpx;
    }
  }

  .register-wrap {
    .register-back {
      color: #999;
    }
    .register-form {
      margin-top: 80rpx;
    }
    .register-btn {
      margin-top: 40rpx;
    }
  }
}
</style>