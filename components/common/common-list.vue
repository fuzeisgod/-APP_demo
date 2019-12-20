<template>
	<!-- 列表样式 -->
	<view class="p-2 animated fast fadeIn">
		<!-- 头像昵称 | 关注按钮 -->
		<view class="flex align-center justify-between">
			<view class="flex align-center">
				<!-- 头像 -->
				<image :src="item.userpic" class="rounded-circle mr-2" style="width: 65rpx;height: 65rpx;" lazy-load @click="openSpace"></image>
				<!-- 昵称发布时间 -->
				<view class="">
					<view class="font" style="line-height: 1.5;">{{item.username}}</view>
					<text class="font-sm text-light-muted" style="line-height: 1.5;">{{item.newstime}}</text>
				</view>
			</view>
			<!-- 按钮 -->
			<view class="flex align-center justify-center rounded bg-main text-white animated faster" hover-class="jello" style="width: 90rpx;height: 50rpx;"
			 @click="follow" v-if="!item.isFollow">
				关注
			</view>
		</view>
		<!-- 标题 -->
		<view class="font my-1" @click="openDetail">{{item.title}}</view>
		<!-- 帖子详情(如果插槽有值，则会覆盖原来插槽内的代码段) -->
		<slot>
			<!-- 图片 -->
			<image v-if="item.titlepic" :src="item.titlepic" class="rounded w-100" style="height: 350rpx;" mode="scaleToFill"
			 @click="openDetail"></image>
		</slot>
		<!-- 图标按钮 -->
		<view class="flex align-center">
			<!-- 顶 -->
			<view class="flex align-center justify-center flex-1 animated faster" hover-class="jello text-main" @click="doSupport('support')"
			 :class="item.support.type === 'support' ? 'support-active' : ''">
				<text class="iconfont icon-dianzan2 mr-2"></text>
				<text>{{item.support.support_count > 0 ? item.support.support_count : '支持'}}</text>
			</view>
			<!-- 踩 -->
			<view class="flex align-center justify-center flex-1 animated faster" hover-class="jello text-main" @click="doSupport('unsupport')"
			 :class="item.support.type === 'unsupport' ? 'support-active' : ''">
				<text class=" iconfont icon-cai mr-2"></text>
				<text>{{item.support.unsupport_count > 0 ? item.support.unsupport_count : '反对'}}</text>
			</view>
			<view class="flex align-center justify-center flex-1 animated faster" hover-class="jello text-main" @click="doComment">
				<text class="iconfont icon-pinglun2 mr-2"></text>
				<text>{{item.comment_count > 0 ? item.comment_count : '评论'}}</text>
			</view>
			<view class="flex align-center justify-center flex-1 animated faster" hover-class="jello text-main" @click="doShare">
				<text class="iconfont icon-fenxiang mr-2"></text>
				<text>{{item.share_num > 0 ? item.share_num : '分享'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: {
				type: Number,
				default: -1
			},
			isDetail: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			// 打开个人空间
			openSpace() {
				uni.navigateTo({
					url: '/pages/user-space/user-space'
				});
			},
			// 关注
			follow() {
				this.checkAuth(()=>{
					// 通知父组件触发follow事件
					this.$emit('follow', this.index)
				})		
			},
			// 进入详情页
			openDetail() {
				// 处于详情页中
				if (this.isDetail) return
				uni.navigateTo({
					url: '../../pages/detail/detail?detail=' + JSON.stringify(this.item),
				});
			},
			// 顶踩操作
			doSupport(type) {
				// 通知父组件触发了doSupport事件
				this.$emit('doSupport', {
					type,
					index: this.index
				})
			},
			// 评论
			doComment() {
				if (!this.isDetail) {
					return this.openDetail()
				}
				this.$emit('doComment')
			},
			// 分享
			doShare() {
				if (!this.isDetail) {
					return this.openDetail()
				}
				this.$emit('doShare')
			}
		}
	}
</script>

<style>
	.support-active {
		color: #FF4A6A;
	}
</style>
