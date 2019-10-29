<template>
	<view>

		<!-- <view class="box" :class="['bor','fs']">box</view> -->
		<!-- <view class="box" :class="[class1,class2]">box</view> -->
		<!-- <view class="box" :class="[age>10?class1:'',sex=='男'?class2:'']">box</view> -->
		<!-- <view class="box" :class="{'bor':isTrue}">box</view> -->
		<!-- <view class="box" :style="{'color':Color,'font-size':myFontsize}">box</view> -->

		<!-- <template>
			<view>
				<template v-if="isTrue1">
					<view class="box">box</view>
				</template>
				<template v-else>
					<view class="box bor">box</view>
				</template>
			</view>
		</template>

		<template>
			<view>
				<template v-if="isTrue2">
					<view class="box">box</view>
				</template>
				<template v-else>
					<view class="box fs">box</view>
				</template>
			</view>
		</template> -->

		<view class="font">{{name}}</view>
		
		<button type="primary" @tap="change">button</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				class1: 'bor',
				class2: 'fs',
				age: 10,
				sex: '男',
				isTrue1: false,
				isTrue2: false,
				Color: 'red',
				myFontsize: '80rpx',
				name: "我是一个名字"
			}
		},
		methods: {
			change(){
				this.name = '被修改了'
			}
		},
		watch:{
			// 当 data 中 的 name 发生变化，执行以下函数
			name(val){
				console.log(val)
			}
		}
	}
</script>

<style>
	.box {
		background: #09BB07;
		color: #FFFFFF;
		width: 350rpx;
		height: 350rpx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 50rpx;
	}

	.bor {
		border: 10rpx solid #007AFF;
	}

	.fs {
		font-size: 80rpx;
		color: red;
	}

	.font {
		font-size: 50rpx;
	}
</style>
