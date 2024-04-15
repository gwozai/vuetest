<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>行数</th>
          <th>标题</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <router-link :to="'/text/' + item.number" class="link">
              {{ item.title }}
            </router-link>
          </td>
        </tr>
      </tbody>

    </table>
    <div>
    <P>获取参数，用来分页使用 page: {{page}}  age: {{age}}</P>

    <router-link :to="{ path: '/text', query: { page: 1 } }">跳转到 Text 页面，带参数 page=1</router-link>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: null,
      age: null,
      items: [
        { number: 45465789, title: '间谍过家家剧情' },
        { number: 549898, title: '大狗狗的股市' },
        { number: 123456, title: '如何提高注意力和专注力' },
        { number: 234567, title: '五个科学方法让你更快入睡' },
        { number: 345678, title: '如何在家工作时保持高效率' },
        { number: 456789, title: '五个简单方法帮你摆脱手机成瘾' },
        { number: 567890, title: '如何培养健康的生活习惯' },
        { number: 678901, title: '三十分钟瑜伽冥想让你焕发活力' },
        { number: 789012, title: '八种食物让你远离感冒' },
        { number: 890123, title: '如何在工作中应对挑战与压力' },
        { number: 901234, title: '创意DIY：用废物做出有趣的装饰品' },
        { number: 987654, title: '五本书推荐给喜欢科幻小说的你' }
      ]
    
    };
  },
  mounted() {
    this.page = this.$route.query.page;
    this.age = this.$route.query.age;
  }
};
</script>

<style scoped>
.container {
  margin: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f5f5f5;
}

.link {
  color: #007bff;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
