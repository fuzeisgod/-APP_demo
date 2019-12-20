import Vue from 'vue'
import App from './App'
import store from './store/index.js';

Vue.config.productionTip = false

// 引入全局组件
import divider from "./components/common/divider.vue"
Vue.component('divider', divider)
import noThing from "./components/common/no-thing.vue"
Vue.component('no-thing', noThing)

// 引入配置文件
import $C from './common/config.js';
Vue.prototype.$C = $C

// 挂载助手函数库
import $U from './common/util.js';
Vue.prototype.$U = $U

// 权限验证操作
Vue.prototype.checkAuth = (callback) => {
	// 权限验证
	if (!store.state.loginStatus) {
		uni.showToast({
			title: '请先登录'
		});
		// 微信小程序路径不识别.vue
		return uni.navigateTo({
			url: "/pages/login/login"
		});
	}
	callback()
}

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
