<template>
	<view>

		<!-- 顶部选项卡 -->
		<scroll-view scroll-x :scroll-into-view="scrollInto" scroll-with-animation class="scroll-row" style="height: 100rpx;">
			<view class="scroll-row-item px-3 py-2 font-md" v-for="(item,index) in tabBars" :key="index" :id="'tab'+index"
			 :class="tabIndex === index?'text-main font-lg font-weight-bold':''" @click="changeTab(index)">{{item.name}}</view>
		</scroll-view>

		<swiper :duration="150" :current="tabIndex" @change="onChangeTab" :style="'height:' + scrollH + 'px;'">
			<swiper-item v-for="(item, index) in newsList" :key="index">
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'" @scrolltolower="loadmore(index)">

					<template v-if="item.list.length > 0">
						<!-- 列表 -->
						<block v-for="(item2,index2) in item.list" :key="index2">
							<common-list :item="item2" :index="index2" @follow="follow" @doSupport="doSupport"></common-list>
							<!-- 全局分割线 -->
							<divider></divider>
						</block>
						<!-- 上拉加载 -->
						<load-more :loadmore="item.loadmore"></load-more>
					</template>
					<template v-else>
						<!-- 无数据 -->
						<no-thing></no-thing>
					</template>


				</scroll-view>
			</swiper-item>
		</swiper>


	</view>
</template>

<script>
	const demo = [{
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
	}];


	// '@/' 或 无'/'，直接从文件夹名字开始 -- 代表从根目录开始 
	import commonList from '@/components/common/common-list.vue';
	import loadMore from '@/components/common/load-more.vue';
	export default {
		data() {
			return {
				// 列表高度
				scrollH: 600,
				tabIndex: 0,
				scrollInto: "",
				tabBars: [{
					name: "关注"
				}, {
					name: "推荐"
				}, {
					name: "体育"
				}, {
					name: "热点"
				}, {
					name: "财经"
				}, {
					name: "娱乐"
				}, {
					name: "军事"
				}, {
					name: "历史"
				}, {
					name: "本地"
				}],
				newsList: []
			}
		},
		// 监听点击导航栏搜索框
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search?type=post'
			});
		},
		// 监听导航按钮点击事件
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../add-input/add-input'
			});
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
				// 拿到当前的选项卡对应的list
				let list = this.newsList[this.tabIndex].list
				// 拿到当前对象
				let item = list[e.index]
				let msg = e.type === 'support' ? '顶' : '踩'
				// 之前没有操作过
				if (item.support.type === '') {
					item.support[e.type + '_count']++;
				} else if (item.support.type === 'support' && e.type === 'unsupport') { // 之前顶了
					// 顶 - 1
					if (item.support.support_count > 0) {
						item.support.support_count--;
					}
					// 踩 + 1
					item.support.unsupport_count++;
				} else if (item.support.type === 'unsupport' && e.type === 'support') { // 之前踩了
					// 踩 - 1
					if (item.support.unsupport_count > 0) {
						item.support.unsupport_count--;
					}
					// 顶 + 1
					item.support.support_count++;
				}
				item.support.type = e.type
				uni.showToast({
					title: msg + '成功'
				})
			},
			// 切换选项
			changeTab(index) {
				if (this.tabIndex === index) {
					return;
				}
				this.tabIndex = index
				// 滚动到指定元素
				this.scrollInto = 'tab' + index;
			},
			// 监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			// 获取数据
			getData() {
				var arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					// 生成列表模板
					let obj = {
						// 1.上拉加载更多 2.加载中... 3.没有更多了
						loadmore: "上拉加载更多",
						list: []
					}
					if (i < 2) {
						obj.list = demo
					}
					arr.push(obj)
				}
				this.newsList = arr
			},
			// 上拉加载更多
			loadmore(index) {
				// 拿到当前列表
				let item = this.newsList[index]
				// 判断是否处于可加载状态（上拉加载更多）
				if (item.loadmore !== '上拉加载更多') return;
				// 修改当前列表加载状态
				item.loadmore = '加载中...'
				console.log('上拉加载')
				// 模拟数据请求
				setTimeout(() => {
					// 加载数据
					item.list = [...item.list, ...item.list]
					// 恢复加载状态
					item.loadmore = '上拉加载更多'
				}, 5000);
			}
		},
		components: {
			commonList,
			loadMore
		},
		onLoad() {
			console.log(this.$store.state.loginStatus)
			uni.getSystemInfo({
				success: res => {
					// px
					this.scrollH = res.windowHeight - uni.upx2px(100)
				}
			})
			// 根据选项生成列表
			this.getData();
		}
	}
</script>

<style>

</style>
