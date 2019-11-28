<template>
	<view>
		<!-- 导航 -->
		<uni-nav-bar statusBar :border="false" fixed @click-right="openAddInput">
			<view class="flex align-center justify-center w-100">
				<view class="mx-1" v-for="(item, index) in tabBars" :key="index" :class="tabIndex === index ? 'font-lg text-main' : 'font-md text-light-muted'"
				 @click="changeTab(index)">{{item.name}}</view>
			</view>
			<text slot="right" class="iconfont icon-fatie_icon"></text>
		</uni-nav-bar>

		<swiper :duration="150" :style="'height:' + scrollH + 'px;'">
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'">
					<view class="" v-for="i in 5" :key="i">{{i}}</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	export default {
		data() {
			return {
				scrollH: 500,
				tabIndex: 0,
				tabBars: [{
					name: "关注"
				}, {
					name: "话题"
				}]
			}
		},
		methods: {
			// 打开发布页
			openAddInput() {
				uni.navigateTo({
					url: '../add-input/add-input'
				});
			},
			// 切换选项卡
			changeTab(index) {
				this.tabIndex = index
			}
		},
		components: {
			uniNavBar
		},
		onLoad() {
			let res = uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - res.statusBarHeight - 44
				}
			})
			// 根据选项生成列表
			this.getData();
		}
	}
</script>

<style>

</style>
