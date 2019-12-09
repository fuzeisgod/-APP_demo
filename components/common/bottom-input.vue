<template>
	<view>
		<!-- 底部操作条 -->
		<view style="height: 100rpx;" class="fixed-bottom flex align-center border-top bg-white">
			<input type="text" v-model="content" placeholder="文明发言" :adjust-position="false" class="flex-1 rounded bg-light ml-2 py-1 px-1"
			 @confirm="submit" />
			<view class="iconfont icon-fabu flex justify-center align-center font-lg" style="width: 100rpx;" hover-class="animated jello text-main"
			 @click="submit"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: ""
			}
		},
		methods: {
			submit() {
				// 是否为空
				if (this.content === '') {
					return uni.showToast({
						title: '消息不能为空',
						icon: 'none'
					});
				}
				this.$emit('submit',this.content)
				// 清空输入框
				this.content = '';
			}
		}
	}
</script>

<style>
</style>
