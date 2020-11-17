<template>
    <view class="wrap">
        <view class="login-wrap">
            <u-form :model="loginForm" ref="uForm">
                <u-form-item label="账号">
                    <u-input v-model="loginForm.password" placeholder="请输入账号" />
                </u-form-item>
                <u-form-item label="密码">
                    <u-input v-model="loginForm.username" placeholder="请输入密码" />
                </u-form-item>
                <view class="register-hint">尚未注册？点击注册</view>
                <u-button type="primary">登陆</u-button>
            </u-form>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                loginForm: {
                    password: null,
                    username: null,
                    role: null
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
.wrap{
    padding: 20rpx;
    .register-hint{
        text-align: center;
        color: #999;
    }
}

</style>