<template>
    <div>
      <p>User is logged in: {{ isLoggedIn }}</p>
      <button @click="handleLogin">Login</button>
      <button @click="handleLogout">Logout</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import auth from '@/store/auth.js'; // 导入认证模块
  
  export default {
    setup() {
      const isLoggedIn = ref(false);
  
      const handleLogin = () => {
        // 调用登录功能
        const loggedIn = auth.login('admin', 'password');
        // 如果登录成功，则更新登录状态
        if (loggedIn) {
          isLoggedIn.value = true;
          console.log('User logged in:', auth.user);
        } else {
          console.log('Login failed');
        }
      };
  
      const handleLogout = () => {
        // 调用退出功能
        auth.logout();
        // 更新登录状态
        isLoggedIn.value = false;
      };
  
      // 在组件挂载时检查登录状态
      onMounted(() => {
        // 检查用户是否已登录
        if (auth.isAuthenticated()) {
          isLoggedIn.value = true;
        }
      });
  
      return {
        isLoggedIn,
        handleLogin,
        handleLogout
      };
    }
  };
  </script>
  