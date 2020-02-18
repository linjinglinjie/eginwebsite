<template>
	<div>
		<vhead></vhead>
		<div id="content">
			<div class="nr">
				<businessarea></businessarea>
				<news></news>
			</div>
		</div>
		<ourclient></ourclient>
		<vfooter></vfooter>
	</div>
</template>
<script>
	import vhead from '@/components/common/head'
	import vfooter from '@/components/common/footer'
	import businessarea from '@/components/businessarea'
	import news from '@/components/news'
	import ourclient from '@/components/ourclient'
//	import { baseUrl } from '@/assets/plugins/constanturl'
//	import { format } from '@/assets/plugins/format'
//	//请求后台数据之前转换入参
//	import { transformRequest } from '@/assets/plugins/transformRequest'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			vhead,
			businessarea,
			news,
			ourclient,
			vfooter
		},
		created() {
			
		},
		watch: {
			
		},
		mounted(){
		},
		computed: {
			
		},
		watch: {

		},
		methods: {
			
		}
		
	}
</script>
<style scoped>
	
</style>
