<template>
	<view>
		<!-- 帖子详情页详细信息 -->
		<common-list :item="info" isDetail @doComment="doComment" @doShare="doShare" @follow="follow">
			<view class="">
				{{info.content}}
			</view>
			<view>
				<image v-for="(item, index) in info.images" :src="item.url" class="w-100" mode="widthFix" @click="preView(index)"></image>
			</view>
		</common-list>

		<divider></divider>

		<view class="p-2 font-md font-weight-bold">最新评论 3</view>
		<view class="p-2">
			<view class="uni-comment-list">
				<view class="uni-comment-face">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
				</view>
				<view class="uni-comment-body">
					<view class="uni-comment-top">
						<text>小猫咪</text>
					</view>
					<view class="uni-comment-content">支持国产，支持DCloud!</view>
					<view class="uni-comment-date">
						<view>2天前</view>
						<view class="uni-comment-replay-btn">5回复</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 占位 -->
		<view style="height: 100rpx;"></view>
		<bottom-input @submit="submit"></bottom-input>

		<more-share ref="share"></more-share>
	</view>
</template>

<script>
	import commonList from '@/components/common/common-list.vue';
	import bottomInput from '@/components/common/bottom-input.vue';
	import moreShare from '@/components/common/more-share.vue';
	export default {
		data() {
			return {
				// 当前帖子信息
				info: {
					username: "昵称2",
					userpic: "../../static/default.jpg",
					newstime: "2019-10-20 下午04:30",
					isFollow: false,
					title: "我是标题",
					titlepic: "",
					support: {
						type: "support",
						support_count: 1,
						unsupport_count: 2
					},
					comment_count: 2,
					share_num: 2,
					content: "uni-app app开发项目",
					images: [{
						url: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/datapic/4.jpg"
					}, {
						url: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/datapic/5.jpg"
					}]
				}
			}
		},
		onNavigationBarButtonTap() {
			this.$refs.share.open()
		},
		onBackPress() {
			this.$refs.share.close()
		},
		methods: {
			init(data) {
				// 修改标题
				uni.setNavigationBarTitle({
					title: data.title
				})
				// 请求api
			},
			// 点击评论
			doComment() {

			},
			// 点击分享
			doShare() {

			},
			// 关注事件
			follow() {
				this.info.isFollow = true
				uni.showToast({
					title: '关注成功'
				});
			},
			// 顶踩操作
			doSupport(e) {
				// 之前操作过
				if (this.info.support.type === e.type) {
					return uni.showToast({
						title: '你已经操作过了'
					});
				}
				let msg = e.type === 'support' ? '顶' : '踩'
				// 判断之前有没有操作过
				if (this.info.support.type === '') {
					this.info.support[e.type + '_count']++
				} else if (this.info.support.type === 'support' && e.type === 'unsupport') {
					// 顶 -1
					this.info.support.support_count--;
					// 踩 +1
					this.info.support.unsupport_count++;
				} else if (this.info.support.type === 'unsupport' && e.type === 'support') {
					// 顶 +1
					this.info.support.support_count++;
					// 踩 -1
					this.info.support.unsupport_count--;
				}
				this.info.support.type = e.type
				uni.showToast({
					title: msg
				});
			},
			// 预览图片
			preView(index) {
				uni.previewImage({
					urls: this.imagesList,
					current: index
				})
			},
			// 提交评论
			submit(data) {
				console.log(data)
			}
		},
		computed: {
			imagesList() {
				return this.info.images.map(item => item.url)
			}
		},
		components: {
			commonList,
			bottomInput,
			moreShare
		},
		onLoad(e) {
			// 初始化
			if (e.detail) {
				this.init(JSON.parse(e.detail))
			}
		}
	}
</script>

<style>

</style>
