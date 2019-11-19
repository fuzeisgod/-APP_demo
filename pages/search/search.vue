<template>
	<view>
		<template v-if="searchList.length === 0">
			<!-- 搜索历史 -->
			<view class="py-2 font-md px-2">搜索历史</view>
			<view class="flex flex-wrap">
				<view class="border rounded font mx-2 my-1 px-2" v-for="(item,index) in list" :key="index" hover-class="bg-light"
				 @click="clickSearchHistory(item)">{{ item }}</view>
			</view>
		</template>
		<template v-else>
			<!-- 数据列表 -->
			<block v-for="(item, index) in searchList" :key="index">
				<common-list :item="item" :index="index"></common-list>
			</block>
		</template>
	</view>
</template>

<script>
	// 测试数据
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
	import commonList from '@/components/common/common-list.vue';
	export default {
		data() {
			return {
				searchText: "",
				list: ['uni-app第二季商场类实战开发', 'uni-app第三季仿微信类实战开发', '系列教程', "实战教程"],
				// 搜索结果
				searchList: []
			}
		},
		// 监听导航输入
		onNavigationBarSearchInputChanged(e) {
			this.searchText = e.text
		},
		// 监听点击导航搜索按钮
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.searchEvent()
			}
		},
		methods: {
			// 点击搜索历史
			clickSearchHistory(text) {
				this.searchText = text
				this.searchEvent()
			},
			// 搜索事件
			searchEvent() {
				// 收起键盘(百度小程序不兼容)
				uni.hideKeyboard()
				// 处于loading状态
				uni.showLoading({
					title: "加载中",
					mask: true
				})
				// 请求搜索
				setTimeout(() => {
					this.searchList = demo
					// 隐藏loading
					uni.hideLoading()
				}, 2000)
			}
		},
		components: {
			commonList
		}
	}
</script>

<style>

</style>
