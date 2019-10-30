<template>
	<view>
		<!-- 列表样式 -->
		<view class="p-2">
			<!-- 头像昵称 | 关注按钮 -->
			<view class="flex align-center justify-between">
				<view class="flex align-center">
					<!-- 头像 -->
					<image src="../../static/default.jpg" class="rounded-circle mr-2" style="width: 65rpx;height: 65rpx;" lazy-load></image>
					<!-- 昵称发布时间 -->
					<view class="">
						<view class="font" style="line-height: 1.5;">昵称</view>
						<text class="font-sm text-light-muted" style="line-height: 1.5;">2019-10-20 下午04:30</text>
					</view>
				</view>
				<!-- 按钮 -->
				<view class="flex align-center justify-center rounded bg-main text-white" style="width: 90rpx;height: 50rpx;">
					关注
				</view>
			</view>
			<!-- 标题 -->
			<view class="font my-1">我是标题</view>
			<!-- 图片 -->
			<image src="../../static/bgimg/1.jpg" class="rounded w-100" style="height: 350rpx;" mode="scaleToFill"></image>
			<!-- 图标按钮 -->
			<view class="flex align-center">
				<view class="flex align-center justify-center flex-1">
					<text class="iconfont icon-dianzan2 mr-2"></text>
					<text>1</text>
				</view>
				<view class="flex align-center justify-center flex-1">
					<text class="iconfont icon-cai mr-2"></text>
					<text>1</text>
				</view>
				<view class="flex align-center justify-center flex-1">
					<text class="iconfont icon-pinglun2 mr-2"></text>
					<text>1</text>
				</view>
				<view class="flex align-center justify-center flex-1">
					<text class="iconfont icon-fenxiang mr-2"></text>
					<text>1</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
