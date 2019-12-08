<template>
	<view>
		<template v-if="searchList.length === 0">
			<!-- 搜索历史 -->
			<view class="py-2 font-md px-2">搜索历史</view>
			<view class="flex flex-wrap">
				<view class="border rounded font mx-2 my-1 px-2" v-for="(item, index) in list" :key="index" hover-class="bg-light" @click="clickSearchHistory(item)">
					{{ item }}
				</view>
			</view>
		</template>
		<template v-else>
			<!-- 数据列表 -->
			<block v-for="(item, index) in searchList" :key="index">
				<template v-if="type === 'post'">
					<!-- 帖子 -->
					<common-list :item="item" :index="index"></common-list>
				</template>
				<template v-else-if="type === 'topic'">
					<!-- 话题 -->
					<topic-list :item="item" :index="index"></topic-list>
				</template>
				<template v-else-if="type === 'user'">
					<!-- 用户 -->
					<user-list :item="item" :index="index"></user-list>
				</template>
			</block>
		</template>
	</view>
</template>

<script>
// 测试数据
const demo1 = [
	{
		username: '昵称1',
		userpic: '../../static/default.jpg',
		newstime: '2019-10-20 下午04:30',
		isFollow: false,
		title: '我是标题',
		titlepic: '../../static/bgimg/1.jpg',
		support: {
			// 顶操作 type 为 "support",
			// 踩操作 type 为 "unsupport",
			// 未操作 type 为 ""
			type: '',
			support_count: 0,
			unsupport_count: 0
		},
		comment_count: 2,
		share_num: 2
	},
	{
		username: '昵称2',
		userpic: '../../static/default.jpg',
		newstime: '2019-10-20 下午04:30',
		isFollow: false,
		title: '我是标题',
		titlepic: '',
		support: {
			type: '',
			support_count: 1,
			unsupport_count: 2
		},
		comment_count: 2,
		share_num: 2
	}
];
const demo2 = [
	{
		cover: '/static/bgimg/3.jpg',
		title: '话题名称',
		desc: '话题描述',
		today_count: 0,
		news_count: 10
	},
	{
		cover: '/static/bgimg/3.jpg',
		title: '话题名称',
		desc: '话题描述',
		today_count: 0,
		news_count: 10
	},
	{
		cover: '/static/bgimg/3.jpg',
		title: '话题名称',
		desc: '话题描述',
		today_count: 0,
		news_count: 10
	},
	{
		cover: '/static/bgimg/3.jpg',
		title: '话题名称',
		desc: '话题描述',
		today_count: 0,
		news_count: 10
	},
	{
		cover: '/static/bgimg/3.jpg',
		title: '话题名称',
		desc: '话题描述',
		today_count: 0,
		news_count: 10
	},
	{
		cover: '/static/bgimg/3.jpg',
		title: '话题名称',
		desc: '话题描述',
		today_count: 0,
		news_count: 10
	}
];
const demo3 = [
	{
		avater: '/static/default.jpg',
		username: '昵称',
		sex: 1, // 0 未知  1 女性  2 男性
		age: 24,
		isFollow: true
	},
	{
		avater: '/static/default.jpg',
		username: '昵称',
		sex: 2, // 0 未知  1 女性  2 男性
		age: 24,
		isFollow: false
	}
];
import commonList from '@/components/common/common-list.vue';
import topicList from '@/components/news/topic-list.vue';
import userList from '@/components/user-list/user-list.vue';
export default {
	data() {
		return {
			searchText: '',
			list: ['uni-app第二季商场类实战开发', 'uni-app第三季仿微信类实战开发', '系列教程', '实战教程'],
			// 搜索结果
			searchList: [],
			// 当前搜索类型
			type: 'post'
		};
	},
	// 监听导航输入
	onNavigationBarSearchInputChanged(e) {
		this.searchText = e.text;
	},
	// 监听点击导航搜索按钮
	onNavigationBarButtonTap(e) {
		if (e.index === 0) {
			this.searchEvent();
		}
	},
	onLoad(e) {
		if (e.type) {
			this.type = e.type;
		}
		let pageTitle = '帖子';
		switch (this.type) {
			case 'post':
				pageTitle = '帖子';
				break;
			case 'topic':
				pageTitle = '话题';
				break;
			case 'user':
				pageTitle = '用户';
				break;
		}
		// 修改搜索占位
		// #ifdef APP-PLUS
		let currentWebview = this.$mp.page.$getAppWebview();
		let tn = currentWebview.getStyle().titleNView;
		tn.searchInput.placeholder = pageTitle;
		currentWebview.setStyle({
			titleNView: tn
		});
		// #endif
	},
	methods: {
		// 点击搜索历史
		clickSearchHistory(text) {
			this.searchText = text;
			this.searchEvent();
		},
		// 搜索事件
		searchEvent() {
			// 收起键盘(百度小程序不兼容)
			uni.hideKeyboard();
			// 处于loading状态
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			// 请求搜索
			setTimeout(() => {
				switch (this.type) {
					case 'post':
						this.searchList = demo1;
						break;
					case 'topic':
						this.searchList = demo2;
						break;
					case 'user':
						this.searchList = demo3;
						break;
				}
				// 隐藏loading
				uni.hideLoading();
			}, 2000);
		}
	},
	components: {
		commonList,
		topicList,
		userList
	}
};
</script>

<style></style>
