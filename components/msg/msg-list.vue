<template>
	<view class="flex align-center p-2 border-bottom border-light-secondary animated fast fadeIn" hover-class="bg-light" @click="open">
		<image :src="item.avater" style="height: 80rpx;width: 80rpx;" class="rounded-circle mr-2" mode=""></image>
		<view class="flex flex-column flex-1">
			<view class="flex align-center justify-between">
				<text class="font-md">{{item.username}}</text>
				<text class="font-sm text-secondary">{{item.update_time}}</text>
			</view>
			<view class="flex align-center justify-between">
				<text class="text-secondary text-ellipsis" style="max-width: 500rpx;">{{item.data}}</text>
				<uni-badge :text="item.noread" type="error"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '@/components/uni-ui/uni-badge/uni-badge.vue';
	export default {
		props: {
			item: Object,
			index: Number
		},
		components:{
			uniBadge
		},
		methods:{
			// 打开聊天页
			open(){
				uni.navigateTo({
					url: '../../pages/user-chat/user-chat',
				});
			}
		}
	}
</script>

<style>
</style>
