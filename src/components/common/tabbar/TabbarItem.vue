<template>
	<div class="tabbar-item" @click="itemClick()">
		<div v-if="isActive"><slot name="tabbar-img"></slot></div>
		<div v-else><slot name="tabbar-img-active"></slot></div>
		<div :style="Activestyle"><slot name="tabbar-text"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'TabbarItem',
		data(){
			return{
				// isActive:true
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)
			},
			Activestyle(){
				return this.isActive?{}:{color:this.activeColor}
			}
		},
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'#2f3691'
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.path)
			}
		}
		
		
	}
</script>

<style>
	.tabbar-item{
		flex: 1;
		text-align: center;
	}
	.tabbar-item img{
		height:24px;
		width: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
/* 	.active{
		color: ;
	} */
</style>
