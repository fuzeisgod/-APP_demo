<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y="true" style="position: absolute;left: 0;top: 0;right: 0;bottom: 100rpx;" :scroll-into-view="scrollInto" scroll-with-animation>
			<block v-for="(item, index) in list" :key="index">
				<view :id="'chat' + index"><user-chat-list :item="item" :index="index"></user-chat-list></view>
			</block>
		</scroll-view>

		<!-- 底部操作条 -->
		<view style="height: 100rpx;" class="fixed-bottom flex align-center border-top bg-white">
			<input type="text" v-model="content" placeholder="文明发言" :adjust-position="false" class="flex-1 rounded bg-light ml-2 py-1 px-1" @confirm="submit" />
			<view class="iconfont icon-fabu flex justify-center align-center font-lg" style="width: 100rpx;" hover-class="animated jello text-main" @click="submit"></view>
		</view>
	</view>
</template>

<script>
import userChatList from '@/components/user-chat/user-chat-list.vue';

export default {
	data() {
		return {
			list: [
				{
					user_id: 2,
					avater: '/static/default.jpg',
					username: '昵称',
					data: '你好啊',
					type: 'text', // image, video, audio
					create_time: '12:33'
				},
				{
					user_id: 1,
					avater: '/static/default.jpg',
					username: '昵称',
					data: '你好啊',
					type: 'text', // image, video, audio
					create_time: '12:33'
				},
				{
					user_id: 2,
					avater: '/static/default.jpg',
					username: '昵称',
					data: '你好啊',
					type: 'text', // image, video, audio
					create_time: '12:33'
				},
				{
					user_id: 1,
					avater: '/static/default.jpg',
					username: '昵称',
					data: '你好啊',
					type: 'text', // image, video, audio
					create_time: '12:33'
				},
				{
					user_id: 2,
					avater: '/static/default.jpg',
					username: '昵称',
					data: '你好啊',
					type: 'text', // image, video, audio
					create_time: '12:33'
				},
				{
					user_id: 1,
					avater: '/static/default.jpg',
					username: '昵称',
					data: '你好啊',
					type: 'text', // image, video, audio
					create_time: '12:33'
				},
				{
					user_id: 2,
					avater: '/static/default.jpg',
					username: '昵称',
					data: '你好啊',
					type: 'text', // image, video, audio
					create_time: '12:33'
				},
				{
					user_id: 1,
					avater: '/static/default.jpg',
					username: '昵称',
					data: '你好啊',
					type: 'text', // image, video, audio
					create_time: '12:33'
				}
			],
			content: '',
			scrollInto: ''
		};
	},
	components: {
		userChatList
	},
	onLoad() {
		this.pageToBottom();
	},
	methods: {
		// 发送
		submit() {
			let obj = {
				user_id: 1,
				avater: '/static/default.jpg',
				username: '昵称',
				data: this.content,
				type: 'text',
				create_time: new Date().getTime()
			};
			if (this.content === '') {
				return uni.showToast({
					title: '消息不能为空',
					icon: 'none'
				});
			}
			this.list.push(obj);
			// 清空输入框
			this.content = '';
			// 滚动到底部
			this.pageToBottom();
		},
		// 滚动到底部
		pageToBottom() {
			let lastIndex = this.list.length - 1;
			if (lastIndex < 0) return;
			this.scrollInto = 'chat' + lastIndex;
		}
	}
};
</script>

<style></style>
