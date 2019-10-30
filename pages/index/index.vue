<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<common-list :item="item" :index="index"></common-list>
		</block>
	</view>
</template>

<script>
	// '@/' 或 无'/'，直接从文件夹名字开始 -- 代表从根目录开始 
	import commonList from '@/components/common/common-list.vue';
	export default {
		data() {
			return {
				list: [{
					username: "昵称1",
					userpic: "../../static/default.jpg",
					newstime: "2019-10-20 下午04:30",
					isFollow: false,
					title: "我是标题",
					titlepic: "../../static/bgimg/1.jpg",
					support: {
						type: "support",
						support_count: 1,
						unsupport_count: 2
					},
					comment_count: 2,
					share_num: 2
				}, {
					username: "昵称2",
					userpic: "../../static/default.jpg",
					newstime: "2019-10-20 下午04:30",
					isFollow: false,
					title: "我是标题",
					titlepic: "../../static/bgimg/1.jpg",
					support: {
						type: "support",
						support_count: 1,
						unsupport_count: 2
					},
					comment_count: 2,
					share_num: 2
				}]
			}
		},
		components: {
			commonList
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
