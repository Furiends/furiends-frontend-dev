<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <u-button type="primary" text="确定"></u-button>
	<u-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button>
	<u-tag text="标签" plain size="mini" type="warning"></u-tag>
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
    methods: {},
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
