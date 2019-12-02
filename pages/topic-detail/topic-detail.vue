<template>
	<view>
		<topic-info :info="info"></topic-info>
		<divider></divider>
	</view>
</template>

<script>
	import topicInfo from '@/components/topic-detail/topic-info.vue';
	export default {
		data() {
			return {
				info: {
					cover: "/static/bgimg/3.jpg",
					title: "话题名称",
					desc: "话题描述",
					today_count: 0,
					news_count: 10
				}
			}
		},
		onLoad(e) {
			if (e.detail) {
				let res = JSON.parse(e.detail)
				console.log(res)
			}
		},
		components:{
			topicInfo
		},
		methods: {

		}
	}
</script>

<style>
	.filter {
		filter: blur(10px);
	}
</style>
