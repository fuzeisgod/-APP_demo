<template>
	<view>
		<!-- <view hover-class="view-box-hover rubberBand" hover-stay-time="800" class="view-box animated">第一个view</view> -->

		<!-- <text :selectable="true">这是text \n 这是text \n 这是text \n 这是text</text> -->
		
		<view class="view-box" id="view2"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style>
	.view-box {
		width: 200rpx;
		height: 200rpx;
		background: #007AFF;
		color: #FFFFFF;
		margin: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.view-box-hover {
		background: red;
	}
	
	#view2{
		background: yellow;
		width: 375rpx;
	}
</style>
