<template>
    <div>
      <h2>内存监测组件</h2>
      <ul v-if="Object.keys(systemInfo).length > 0">
        <li v-for="(value, key) in systemInfo" :key="key">
          {{ key }}: {{ formatValue(key, value) }}
        </li>
      </ul>
      <div v-else>
        sse连接失败，请检查服务器
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        systemInfo: {}
      };
    },
    methods: {
      formatValue(key, value) {
        if (typeof value === 'number') {
          if (key === 'cpu_percent') {
            return `${value}%`;
          } else if (key === 'total_memory' || key === 'used_memory') {
            return `${value} MB`;
          } else if (key === 'sent' || key === 'received') {
            return `${value} bytes`;
          } else if (typeof value === 'object') {
            // 处理磁盘使用情况
            return Object.entries(value).map(([disk, usage]) => {
              return `${disk}: Total ${usage.total} MB, Used ${usage.used} MB, Free ${usage.free} MB`;
            }).join('<br>');
          }
        }
        return value;
      }
    },
    mounted() {
      // 创建 EventSource 对象，监听服务器端的 SSE
      this.eventSource = new EventSource('/api/memory');
  
      // 监听 message 事件，处理服务器端发送的系统信息
      this.eventSource.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        this.systemInfo = data;
      });
  
      // 监听错误事件，处理连接错误
      this.eventSource.addEventListener('error', () => {
        this.systemInfo = {}; // 清空系统信息
      });
    },
    beforeDestroy() {
      // 在组件销毁前关闭 EventSource 连接
      if (this.eventSource) {
        this.eventSource.close();
      }
    }
  };
  </script>
  