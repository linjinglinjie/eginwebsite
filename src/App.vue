<template>
  <div id="app">
  	<!--<vhead></vhead>-->
    <transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
  </div>
</template>

<script>
/*import vhead from './components/common/head'
import { baseUrl } from '@/assets/plugins/constanturl'
//请求后台数据之前转换入参
import { transformRequest } from '@/assets/plugins/transformRequest'*/
import '@/assets/fonts/iconfont.css';
import '@/assets/style/common.css';
export default {
  name: 'app',
  components: {
  	//vhead
  },
  created() {
  	
	},
	computed: {
			
	},
	watch: {

	},
	mounted() {
			
	},
	methods: {
	 	
	}
}
</script>
<style>
  #app {
  	
  }
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .2s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>