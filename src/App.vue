<template>
  <div id="app"> 
    <router-view/>
	<tabbar></tabbar>
  </div>
</template>

<script>
	import tabbar from 'components/common/tabbar/Tabbar.vue'
	export default{
		name:'app',
		components:{
			tabbar
		}
	}
</script>

<style>

</style>
