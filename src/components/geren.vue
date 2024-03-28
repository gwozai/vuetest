<template>
    <div class="profile">
      <transition name="fade">
        <h1 v-if="show">欢迎来到我的个人主页!</h1>
      </transition>
      <button @click="show = !show">Toggle welcome</button>
      <p>我是 [你的名字]，一名 [你的职业/你的兴趣]。</p>
      <button @click="toggleDescription">更多信息</button>
      <transition name="slide-fade">
        <p v-if="showDescription">在这里添加更多关于你自己的信息。</p>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: true,
        showDescription: false,
      }
    },
    methods: {
      toggleDescription() {
        this.showDescription = !this.showDescription;
      },
    },
  }
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  </style>