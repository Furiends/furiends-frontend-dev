<template>
 <u-action-sheet :list="list" v-model="show"></u-action-sheet>
</template>

<script>
  export default {
    name: 'myPets',
	data() {
				return {
					list: [{
						text: '点赞',
						color: 'blue',
						fontSize: 28
					}, {
						text: '分享'
					}, {
						text: '评论'
					}],
					show: true
				}
			}
  };
</script>

<style scoped></style>
