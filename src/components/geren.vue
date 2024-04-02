<template>
  <div class="profile">
    <transition name="fade">
      <h1 v-if="show">欢迎来到我的个人主页!</h1>

    </transition>
    <figure></figure>
    <button @click="show = !show">Toggle welcome</button>
    <p>我是 AI大魔法师帅帅羊，这是我的个人主页。</p>
    <button @click="toggleDescription">更多信息</button>
    <transition name="slide-fade">
      <p v-if="showDescription">日常写的小组件展示在这里。</p>

    </transition>
   </div>
  </template>
  
  <script>
  import figure from './cartoon/figures.vue'
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

.profile {
  font-family: "Arial", sans-serif;
  color: #2c3e50;
}

.greeting {
  font-size: 2em;
  color: #1a1a1a;
}

.toggle-btn, .toggle-details-btn {
  margin-top: 1em;
  background-color: #34495e;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

.description {
  font-size: 1.2em;
  margin-top: 1em;
}

.further-details {
  margin-top: 2em;
}

.links-list {
  margin-top: 1em;
}

.link-item {
  display: block;
  margin-bottom: 0.5em;
  color: #34495e;
  text-decoration: none;
}

.link-item:hover {
  text-decoration: underline;
  color: #1a1a1a;
}

</style>
  