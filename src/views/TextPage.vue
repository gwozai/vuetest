<template>
    <div>
      <h1>{{ title }}</h1>
      <!-- 这里可以放入页面的其它内容 -->
      <p>后面写数据库的东西，可以增加和查看内容</p>
      <router-link to="/text">返回</router-link>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '' // 根据路由参数动态设置标题
      };
    },
    mounted() {
      // 获取路由参数中的数字
      const number = this.$route.params.number;
      // 根据数字找到对应的标题
      // 这里可以根据实际情况从后端或其他数据源获取标题
      // 这里我直接使用了之前定义的items数组
      const item = this.items.find(item => item.number.toString() === number);
      if (item) {
        this.title = item.title;
      } else {
        this.title = '未找到标题';
      }
    },
    computed: {
      items() {
        // 这里可以从后端或其他数据源获取数据
        // 我们将之前的items数组复制到这里
        return [
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
        ];
      }
    }
  };
  </script>
  