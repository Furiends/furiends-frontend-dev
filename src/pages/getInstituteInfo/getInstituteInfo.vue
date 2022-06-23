<template>
  <view>
    <view>基本信息填写 2/3</view>
    <view id="progress-container">
      <view id="progress-bar"></view>
    </view>
    <view class="form-container"></view>
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    onLoad() {},
    methods: {},
  };
</script>

<style scoped lang="scss">
  #progress-container {
    width: 100%;
    background-color: #979797;
  }

  ,
  #progress-bar {
    width: 0%;
    height: 30rpx;
    background-color: blue;
    text-align: center;
    line-height: 30rpx;
    color: blue;
  }
</style>
