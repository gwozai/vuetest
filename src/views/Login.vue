<template>
  <div class="container">
    <h2>登录页面</h2>
    <el-button type="primary" @click="showLoginConfirm">Login</el-button>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessageBox } from 'element-plus';

// 导入认证模块
import auth from '@/store/auth.js';

export default defineComponent({
  setup() {
    const router = useRouter();

    const login = () => {
      // 模拟登录成功，并存储用户信息到本地存储
      auth.login('admin', 'password');

      // 导航到原始路径或首页
      if (router.currentRoute.value.query.redirect) {
        router.push(router.currentRoute.value.query.redirect);
      } else {
        router.push('/');
      }
    };

    const showLoginConfirm = () => {
      ElMessageBox.confirm('您是否要登录？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 用户点击了确定按钮，执行登录逻辑
        login();
      }).catch(() => {
        // 用户点击了取消按钮，不执行任何操作
      });
    };

    // 调用登录功能
    const loggedIn = auth.login('admin', 'password');
    // 如果登录成功，则输出用户信息
    if (loggedIn) {
      console.log('User logged in:', auth.user);
    } else {
      console.log('Login failed');
    }

    return {
      showLoginConfirm
    };
  }
});
</script>
<style scoped>
.container {
  position: absolute;
  top: 25%;
  left: 25%;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
}

.el-button {
  width: 100%;
}
</style>