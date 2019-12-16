<template>
	<view>
		<!-- 头部 -->
		<view class="flex align-center p-3 border-bottom border-light-secondary">
			<image src="/static/default.jpg" style="width: 180rpx;height: 180rpx;" class="rounded-circle"></image>
			<view class="pl-3 flex flex-column flex-1">
				<view class="flex align-center">
					<view class="flex-1 flex flex-column align-center justify-center">
						<text class="font-lg font-weight-bold">1</text>
						<text class="font text-muted">粉丝</text>
					</view>
					<view class="flex-1 flex flex-column align-center justify-center">
						<text class="font-lg font-weight-bold">1</text>
						<text class="font text-muted">粉丝</text>
					</view>
					<view class="flex-1 flex flex-column align-center justify-center">
						<text class="font-lg font-weight-bold">1</text>
						<text class="font text-muted">粉丝</text>
					</view>
				</view>
				<view class="flex justify-center align-center pt-1">
					<button type="primary" size="mini" class="bg-main text-white" style="width: 80%;">关注</button>
				</view>
			</view>
		</view>

		<!-- tab -->
		<view class="flex align-center" style="height: 100rpx;">
			<view class="flex-1 flex align-center justify-center" v-for="(item, index) in tabBars" :key="index" :class="index === tabIndex ? 'font-lg font-weight-bold text-main' : ''"
			 @click="changeTab(index)">
				{{ item.name }}
			</view>
		</view>
		
		<template v-if="tabIndex === 0">
			<view>首页</view>
		</template>
		<template v-else>
			<view>帖子/动态</view>
		</template>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: '主页'
					},
					{
						name: '帖子'
					},
					{
						name: '动态'
					}
				],
			}
		},
		methods: {
			// tab 切换
			changeTab(index) {
				this.tabIndex = index;
			},
		}
	}
</script>

<style>

</style>
