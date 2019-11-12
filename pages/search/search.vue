<template>
	<view>
		<!-- 搜索历史 -->
		<view class="py-2 font-md px-2">搜索历史</view>
		<view class="flex flex-wrap">
			<view class="border rounded font mx-2 my-1 px-2" v-for="(item,index) in list" :key="index">{{ item }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['uni-app第二季商场类实战开发', 'uni-app第三季仿微信类实战开发', '系列教程']
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
