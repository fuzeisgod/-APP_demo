<template>
	<view>
		
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="scroll-row">
			<view class="scroll-row-item" v-for="i in 20" :key="i">{{i}}</view>
		</scroll-view>
		
		
		<!-- <block v-for="(item,index) in list" :key="index">
			<common-list :item="item" :index="index" @follow="follow" @doSupport="doSupport"></common-list> -->
			<!-- 全局分割线 -->
			<!-- <divider></divider>
		</block> -->
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
						// 顶操作 type 为 "support",
						// 踩操作 type 为 "unsupport",
						// 未操作 type 为 ""
						type: "",
						support_count: 0,
						unsupport_count: 0
					},
					comment_count: 2,
					share_num: 2
				}, {
					username: "昵称2",
					userpic: "../../static/default.jpg",
					newstime: "2019-10-20 下午04:30",
					isFollow: false,
					title: "我是标题",
					titlepic: "",
					support: {
						type: "",
						support_count: 1,
						unsupport_count: 2
					},
					comment_count: 2,
					share_num: 2
				}]
			}
		},
		methods: {
			// 关注
			follow(e) {
				this.list[e].isFollow = true
				uni.showToast({
					title: '关注成功!'
				})
			},
			doSupport(e) {
				// 拿到当前对象
				let item = this.list[e.index]
				let msg = e.type === 'support' ? '顶' : '踩'
				// 之前没有操作过
				if (item.support.type === '') {
					item.support[e.type + '_count']++;
				} else if (item.support.type === 'support' && e.type === 'unsupport') { // 之前顶了
					// 顶 - 1
					if(item.support.support_count > 0){
						item.support.support_count--;
					}
					// 踩 + 1
					item.support.unsupport_count++;
				} else if (item.support.type === 'unsupport' && e.type === 'support') { // 之前踩了
					// 踩 - 1
					if(item.support.unsupport_count > 0){
						item.support.unsupport_count--;
					}
					// 顶 + 1
					item.support.support_count++;
				}
				item.support.type = e.type
				uni.showToast({
					title: msg + '成功'
				})
			}
		},
		components: {
			commonList
		},
		onLoad() {

		}
	}
</script>

<style>

</style>
