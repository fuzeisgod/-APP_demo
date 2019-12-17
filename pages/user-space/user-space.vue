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
			<view class="p-3 border-bottom">
				<view class="font-md">账号信息</view>
				<view class="font">账号年龄：12个月</view>
				<view class="font">账号ID：1</view>
			</view>
			<view class="p-3 border-bottom">
				<view class="font-md">个人信息</view>
				<view class="font">星座：巨蟹座</view>
				<view class="font">职业：IT</view>
				<view class="font">故乡：杭州</view>
				<view class="font">情感：未婚</view>
			</view>
		</template>
		<template v-else>
			<view>帖子/动态</view>
		</template>
		
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
	
	import commonList from '@/components/common/common-list.vue';
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
		components:{
			commonList
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
