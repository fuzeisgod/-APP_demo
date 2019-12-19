<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 检测更新
			this.$U.update()
			// 网络监听
			// 初始化数据
			this.$U.onNetwork()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
			// 音乐、视频停止播放
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 官方css库 */
	@import "./common/uni.css";
	/* 自定义图标库 */
	@import "./common/iconfont.css";
	/* 动画库 */
	@import "./common/animate.css";
	/* 自定义css库 */
	@import "./common/my.css";
	/* 全局样式 */
	@import "./common/common.css";
</style>
