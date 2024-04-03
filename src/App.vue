<template>
  <div id="app">
    <div class="navigation">
    <router-link :to="{ path: '/mypage' }" class="nav-item">我的主页</router-link>
    <router-link :to="{ path: '/home' }" class="nav-item">测试中的页面...</router-link>
  </div>
    <router-view></router-view>
  </div>
</template>


<style>
.navigation {
  margin-left: 20px;
}

.nav-item {
  margin-right: 20px;
  color: #007bff;
  text-decoration: none;
}

.nav-item:hover {
  text-decoration: underline;
}
</style>