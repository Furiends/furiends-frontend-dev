<template>
	<view>
		<view class="text-box" scroll-y="true">
			<text>为领养人制定机构的领养流程</text>
		</view>
		<view class="expand-box" scroll-y="true">
			<view class="expand-box-button" @tap="handleExpand" v-if="!showDetail">
				<u-icon name="arrow-down-fill" color="#000000" size="14"></u-icon>
				<text>展开</text>
			</view>
			<view class="expand-box-button" @tap="handleExpand" v-if="showDetail">
				<u-icon name="arrow-up-fill" color="#000000" size="14"></u-icon>
				<text>收起</text>
			</view>
		</view>
		<HM-dragSorts :list="dataList" :isLongTouch="true" :rowHeight="55" @change="change" @confirm="confirm"
			:showDetail="showDetail" @onclick="onclick" @itemEditEvent="handleItemEdit" @itemDelEvent="handleItemDel">
		</HM-dragSorts>
		<view class="add-box" @tap="handleAdd">
			<u-icon name="plus-circle-fill" color="#636363" size="42"></u-icon>
			<text>添加额外领养流程</text>
		</view>
		<u-popup :show="show" :round="10" mode="bottom" :closeable="closeable" @close="close" @open="open">
			<view class="u-popup">
				<u--input class="u-popup-input" placeholder="请输入内容" border="surround" v-model="itemTitle" fontSize="18"
					@change="change"></u--input>
				<u--textarea class="u-popup-textarea" v-model="itemDetail" placeholder="请输入内容"></u--textarea>
				<button class="u-popup-button">确定</button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import $http from '../../service/request/http';
	import dragSorts from '@/uni_modules/HM-dragSorts/components/HM-dragSorts/HM-dragSorts.vue'
	export default {
		components: {
			'HM-dragSorts': dragSorts
		},
		data() {
			return {
				closeable: true,
				show: false,
				showDetail: false,
				sortable: null, // 拖拽对象
				sortData: [], // 拖拽数据
				//dataList: [],
				dataList: [{
					id: 1,
					name: '授权个人信息',
					detail: '授权个人信息详情……',
				}, {
					id: 2,
					name: '等待领养审核结果',
					detail: '等待领养审核结果详情……',
				}, {
					id: 3,
					name: '完善个人信息',
					detail: '完善个人信息详情……'
				}, {
					id: 4,
					name: '确定领养宠物类型意向',
					detail: '确定领养宠物类型意向详情……'
				}, {
					id: 5,
					name: '等待义工/自愿者联系',
					detail: '等待义工/自愿者联系详情……'
				}, {
					id: 6,
					name: '通过领养要求，签订协议',
					detail: '通过领养要求，签订协议详情……'
				}, {
					id: 7,
					name: '完成领养',
					detail: '完成领养详情……'
				}],
				itemTitle: "",
				itemDetail: ""
			}
		},
		mounted() {
			//获取列表
			this.getorgAdoptionProgramManagementList()
			//this.init()
		},
		methods: {
			getorgAdoptionProgramManagementList() {
				$http
					.request({
						url: '/getResource/getData',
					})
					.then((res) => {
						console.log('请求成功',JSON.stringify(res.data));
						this.dataList = res.data;	
					})
					.catch((e) => {
						console.log('请求失败',JSON.stringify(e));
					});

			},
			onclick(e) {
				console.log('=== onclick start ===');
				console.log("被点击行: " + JSON.stringify(e.value));
				console.log("被点击下标: " + JSON.stringify(e.index));
				console.log('=== onclick end ===');
			},
			change(e) {
				console.log('=== change start ===');
				console.log("被拖动行: " + JSON.stringify(e.moveRow));
				console.log('原始下标：', e.index);
				console.log('移动到：', e.moveTo);
				console.log('=== change end ===');
			},
			confirm(e) {
				let that = this;
				console.log('=== confirm start ===');
				console.log("被拖动行: " + JSON.stringify(e.moveRow));
				console.log('原始下标：', e.index);
				console.log('移动到：', e.moveTo);
				console.log('=== confirm end ===');
				//let that = this;
				let newIndex = e.moveTo,
					oldIndex = e.index;
				// 修改数组
				let item = that.dataList.splice(oldIndex, 1)
				console.log("newitem", JSON.stringify(item))
				that.dataList.splice(newIndex, 0, item[0])
				console.log("newdataList", JSON.stringify(that.dataList))

			},
			handleItemEdit(index) {
				console.log('handleItemEdit', index);
				//编辑
				this.show = true
				this.itemTitle = this.dataList[index].name
				this.itemDetail = this.dataList[index].detail
			},
			handleItemDel(index) {
				console.log('handleItemDel', index);
				this.dataList.splice(index, 1);
			},
			close() {
				this.show = false
				// console.log('close');
			},
			handleExpand() {
				console.log("展开");
				this.showDetail = !this.showDetail
				console.log("展开", this.showDetail);
			},
			handleAdd() {
				console.log("添加");
				this.show = true

			}
		},
	}
</script>

<style lang="scss">
	.text-box {
		background-color: #f7f7f7;
		min-height: 60px;
		display: flex;
		padding: 15px 10px;
		align-items: center;
	}

	.sort-list-item {
		width: 90%;
	}

	.u-popup {
		min-height: 450px;

		&-input {
			font-size: 18px;
			font-weight: 600;
			margin: 50px 10px 20px 10px;
			height: 30px;
		}

		&-textarea {
			height: 220px;
			margin: 10px;
		}

		&-button {
			margin-top: 20px;
			background-color: #bababa;
			color: #000000;
		}
	}

	.expand-box {
		background-color: #efefef;
		height: 25px;

		&-button {
			display: flex;
			float: right;
		}
	}

	.add-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
	}
</style>
