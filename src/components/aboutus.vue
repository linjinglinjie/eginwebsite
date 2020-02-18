<template>
  <div>
  	<slotcontent>
			<section slot="mainContent">
				<leftNav :navList="navlist" titleName="关于易景"></leftNav>
			</section>
		</slotcontent>
  </div>
</template>

<script>
	import slotcontent from '@/components/common/slotcontent'
	import leftNav from '@/components/common/leftNav'
export default {
  name: 'HelloWorld',
  data () {
    return {
			navlist:[{
				href:'',
				name:'公司简介'
			},
			{
				href:'',
				name:'服务领域'
			},
			{
				href:'',
				name:'发展历程'
			},
			{
				href:'',
				name:'资质荣誉'
			},
			{
				href:'',
				name:'专利技术'
			},
			{
				href:'',
				name:'专家团队'
			}]
    }
  },
	components: {
		slotcontent,
		leftNav
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
