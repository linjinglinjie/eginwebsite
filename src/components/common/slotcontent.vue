<template>
  <div>
  	<vhead></vhead>
	<div id="content">
		<div class="nr2">
			<slot name="mainContent"></slot>
			<div class="clearfix"></div>
		</div>
	</div>
  	<vfooter></vfooter>
  </div>
</template>

<script>
	import vhead from '@/components/common/head'
	import vfooter from '@/components/common/footer'
export default {
  name: 'slotcontent',
  data () {
    return {
    }
  },
	components: {
		vhead,
		vfooter
	},
}
</script>

<style scoped>

</style>
