import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
const index = resolve => require(['@/components/index'], resolve)
const aboutus = resolve => require(['@/components/aboutus'], resolve)
//const company = resolve => require(['@/components/company'], resolve)
//const CenterStatistics = resolve => require(['@/components/CenterStatistics'], resolve)
//const projectList = resolve => require(['@/components/projectList'], resolve)
//const lookflie = resolve => require(['@/components/common/lookflie'], resolve)
import { store } from '../store/index.js'
Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/aboutus',
			name: 'aboutus',
			component: aboutus
		},
//		{
//			path: '/company',
//			name: 'company',
//			component: company
//		},
//		{
//			path: '/CenterStatistics',
//			name: 'CenterStatistics',
//			component: CenterStatistics
//		},
//		{
//			path: '/projectList',
//			name: 'projectList',
//			component: projectList
//		},
//		{
//			path: '/lookflie',
//			name: 'lookflie',
//			component: lookflie
//		},
		{
			path: '*', // 错误路由
			redirect: '/' //重定向
		}
	]
})
/*router.beforeEach((to, from, next) => {
	if(to.path != '/login') {
		if(store.getters.getUser) { // 判断当前的token是否存在
			next();
		} else {
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			})
		}
		next()
	} else {
		next()
	}

})*/

export default router;
axios.interceptors.request.use(
config => {
    if (store.getters.getUserInfor) {
      // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      config.headers['token'] = store.getters.getUserInfor
    }
    // 设置跨域
    // config.headers['Access-Control-Allow-Origin'] = '*'
    // config.headers['Access-Control-Allow-Methods'] = '*'

    return config
},
err => {
    return Promise.reject(err)
}
)

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
response => {
	if (response.data == null || response.data == undefined ) {
      store.commit('saveUser', null)
      store.commit('UserInfors', null)
      router.replace({
        path: '/',
        query: { redirect: router.currentRoute.fullPath } //登录成功后跳入浏览的当前页面
      })
    }
    return response
},
error => {
	
	
	
	console.log(error)
    /*if (error.response) {
          	console.log(error.response.status)
              switch (error.response.status) {
                  case 500:
                      // 这里写清除token的代码
                      this.$store.commit('saveUser', null)
                      router.replace({
                          path: '/login',
                          query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
                      })
              }
          }*/
    if (error.response.status != 200) {
      if (error.response.status == 401) {
      	alert('Token过期，请关闭页面重新打开统计平台！')
      	router.replace({
	        path: '/',
	        query: { redirect: router.currentRoute.fullPath } //登录成功后跳入浏览的当前页面
	    })
      }else {
      	 alert('加载失败，请重新加载！')
      }
      /*store.commit('saveUser', null)
      store.commit('UserInfors', null)
      router.replace({
        path: '/login',
        query: { redirect: router.currentRoute.fullPath } //登录成功后跳入浏览的当前页面
      })*/
    }
    return Promise.reject(error)
}
)
