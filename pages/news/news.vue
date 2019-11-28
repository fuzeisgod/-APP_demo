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

		<swiper :current="tabIndex" @change="onChangeTab" :duration="150" :style="'height:' + scrollH + 'px;'">
			<!-- 关注 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'">
					<block v-for="(item, index) in list" :key="index">
						<common-list :item="item" :index="index" @follow="follow" @doSupport="doSupport"></common-list>
						<!-- 全局分割线 -->
						<divider></divider>
					</block>
				</scroll-view>
			</swiper-item>
			<!-- 话题 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'">
					<view>话题</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	const demo = [{
		username: "昵称1",
		userpic: "../../static/default.jpg",
		newstime: "2019-10-20 下午04:30",
		isFollow: false,
		title: "我是标题",
		titlepic: "../../static/bgimg/1.jpg",
		support: {
			// 顶操作 type 为 "support",
			// 踩操作 type 为 "unsupport",
			// 未操作 type 为 ""
			type: "",
			support_count: 0,
			unsupport_count: 0
		},
		comment_count: 2,
		share_num: 2
	}, {
		username: "昵称2",
		userpic: "../../static/default.jpg",
		newstime: "2019-10-20 下午04:30",
		isFollow: false,
		title: "我是标题",
		titlepic: "",
		support: {
			type: "",
			support_count: 1,
			unsupport_count: 2
		},
		comment_count: 2,
		share_num: 2
	}];
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import commonList from '@/components/common/common-list.vue';
	export default {
		data() {
			return {
				scrollH: 500,
				tabIndex: 0,
				tabBars: [{
					name: "关注"
				}, {
					name: "话题"
				}],
				// 关注列表
				list:[]
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
			},
			// 监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			}
		},
		components: {
			uniNavBar,
			commonList
		},
		onLoad() {
			let res = uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - res.statusBarHeight - 44
				}
			})
			// 加载测试数据
			this.list = demo;
		}
	}
</script>

<style>

</style>
