<template>
	<view>
		<view class="iconfont icon-guanbi flex align-center justify-center font-lg" style="width: 100rpx;height: 100rpx;position: fixed;top: 0;left: 0;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			let res = uni.getSystemInfoSync()
			console.log(res)
		},
		methods: {

		}
	}
</script>

<style>

</style>
