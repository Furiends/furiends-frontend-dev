<template>
  <view class="content">
    <u-button type="primary" text="确定" @click="navto()"></u-button>
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello,test2223333',
      };
    },
    onLoad() {},
    methods: {
      navto() {
        uni.navigateTo({
          url: '/pages/welfareAndServices/welfareAndServices',
        });
      },
    },
  };
</script>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx;

    .test {
      height: 2rpx;
    }
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
