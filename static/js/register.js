import "../css/register.less";
import Vue from "vue";
import vueRouter from "vue-router";
import lfbTopbar from "../components/public/lfb_topBar/lfb_topBar.vue";
import login from "../components/login.vue";
import register from "../components/register.vue";
import forget from "../components/forget.vue";

Vue.use(vueRouter);

const routes = [{
		path:'/',
		redirect:'/login'
	},{
		path:'/login',
		component:login,
		meta:{
			title:"登录",
		}
	},{
		path:'/register',
		component:register,
		meta:{
			title:"注册"
		}
	},{
		path:'/forget',
		component:forget,
		meta:{
			title:"忘记密码"
		}
	}]

const router = new vueRouter({
	routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

const vm = new Vue({
	el:"#wrap",
	components:{
		lfbTopbar
	},
	router
})