<template>
	<div>
		<div class="menu">
			<h3>{{titleName}}</h3>
			<ul>
				<li v-for="(item,index) in navList" :key=""><a class="active" href="http://www.envirogene.cn:80/egin/pagehome/jumpAction.action?pagebean.fromPage=5">{{item.name}}</a></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		props:{
			titleName:{
				type: String,
				required: true
			},
			navList:{
				type: Array,
				required: true
			}
		},
		data() {
			return {}
		},
		created() {},
		computed: {},
		watch: {},
		methods: {}
	}
</script>
<style scoped>

</style>
