<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y="true" style="position: absolute;left: 0;top: 0;right: 0;bottom: 100rpx;" :scroll-into-view="scrollInto"
		 scroll-with-animation>
			<block v-for="(item, index) in list" :key="index">
				<view :id="'chat' + index">
					<user-chat-list :item="item" :index="index"></user-chat-list>
				</view>
			</block>
		</scroll-view>

		<!-- 底部操作条 -->
		<bottom-input @submit="submit"></bottom-input>
	</view>
</template>

<script>
	import userChatList from '@/components/user-chat/user-chat-list.vue';
	import bottomInput from '@/components/common/bottom-input.vue';
	export default {
		data() {
			return {
				list: [{
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
			userChatList,
			bottomInput
		},
		onLoad() {
			this.pageToBottom();
		},
		methods: {
			// 发送
			submit(data) {
				let obj = {
					user_id: 1,
					avater: '/static/default.jpg',
					username: '昵称',
					data: data,
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
