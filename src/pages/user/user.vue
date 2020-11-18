<template>
  <view>
    <view class="head df-jb-ac">
      <view class="head-user df-ac">
        <img :src="userLogo" alt="" />
        <text>用户名</text>
      </view>
      <u-button type="primary" @tap="logout">登出</u-button>
    </view>
    <view class="menus-title">菜单栏</view>
    <view class="menus df-ac">
      <view
        class="menu-item"
        @tap="skip(item.path)"
        v-for="(item, idx) in menus"
        :key="idx"
      >
        <img :src="item.icon" alt="" />
        <view>{{ item.title }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userLogo: "../../static/head.png",
      menus: [
        {
          title: "我的订单",
          icon: "../../static/icon_order.png",
          path: "/pages/order/order",
        },
        {
          title: "我的地址",
          icon: "../../static/icon_address.png",
          path: "/pages/address/address",
        },
        // {
        //   title: "我的购物车",
        //   icon: "../../static/icon_cart.png",
        //   path: "/pages/cart/cart",
        // },
      ],
    };
  },
  methods: {
    skip(path) {
      uni.navigateTo({
        url: path,
      });
    },
    logout(){
        uni.removeStorageSync('token');
        uni.navigateTo({
             url: '/pages/login/login'
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.head {
  padding: 80rpx 40rpx;
  // background-color: #5cdbd3;
  background: linear-gradient(to bottom, #00f5a0, #00d9f5);
  .head-user {
    img {
      width: 110rpx;
      height: 110rpx;
      border-radius: 100%;
      margin-right: 20rpx;
    }
    text {
      color: #fff;
      font-weight: bold;
    }
  }
}
.menus-title {
  padding: 30rpx;
  border-bottom: 1px solid #ddd;
}
.menus {
  flex-wrap: wrap;
  padding: 30rpx;
  border-bottom: 1px solid #ddd;
  .menu-item {
    margin-right: 40rpx;
    text-align: center;
    img {
      width: 70rpx;
      height: 70rpx;
      margin-bottom: 8rpx;
    }
  }
}
</style>