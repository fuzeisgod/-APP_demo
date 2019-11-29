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
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'" @scrolltolower="loadmoreEvent(index)">
					<block v-for="(item, index) in list" :key="index">
						<common-list :item="item" :index="index" @follow="follow" @doSupport="doSupport"></common-list>
						<!-- 全局分割线 -->
						<divider></divider>
					</block>
					<!-- 上拉加载 -->
					<load-more :loadmore="loadmore"></load-more>
				</scroll-view>
			</swiper-item>
			<!-- 话题 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'">
					<!-- 热门分类 -->
					<hot-cate :hotCate="hotCate"></hot-cate>
					<!-- 搜索框 -->
					<view class="p-2">
						<view class="bg-light rounded flex align-center justify-center py-2 text-secondary">
							<text class="iconfont icon-sousuo mr-2"></text>
							搜索话题
						</view>
					</view>
					<!-- 轮播图 -->
					<swiper class="px-2 pb-2" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
						<swiper-item>
							<image src="/static/bgimg/4.jpg" mode="aspectFill" style="height: 300rpx;" class="w-100 rounded"></image>
						</swiper-item>
						<swiper-item>
							<image src="/static/bgimg/3.jpg" mode="aspectFill" style="height: 300rpx;" class="w-100 rounded"></image>
						</swiper-item>
						<swiper-item>
							<image src="/static/bgimg/2.jpg" mode="aspectFill" style="height: 300rpx;" class="w-100 rounded"></image>
						</swiper-item>
					</swiper>
					<divider></divider>
					<!-- 最近更新 -->
					<view class="p-2 font-md">最近更新</view>
					<!-- 话题列表组件 -->
					<view class="flex align-center p-2">
						<image src="/static/bgimg/3.jpg" style="height: 150rpx;width: 150rpx;" class="rounded mr-2"></image>
						<view class="flex flex-column flex-1">
							<text class="font-md text-dark">#话题名称#</text>
							<text class="font text-secondary">话题描述</text>
							<view class="flex align-center font text-secondary">
								<text class="mr-2">动态：10</text>
								<text>今日：10</text>
							</view>
						</view>
					</view>
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
		isFollow: true,
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
		isFollow: true,
		title: "我是标题",
		titlepic: "",
		support: {
			type: "",
			support_count: 1,
			unsupport_count: 2
		},
		comment_count: 2,
		share_num: 2
	}, {
		username: "昵称3",
		userpic: "../../static/default.jpg",
		newstime: "2019-10-20 下午04:30",
		isFollow: true,
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
	import loadMore from '@/components/common/load-more.vue';
	import hotCate from '@/components/news/hot-cate.vue';
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
				list: [],
				// 1.上拉加载更多 2.加载中... 3.没有更多了
				loadmore: "上拉加载更多",
				hotCate: [{
					name: "关注"
				}, {
					name: "推荐"
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
			},
			// 监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			// 顶踩操作
			doSupport(e) {
				// {type:"support", index:0}
				// 拿到当前对象
				let item = this.list[e.index]
				let msg = e.type === 'support' ? '顶' : '踩'
				// 之前没有操作过
				if (item.support.type === '') {
					item.support[e.type + '_count']++;
				} else if (item.support.type === 'support' && e.type === 'unsupport') { // 之前顶了
					// 顶 - 1
					if (item.support.support_count > 0) {
						item.support.support_count--;
					}
					// 踩 + 1
					item.support.unsupport_count++;
				} else if (item.support.type === 'unsupport' && e.type === 'support') { // 之前踩了
					// 踩 - 1
					if (item.support.unsupport_count > 0) {
						item.support.unsupport_count--;
					}
					// 顶 + 1
					item.support.support_count++;
				}
				item.support.type = e.type
				uni.showToast({
					title: msg + '成功'
				})
			},
			// 上拉加载更多
			loadmoreEvent(index) {
				// 验证当前是否处于可加载状态
				if (this.loadmore !== '上拉加载更多') return;
				// 设置加载状态
				this.loadmore = '加载中...'
				// 模拟请求数据
				setTimeout(() => {
					// 加载数据
					this.list = [...this.list, ...this.list]
					// 设置加载状态
					this.loadmore = '上拉加载更多'
				}, 2000)
			}
		},
		components: {
			uniNavBar,
			commonList,
			loadMore,
			hotCate
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
