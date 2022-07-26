<template>
  <view class="box" :style="{height: screenHeight + 'px'}">
    <view class="container">
      <view v-for="item in welfareList" :key="item.id">
        <view class="walefareItem">
          <button size="mini" :class="item.isSelected === 1 ? 'selected' : 'unselect'" @click="selectItem(item)">
            {{ item.type }}
          </button>
        </view>
      </view>
    </view>
    <u-toast ref="uToast"></u-toast>
    <view class="saveBtnBox">
      <view class="saveBtn">
        <u-button size="medium" text="保存" color="#BABABA" @click="save()"></u-button>
      </view>
    </view>
  </view>
</template>

<script>
  import { getServicesReq, saveServicesReq } from '@/service/api/welfareAndServices';
  import $http from '../../service/request/http';

  export default {
    name: 'welfareAndServices',
    data() {
      return {
        welfareList: [],
        screenHeight: '',
        selectedList: [],
      };
    },
    mounted() {
      this.screenHeight = uni.getSystemInfoSync().windowHeight;
      this.fetchData();
    },
    methods: {
      fetchData() {
        $http
          .request({
            url: getServicesReq.url,
          })
          .then((res) => {
            this.welfareList = res.data;
          })
          .catch(() => {
            console.log('请求失败');
          });
      },
      selectItem(event) {
        const selecedItem = this.welfareList.find((item) => item.id === event.id);

        if (event.isSelected) {
          selecedItem.isSelected = event.isSelected === selecedItem.isSelected ? 0 : 1;
        } else {
          selecedItem.isSelected = event.isSelected === selecedItem.isSelected ? 1 : 0;
        }

        const idx = this.selectedList.findIndex((i) => i.id === selecedItem.id);
        if (idx < 0) {
          this.selectedList.push(selecedItem);
        } else {
          this.selectedList.splice(idx, 1, selecedItem);
        }
      },
      save() {
        $http
          .request({
            url: saveServicesReq.url,
            method: saveServicesReq.type,
            data: this.selectedList,
          })
          .then((res) => {
            this.$refs.uToast.show({
              type: 'success',
              message: '保存成功',
              iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
            });
          })
          .catch(() => {
            this.$refs.uToast.show({
              type: 'error',
              icon: false,
              message: '保存失败',
              iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png',
            });
          });
      },
    },
  };
</script>

<style scoped lang="scss">
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 99%;
    margin-top: 40rpx;
    color: #5c8aff;
    padding-left: 30rpx;
    max-height: 1000rpx;
    overflow: scroll;
  }

  .walefareItem {
    button {
      flex: 1;
      margin: 0 30rpx 30rpx 0;
      min-width: 150rpx;
      line-height: 44rpx;
      text-align: center;
    }

    .selected {
      color: #fff;
      background-color: #5c8aff;
      border: 1rpx solid #5c8aff;
    }

    .unselect {
      color: #5c8aff;
      background-color: #fff;
      border: 1rpx solid #5c8aff;
    }
  }

  .saveBtnBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::v-deep .saveBtn {
    width: 90%;
    margin-bottom: 40rpx;
    height: 43px;

    .u-button {
      color: #000 !important;
    }
  }
</style>
