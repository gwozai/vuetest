// router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Vi from '@/views/Gallery.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {

    path: '/vi',
    name: 'Vi',
    component: Vi
  } ,

  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({ name: 'Login' }) // 重定向到名为 'Login' 的路由对象
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
