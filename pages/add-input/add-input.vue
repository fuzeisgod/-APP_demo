<template>
	<view>
		<!-- 自定义导航 -->
		<uni-nav-bar left-icon="back" :statusBar="true" :border="false" @click-left="back">
			<view class="flex align-center justify-center w-100">
				所有人可见
				<text class="iconfont icon-shezhi"></text>
			</view>
		</uni-nav-bar>
		<!-- 文本域 -->
		<textarea v-model="content" placeholder="说一句话吧~" class="uni-textarea p-2" />

		<!-- 多图上传 -->
		<upload-image :show="show" ref="uploadImage" @change="changImage" :list="imageList"></upload-image>

		<!-- 底部操作条 -->
		<view class="fixed-bottom bg-white flex align-center" style="height: 85rpx;">
			<view class="iconfont icon-caidan footer-btn animated" hover-class="jello"></view>
			<view class="iconfont icon-huati footer-btn animated" hover-class="jello"></view>
			<view class="iconfont icon-tupian footer-btn animated" hover-class="jello" @click="iconClickEvent('uploadImage')"></view>

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
			imageList: [],
			// 是否已经弹出提示框
			showBack: false
		};
	},
	methods: {
		// 选中图片
		changImage(e) {
			this.imageList = e;
		},
		back() {
			uni.navigateBack({
				delta: 1
			})
		},
		// 保存草稿
		store(){
			// 保存为本地存储
			uni.setStorage({
				key:'add-input',
				data:JSON.stringify({
					content:this.content,
					imageList:this.imageList
				})
			})
		},
		// 底部图表点击事件
		iconClickEvent(e){
			switch (e){
				case 'uploadImage':
				// 通过 this.$refs 获取到组件实例，来访问子组件实例上的数据和方法
				this.$refs.uploadImage.chooseImage()
					break;
			}
		}
	},
	computed:{
		show(){
			return this.imageList.length > 0
		}
	},
	// 监听返回
	// 触发条件：1.android实体返回键 2.顶部导航栏（原生）左边的返回按钮 3.返回API，即uni.navigateBack()
	// 返回true时不执行默认的返回事件
	onBackPress(){
		console.log('触发了onBackPress生命周期函数！')
		// showBack为false可以弹出提示框，弹出后手动设置showBack为true,当选择完调用api返回方法时再次触发生命周期函数，不进入return true的判断条件中，直接返回
		if((this.content !== '' || this.imageList.length > 0) && !this.showBack) {
			uni.showModal({
				content: '是否要保存为草稿?',
				showCancel: true,
				cancelText: '不保存',
				confirmText: '保存',
				success: res => {
					if(res.confirm){
						this.store()
					}else if(res.cancel){
						// 点击取消，清除缓存
						uni.removeStorage({
							key:'add-input'
						})
					}
					// 手动执行返回，此api方法再次触发onBackPress
					uni.navigateBack({
						delta: 1
					})
				}
			});
			this.showBack = true
			// 阻止返回的默认行为,确保弹出提示框的时候页面不会直接退出了
			return true
		}
	},
	// 页面加载
	onLoad(){
		uni.getStorage({
			key:'add-input',
			success:res=>{
				if(res.data){
					let result = JSON.parse(res.data)
					this.content = result.content
					this.imageList = result.imageList
				}
			}
		})
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
