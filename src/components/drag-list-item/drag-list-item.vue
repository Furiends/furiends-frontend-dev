<template>
	<view>
	<view v-if="sortItem.name!=='授权个人信息'">
		<u-swipe-action >
			<u-swipe-action-item :options="options" @click="bindClick">
				<view class="swipe-action u-border-top u-border-bottom">
					<view class="swipe-action-one">
						<view class="swipe-action__content" v-if="!showDetail">
							<text class="swipe-action__content__text">第{{sortIndex+1}}步:{{sortItem.name}}</text>
						</view>
						<!-- <u-icon name="more-dot-fill" color="#d9d9d9" size="18"></u-icon> -->
					</view>
					<view class="swipe-action-two" v-if="showDetail">
						<text>{{sortItem.detail}} </text>
					</view>
				</view>
			</u-swipe-action-item>
		</u-swipe-action>
		</view>
		<view v-else>
		<u-swipe-action>
			<u-swipe-action-item :options="options2" @click="bindClick">
				<view class="swipe-action u-border-top u-border-bottom">
					<view class="swipe-action-one">
						<view class="swipe-action__content" v-if="!showDetail">
							<text class="swipe-action__content__text">第{{sortIndex+1}}步:{{sortItem.name}}</text>
						</view>
						<!-- <u-icon name="more-dot-fill" color="#d9d9d9" size="18"></u-icon> -->
					</view>
					<view class="swipe-action-two" v-if="showDetail">
						<text>{{sortItem.detail}} </text>
					</view>
				</view>
			</u-swipe-action-item>
		</u-swipe-action>
	</view>
	</view>
</template>

<script>
	export default {
		name: "drag-list-item",
		props: {
			sortItem: {
				type: Object,
				default: {}
			},
			sortIndex: {
				type: Number,
				default: ""
			},
			showDetail:{
				type:Boolean,
				default: false
			}
		},
		watch: {
			list: {
				handler(val) {

				},
				immediate: true,
				deep: true
			}
		},
		data() {
			return {
				options: [{
					text: '编辑',
					style: {
						backgroundColor: '#666666',
						fontSize: 18,
						fontWeight: 600,
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#d9d9d9',
						fontSize: 18,
						fontWeight: 600,
						color: '#000000',
					}
				}],
				options2: [{
					text: '编辑',
					style: {
						backgroundColor: '#666666',
						fontSize: 18,
						fontWeight: 600,
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#d9d9d9',
						fontSize: 18,
						fontWeight: 600,
						color: '#000000',
					}
				},{
					text: '查看',
					style: {
						backgroundColor: '#d9d9d9',
						fontSize: 18,
						fontWeight: 600,
						color: '#000000',
					}
				}],

			};
		},
		methods: {
			bindClick(e) {
				if (e.index === 0) {
					//编辑
					this.$emit('itemEditEvent');
				} else if (e.index === 1) {
					//删除
					this.$emit('itemDelEvent');
				}

			},
		}
	}
</script>

<style lang="scss">
	.u-page {
		padding: 0;
	}

	.u-demo-block__title {
		padding: 10px 0 2px 15px;
	}

	.swipe-action {
		height: 55px;
		display: flex;
		flex-direction: column;

		&-one{
			display: flex;
			justify-content: space-between;
			padding-right: 10px;	
		}
		&-two{
			margin: 10px 15px;
		}

		&__content {
			padding: 45rpx 0;

			&__text {
				font-size: 18px;
				font-weight: 600;
				color: $u-main-color;
				padding-left: 30rpx;
			}
		}
	}
</style>

