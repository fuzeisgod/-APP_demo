<template>
	<view>
		<!-- 消息列表 -->
		<view class="flex align-center p-2 ">
			<image src="../../static/bgimg/4.jpg" style="height: 80rpx;width: 80rpx;" class="rounded-circle mr-2" mode=""></image>
			<view class="flex flex-column flex-1">
				<view class="flex align-center justify-between">
					<text class="font-md">昵称</text>
					<text class="font text-secondary">12：33</text>
				</view>
				<view class="flex align-center justify-between">
					<text class="text-secondary">内容</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '@/components/uni-ui/uni-badge/uni-badge.vue';
	export default {
		data() {
			return {
				
			}
		},
		components:{
			uniBadge
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
