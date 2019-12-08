<template>
	<view>
		<!-- 时间 -->
		<view class="py-2 flex align-center justify-center font text-light-muted">12:30</view>
		<!-- 消息气泡 -->
		<view class="flex align-start px-2 my-2" :style="isSelf ? 'flex-direction: row-reverse;' : ''">
			<image :src="item.avater" style="width: 100rpx;height: 100rpx;" class="rounded-circle" mode=""></image>
			<view class="bg-light p-2 rounded mx-2" style="max-width: 400rpx;">{{ item.data }}</view>
		</view>
	</view>
</template>

<script>
// 模拟当前登录用户的 userid
const uid = 1;
export default {
	props: {
		item: Object,
		index: Number
	},
	computed: {
		// 是否是登录用户本人
		isSelf() {
			return this.item.user_id === uid;
		}
	}
};
</script>

<style></style>
