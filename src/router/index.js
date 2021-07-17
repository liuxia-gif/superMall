import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		redirect:()=>import('@/views/home/Home.vue')
	},
	{
		path:'/home',
		component:()=>import('@/views/home/Home.vue')
	},
	{
		path:'/category',
		component:()=>import('@/views/category/Category.vue')
	},
	{
		path:'/car',
		component:()=>import('@/views/car/Car.vue')
	},
	{
		path:'/profile',
		component:()=>import('@/views/profile/Profile.vue')
	}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
