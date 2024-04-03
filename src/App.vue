<template>
  <div id="app">
    <div class="navigation">
      <router-link to="/mypage">My Page</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.navigation {
  margin-bottom: 20px;
}

.navigation a {
  color: blue;
  text-decoration: none;
  margin-right: 10px;
}

.navigation a:hover {
  color: red;
  cursor: pointer;
}
</style>
