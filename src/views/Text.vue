<template>
  <div class="container">
    <h2 class="heading">标题列表</h2>
    <div class="card-container">
      <div class="card" v-for="(item, index) in items" :key="index">
        <router-link :to="'/text/' + item.number" class="card-link">
          <div class="card-content">
            <!-- <div class="card-number">{{ index + 1 }}</div> -->
            <div class="card-title">{{ item.title }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.heading {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: calc(33.33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-link {
  text-decoration: none;
}

.card-content {
  padding: 20px;
}

.card-number {
  font-size: 18px;
  font-weight: bold;
  color: #666;
}

.card-title {
  margin-top: 8px;
  font-size: 16px;
  color: #333;
}
</style>
