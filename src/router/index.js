import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const CateGory = () =>
  import ('../views/category/CateGory')

const Home = () =>
  import ('../views/home/Home')

const ProFile = () =>
  import ('../views/profile/ProFile')

const ShopCart = () =>
  import ('../views/shopcart/ShopCart')


const routes = [{
    path: '',
    redirect: '/home'

  },
  {
    path: '/category',
    component: CateGory
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: ProFile
  },
  {
    path: '/shopcart',
    component: ShopCart
  }
]

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes

})

export default router