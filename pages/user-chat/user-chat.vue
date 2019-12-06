<template>
	<view>

		<!-- 聊天列表 -->
		<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'">

			<block v-for="(item, index) in list" :key="index">
				<!-- 左边 -->
				<view class="flex align-start px-2 my-2" :style="item.user_id === 1 ? 'flex-direction: row-reverse;' : ''">
					<image :src="item.avater" style="width: 100rpx;height: 100rpx;" class="rounded-circle" mode=""></image>
					<view class="bg-light p-2 rounded mx-2" style="max-width: 400rpx;">{{item.data}}</view>
				</view>
			</block>

		</scroll-view>


		<!-- 底部操作条 -->
		<view style="height: 100rpx;" class="fixed-bottom flex align-center border-top bg-white">
			<input type="text" value="" placeholder="文明发言" class="flex-1 rounded bg-light ml-2 py-1 px-1" />
			<view class="iconfont icon-fabu flex justify-center align-center font-lg" style="width: 100rpx;" hover-class="animated jello text-main"></view>
		</view>

	</view>
</template>

<script>
	// 模拟当前登录用户的 userid
	const uid = 1;
	export default {
		data() {
			return {
				scrollH: 500,
				list: [{
					user_id: 2,
					avater: "/static/default.jpg",
					username: "昵称",
					data: "你好啊",
					type: "text", // image, video, audio
					create_time: "12:33"
				}, {
					user_id: 1,
					avater: "/static/default.jpg",
					username: "昵称",
					data: "你好啊",
					type: "text", // image, video, audio
					create_time: "12:33"
				}]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.windowHeight - uni.upx2px(101)
				}
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
