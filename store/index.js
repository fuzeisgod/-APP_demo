import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		// 登录状态
		loginStatus:false
	},
	mutations:{
		changeLoginStatus(state){
			state.loginStatus = true
		}
	}
})
