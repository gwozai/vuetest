<template>
    <div>
      <p>User is logged in: {{ isLoggedIn }}</p>
      <button @click="handleLogin">Login</button>
      <button @click="handleLogout">Logout</button>
    </div>
  </template>
  
  <script>
import { ref, onMounted } from 'vue';
  import { login, logout ,isAuthenticated} from '@/router/index';
  
  export default {
    setup() {
      const isLoggedIn = ref(false);

      const handleLogin = () => {
        login(); // 调用登录函数
        isLoggedIn.value = true;
      };
  
      const handleLogout = () => {
        logout(); // 调用退出函数
        isLoggedIn.value = false;
      };
      // 在组件挂载时检查登录状态
      onMounted(() => {
      isLoggedIn.value = isAuthenticated(); // 获取登录状态
    });
      return {
        isLoggedIn,
        handleLogin,
        handleLogout
      };
    }
  };
  </script>
  