<template>
  <view class="box">
    <u--form labelPosition="top" :model="institudeInfo" ref="infoForm" :rules="rules">
      <view class="progress-bar" dot>
        <u-steps :current="current">
          <u-steps-item iconSize="24"></u-steps-item>
          <u-steps-item iconSize="24"></u-steps-item>
          <u-steps-item iconSize="24"></u-steps-item>
        </u-steps>
      </view>
      <view class="form-group" v-if="active === 0">
        <view class="form-step">
          <view class="form-des-container">
            <view class="form-title">请填写机构名称：</view>
            <view class="form-des">*机构名称在提交后不可再更改，请注意填写正确的名称。</view>
          </view>
          <view class="input-group">
            <u-form-item prop="institudeName">
              <u--input v-model="institudeInfo.institudeName"></u--input>
            </u-form-item>
          </view>
          <view class="btn">
            <u-button class="btn-next" type="info" :plain="true" text="下一个" @click="clickNextBtn"></u-button>
          </view>
        </view>
      </view>
      <view class="form-group" v-else-if="active === 1">
        <view class="form-step">
          <view class="form-des-container">
            <view class="form-title">请填写机构负责人名字：</view>
            <view class="form-des">*即：机构目前负责人是谁？</view>
          </view>
          <view class="input-group">
            <u-form-item prop="managerName">
              <u--input v-model="institudeInfo.managerName"></u--input>
            </u-form-item>
          </view>
          <view class="btn-group">
            <u-button class="btn-pre" type="info" :plain="true" text="上一个" @click="clickPreBtn"></u-button>
            <u-button class="btn-next" type="info" :plain="true" text="下一个" @click="clickNextBtn"></u-button>
          </view>
        </view>
      </view>
      <view class="form-group" v-else-if="active === 2">
        <view class="form-step">
          <view class="form-des-container">
            <view class="form-title">请填写机构联系方式：</view>
            <view class="form-des">*邮箱为必填，其他联系方式为选填。</view>
          </view>
          <view class="input-group">
            <u-form-item label="邮箱" prop="email">
              <u--input v-model="institudeInfo.email"></u--input>
            </u-form-item>
          </view>
          <view class="input-group">
            <u-form-item label="手机" prop="phoneNumber">
              <u--input v-model="institudeInfo.phoneNumber"></u--input>
            </u-form-item>
            <u-form-item label="微信号" prop="wechatId">
              <u--input v-model="institudeInfo.wechatId"></u--input>
            </u-form-item>
            <u-form-item label="公众号" prop="officialAccount">
              <u--input v-model="institudeInfo.officialAccount"></u--input>
            </u-form-item>
          </view>
          <view class="btn-group">
            <u-button class="btn-pre" type="info" :plain="true" text="上一个" @click="clickPreBtn"></u-button>
            <u-button class="btn-next" type="info" :plain="true" text="开启管理之旅" @click="submit"></u-button>
          </view>
        </view>
      </view>
    </u--form>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        current: 0,
        active: 0,
        institudeInfo: {
          institudeName: '',
          managerName: '',
          email: '',
          phoneNumber: '',
          wechatId: '',
          officialAccount: '',
        },
        rules: {
          institudeName: {
            type: 'string',
            max: 24,
            required: true,
            message: '请填写名称',
            trigger: ['blur'],
          },
          managerName: {
            type: 'string',
            max: 24,
            required: true,
            message: '请填写姓名',
            trigger: ['blur'],
          },
          email: {
            type: 'string',
            max: 24,
            required: true,
            message: '请填写邮箱',
            trigger: ['blur'],
          },
        },
      };
    },
    onLoad() {},
    onReady() {
      this.$refs.infoForm.setRules(this.rules);
    },
    methods: {
      clickPreBtn() {
        if (this.active === 0) {
          return;
        }
        this.active -= 1;
        this.current -= 1;
      },
      async clickNextBtn() {
        const isFilled = await this.$refs.infoForm.validate();
        if (!isFilled) {
          return;
        }

        if (this.active === 2) {
          return;
        }

        this.active += 1;
        this.current += 1;
      },
      submit() {
        this.$refs.infoForm.validate().then((res) => {
          console.log(res);
        });
      },
    },
  };
</script>

<style scoped lang="scss">
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  ::v-deep .progress-bar {
    margin-top: 60rpx;
    margin-bottom: 50rpx;

    .u-steps-item__wrapper {
      background-color: #e5e5e5;
    }

    .u-steps-item__wrapper__circle {
      height: 60rpx;
      width: 60rpx;
    }
  }

  .form-step {
    box-sizing: border-box;
    width: 582rpx;
    min-height: 598rpx;
    background-color: #fff;
    border-radius: 20rpx;
    padding: 50rpx;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .form-des {
      color: #979797;
      font-size: 24rpx;
      margin-top: 12rpx;
    }

    ::v-deep .input-group {
      margin-top: 20rpx;

      .u-form-item__body__left__content {
        padding-right: 0;
      }
    }

    .btn {
      margin-top: 50rpx;
      width: 50%;
      margin-left: auto;
    }

    .btn-group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }
</style>
