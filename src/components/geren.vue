<template>
  <div class="profile">
    <transition name="fade">
      <div>
        <h1 v-if="show" class="greeting">欢迎来到我的个人主页!</h1>
      </div>
    </transition>
    
    <button class="toggle-btn" @click="show = !show">切换欢迎消息</button>
    
    <p class="description">我是lsp, 这是我的个人主页。</p>
    
    <button class="toggle-details-btn" @click="toggleDescription">显示更多信息</button>
    
    <transition name="slide-fade">
      <div v-if="showDescription">
        <p class="further-details">在这里，您可以查看我写的一些小组件展示：</p>
        <div class="links-list">
          <a href="https://myjs.gwozai.com/" class="link-item">lsp做的网站</a>
          <a href="https://myjsapi.vercel.app/" class="link-item">myjsapi.vercel.app</a>
          <a href="https://www.gwozai.com/#/home" class="link-item">Java专家随笔记</a>
        </div>
      </div>
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
  