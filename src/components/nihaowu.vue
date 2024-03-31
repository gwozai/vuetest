<template>
    <!-- 在单击时显示消息的按钮 -->
    <div class="container">
      <button type="button" class="btn btn-primary">
        {{ msg }}
      </button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  // 'Ping' 组件
  export default {
    name: 'Ping',
  
    // 组件数据对象
    data() {
      return {
        msg: '',     // 用于显示的消息
      };
    },
  
    // 组件方法对象
    methods: {
      // 通过 axios 获取消息
      getMessage() {
        const path = `${this.$apiURL}/ping`;
        axios.get(path)
          .then((res) => {
            // 成功获取后，设置 msg 的值
            this.msg = res.data;
          })
          .catch((error) => {
            // 如果出现错误，则在控制台中记录错误
            // eslint-disable-next-line
            console.error(error);
          });
      },
    },
  
    // 生命周期钩子-在创建组件时获取消息
    created() {
      this.getMessage();
    },
  };
  </script>