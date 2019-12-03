<template>
	<view>
		<topic-info :info="info"></topic-info>
		<divider></divider>

		<view class="p-2 flex align-center border-bottom" hover-class="bg-light" v-for="(item, index) in hotList" :key="index">
			<text class="iconfont icon-xihuan text-main"></text>
			<text class="font text-dark text-ellipsis">{{item.title}}</text>
		</view>
		<divider></divider>

		<!-- tab -->
		<view class="flex align-center py-2">
			<view class="flex-1 flex align-center justify-center" v-for="(item, index) in tabBars" :key="index" :class="index === tabIndex ? 'font-lg font-weight-bold text-main':''"
			 @click="changeTab(index)">{{item.name}}</view>
		</view>
		<!-- 列表 -->
		<template v-if="listData.length > 0">
			<block v-for="(item, index) in listData" :key="index">
				<common-list :item="item" :index="index"></common-list>
				<divider></divider>
			</block>
		</template>
		<template v-else>
			<no-thing></no-thing>
		</template>

		<!-- 上拉加载 -->
		<load-more :loadmore="loadtext"></load-more>

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

	import topicInfo from '@/components/topic-detail/topic-info.vue';
	import commonList from '@/components/common/common-list.vue';
	import noThing from '@/components/common/no-thing.vue';
	import loadMore from '@/components/common/load-more.vue';
	export default {
		data() {
			return {
				info: {
					cover: "/static/bgimg/3.jpg",
					title: "话题名称",
					desc: "话题描述",
					today_count: 0,
					news_count: 10
				},
				hotList: [{
					title: "[新人必读] uni-app实战第二季商城类项目开发"
				}, {
					title: "[新人必读] uni-app实战第三季商城类项目开发"
				}],
				tabIndex: 0,
				tabBars: [{
					name: "默认"
				}, {
					name: "最新"
				}],
				// 默认列表
				list1: [],
				loadtext1: "上拉加载更多",
				// 最新列表
				list2: [],
				loadtext2: "上拉加载更多"
			}
		},
		onLoad(e) {
			if (e.detail) {
				let res = JSON.parse(e.detail)
			}
			this.list1 = demo
		},
		components: {
			topicInfo,
			commonList,
			noThing,
			loadMore
		},
		computed: {
			// 当前列表数据
			listData() {
				return this.tabIndex === 0 ? this.list1 : this.list2
			},
			// 当前上拉加载
			loadtext() {
				return this.tabIndex === 0 ? this.loadtext1 : this.loadtext2
			}
		},
		// 触底事件
		onReachBottom() {
			this.loadMore()
		},
		methods: {
			// tab 切换
			changeTab(index) {
				this.tabIndex = index;
			},
			// 上拉加载更多事件
			loadMore() {
				// 拿到当前的列表
				let index = this.tabIndex
				// 判断是否处于可加载状态
				if(this.loadtext !== '上拉加载更多') return;
				// 设置上拉加载状态处于加载中
				// this['loadtext' + (this.tabIndex + 1)] = '加载中...'
				console.log('ok')
				console.log(this['loadtext1'])
				// 请求数据
				setTimeout(function() {
					
				}, 2000);
			}
		}
	}
</script>

<style>
	.filter {
		filter: blur(10px);
	}
</style>
