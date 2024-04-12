// router/index.js
// 如果是生产环境，直接跳转到mypage
// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/views/Home.vue'
import Gallery from '@/views/Gallery.vue'
import Login from '@/views/Login.vue'
import About from '@/views/About.vue'
import Mypage from '@/views/mypage.vue'
import Websocketss from '@/views/homeindex.vue'

import auth from '@/store/auth.js'

const routes = [

  {
    path: '/',
    redirect: '/home' // 重定向到 /home
  },
  {
    path: '/home',
    name: 'Websocketss',
    component: Websocketss
  },
  {
    path: '/mypage',
    name: "Mypage",
    component: Mypage,
    meta: { requiresAuth: true }, // 添加 requiresAuth 元字段
    props: true // 将路由参数作为组件的 props 传递

  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
    meta: { requiresAuth: true } // 添加 requiresAuth 元字段
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { requiresAuth: false } // 添加 requiresAuth 元字段
  },


  {
    path: "/login",
    name: "Login",
    component: Login,
    props: (route) => ({ redirectFrom: route.query.redirectFrom }) // 将跳转来源作为 props 传递给登录页面
  }
];



// 创建路由实例 使用hash模式 带有#号
const router = createRouter({
  history: createWebHashHistory(),
  routes
});




// 模拟用户登录状态
let isAuthenticated = () => {
  return localStorage.getItem('user') !== null;
};

// 模拟用户登录
const login = () => {
  localStorage.setItem('user', 'loggedIn');
};

// 模拟用户退出
const logout = () => {
  localStorage.removeItem('user');
};



// 添加全局导航守卫
router.beforeEach((to, from, next) => {
  console.log(`Navigating to ${to.fullPath}`); // 打印日志

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // if (!isAuthenticated()) {
    if (!auth.isAuthenticated()) {
      // 如果用户未登录且访问需要认证的页面，则重定向到登录页面
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      // 如果用户已登录，则允许导航
      next();
    }
  } else {
    // 如果访问的页面不需要认证，则直接允许导航
    // export default router;

    next();
  }
});



// 如果是生产环境，并且路径是根路径，则重定向到 mypage 页面
// if (isProduction) {
//   router.beforeEach((to, from, next) => {
//     if (to.path === '/home') {
//       next('/mypage');
//     } else {
//       next();
//     }
//   });
// }


// export default router;

export { router};

