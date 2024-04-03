<template>
  <div>
    <h1>Welcome to Home Page</h1>
    <!-- <button @click="logout">Logout</button> -->
    <p>Home 页面不需要登录</p>

    <div>
      <p>gallery页面需要登录</p>
      <router-link to="/gallery">gallery</router-link>
      <p>about 页面不需要登录</p>
      <router-link to="/about">about</router-link>
    </div>

    <p>模拟用户退出，并清除本地存储中的用户信息</p>
    <MonidenglutuichuVue></MonidenglutuichuVue>

  </div>
</template>

<script>
import MonidenglutuichuVue from "@/components/loginvue.vue/monidenglutuichu.vue";

export default {
  components: {
    MonidenglutuichuVue
  }
};
</script>

<style scoped>

</style>
