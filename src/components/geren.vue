<template>
  <div class="profile">
    <transition name="fade">
      <h1 v-if="show">欢迎来到我的个人主页!</h1>
    </transition>
    <button @click="show = !show">Toggle welcome</button>
    <p>我是 lsp，这是我的个人主页。</p>
    <button @click="toggleDescription">更多信息</button>
    <transition name="slide-fade">
      <p v-if="showDescription">日常写的小组件展示在这里。</p>
      <table v-if="showDescription">
        <tr>
          <td><a href="https://myjs.gwozai.com/">lsp做的网站</a></td>
        </tr>
        <tr>
          <td><a href="https://myjsapi.vercel.app/">myjsapi.vercel.app</a></td>
        </tr>
        <tr>
          <td><a href="https://www.gwozai.com/#/home">Java专家随笔记</a></td>
        </tr>
      </table>
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