<template>
	<view>
		<!-- 自定义导航 -->
		<uni-nav-bar left-icon="back" :statusBar="true" :border="false">
			<view class="flex align-center justify-center w-100">
				所有人可见
				<text class="iconfont icon-shezhi"></text>
			</view>
		</uni-nav-bar>
		<!-- 文本域 -->
		<textarea v-model="content" placeholder="说一句话吧~" class="uni-textarea p-2" />

		<!-- 多图上传 -->
		<upload-image @choose="choose"></upload-image>

		<!-- 底部操作条 -->
		<view class="fixed-bottom bg-white flex align-center" style="height: 85rpx;">
			<view class="iconfont icon-caidan footer-btn animated" hover-class="jello"></view>
			<view class="iconfont icon-huati footer-btn animated" hover-class="jello"></view>
			<view class="iconfont icon-tupian footer-btn animated" hover-class="jello"></view>

			<view class="bg-main text-white ml-auto flex justify-center align-center rounded mr-2 animated" hover-class="jello" style="width: 140rpx;height: 60rpx;">发送</view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
import uploadImage from '@/components/common/upload-image.vue';
export default {
	components: {
		uniNavBar,
		uploadImage
	},
	data() {
		return {
			content: '',
			imageList: []
		};
	},
	methods: {
		// 选中图片
		choose(e) {
			this.imageList = e;
		}
	}
};
</script>

<style>
.footer-btn {
	width: 86rpx;
	height: 86rpx;
	display: flex;
	justify-content: center;
	align-content: center;
	font-size: 50rpx;
}
</style>
