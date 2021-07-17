<template>
	<div id="Tabbar">
		<tabbaritem path="/home">
			<img slot="tabbar-img" src="~assets/img/tabbar/home.png"/>
			<img slot="tabbar-img-active" src="~assets/img/tabbar/home-active.png"/>
			<div slot="tabbar-text">首页</div>
		</tabbaritem>
		<tabbaritem path='/category'>
			<img slot="tabbar-img" src="~assets/img/tabbar/category.png" />
			<img slot="tabbar-img-active" src="~assets/img/tabbar/category-active.png"/>
			<div slot="tabbar-text">分类</div>
		</tabbaritem>
		<tabbaritem path="/car">
			<img slot="tabbar-img" src="~assets/img/tabbar/car.png" />
			<img slot="tabbar-img-active" src="~assets/img/tabbar/car-active.png"/>
			<div slot="tabbar-text">购物车</div>
		</tabbaritem>
		<tabbaritem path="/profile">
			<img slot="tabbar-img" src="~assets/img/tabbar/mine.png" />
			<img slot="tabbar-img-active" src="~assets/img/tabbar/mine-active.png"/>
			<div slot="tabbar-text">我的</div>
		</tabbaritem>
	</div>
</template>

<script>
	import tabbaritem from './TabbarItem.vue'
	export default{
		name:'Tabbar',
		components:{
			tabbaritem
		}
	}
</script>

<style>
	#Tabbar{
		display: flex;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		height: 49px;
		background-color: #f0f0f0;
		font-size: 14px;
	}
</style>
