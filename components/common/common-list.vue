<template>
	<!-- 列表样式 -->
	<view class="p-2">
		<!-- 头像昵称 | 关注按钮 -->
		<view class="flex align-center justify-between">
			<view class="flex align-center">
				<!-- 头像 -->
				<image :src="item.userpic" class="rounded-circle mr-2" style="width: 65rpx;height: 65rpx;" lazy-load></image>
				<!-- 昵称发布时间 -->
				<view class="">
					<view class="font" style="line-height: 1.5;">{{item.username}}</view>
					<text class="font-sm text-light-muted" style="line-height: 1.5;">{{item.newstime}}</text>
				</view>
			</view>
			<!-- 按钮 -->
			<view class="flex align-center justify-center rounded bg-main text-white" style="width: 90rpx;height: 50rpx;">
				关注
			</view>
		</view>
		<!-- 标题 -->
		<view class="font my-1">{{item.title}}</view>
		<!-- 图片 -->
		<image :src="item.titlepic" class="rounded w-100" style="height: 350rpx;" mode="scaleToFill"></image>
		<!-- 图标按钮 -->
		<view class="flex align-center">
			<view class="flex align-center justify-center flex-1">
				<text class="iconfont icon-dianzan2 mr-2"></text>
				<text>{{item.support.support_count}}</text>
			</view>
			<view class="flex align-center justify-center flex-1">
				<text class="iconfont icon-cai mr-2"></text>
				<text>{{item.support.unsupport_count}}</text>
			</view>
			<view class="flex align-center justify-center flex-1">
				<text class="iconfont icon-pinglun2 mr-2"></text>
				<text>{{item.comment_count}}</text>
			</view>
			<view class="flex align-center justify-center flex-1">
				<text class="iconfont icon-fenxiang mr-2"></text>
				<text>{{item.share_num}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		}
	}
</script>

<style>
</style>
