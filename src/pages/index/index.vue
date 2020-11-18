<template>
  <view class="content">
    <image class="logo" src="/static/head.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
	<u-toast ref="uToast" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {
	  const token = uni.getStorageSync('token');
	  if(!token){
		  this.$refs.uToast.show({
              title: "登陆失效，请重新登录",
              type: "error",
            });
		  uni.navigateTo({url: '/pages/login/login'});
	  }
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
