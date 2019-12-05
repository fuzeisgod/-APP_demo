<template>
	<view>
		<!-- tab -->
		<view class="flex align-center py-2">
			<view class="flex-1 flex align-center justify-center" v-for="(item, index) in tabBars" :key="index" :class="index === tabIndex ? 'font-lg font-weight-bold text-main':''"
			 @click="changeTab(index)">{{item.name}} <text v-if="item.num > 0" class="ml-2">{{item.num}}</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
					name: "互关",
					num: 0
				}, {
					name: "关注",
					num: 3
				}, {
					name: "粉丝",
					num: 30
				}]
			}
		},
		// 监听点击输入框事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: "../search/search"
			})
		},
		// 监听点击取消按钮
		onNavigationBarButtonTap() {
			uni.navigateBack({
				delta: 1
			});
		},
		methods: {
			// tab 切换
			changeTab(index) {
				this.tabIndex = index;
			}
		}
	}
</script>

<style>

</style>
