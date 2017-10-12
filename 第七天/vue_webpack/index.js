//大型项目
//vue+vuex+vue-router+axios+es6+sass+webpack+lodash...
//小型项目
//vue+requirejs+zepto
//框架 图纸
import Vue from "vue";
//库 工具
import _ from "lodash";
import __ from "underscore";
import $ from "jquery";
window.__ = __
//插件 
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from "vue-resource";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from "axios"
window.axios = axios
Vue.prototype.axios = axios
//UI框架
import "weui"//css
import 'swiper/dist/css/swiper.css'
import MuseUI from 'muse-ui'//js
import 'muse-ui/dist/muse-ui.css'//css

//组件
import xheader from "./template/xheader.html"

//必须要通过 Vue.use() 明确地安装路由功能
Vue.use(VueResource);
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(MuseUI)


//引入为注册的组件
import xfooter from "./components/xfooter.vue";
import xhome from "./components/xhome.vue";
import xswiper from "./components/xswiper.vue";
import xweui from "./components/xweui.vue";
import xmuse from "./components/xmuse.vue";
import xdetail from "./components/xdetail.vue";

//配置路由
var router = new VueRouter({
	routes: [{
			path: '/home',
			component: xhome
		},
		{
			path: '/setting',
			component: xfooter
		},
		{
			path: '/swiper',
			component: xswiper
		},
		{
			path: '/weui',
			component: xweui
		},
		{
			path: '/muse',
			component: xmuse
		},
		{
			path: '/detail',
			component: xdetail
		}
	]
})

//配置状态管理
var store = new Vuex.Store({
	//保存数据的状态
	state: {
		name: "laolan",
		leftPopup:false
	},
	mutations: {
		setName: function(state) {
			state.name = "lanmeng"
		}
	}	
})
/*<a href="#/home">home</a>
			<a href="#/setting">setting</a>
			<a href="#/swiper">swiper</a>
			<a href="#/weui">weui</a>
			<a href="#/weui">muse</a>*/
//精确制导
new Vue({
	//el: "#demo",
	data: {
		name: "laoyao"
	},
	template: `
		<div>
			<router-view></router-view>
		</div>
	`,
	router,
	store
}).$mount('#demo')