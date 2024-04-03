<template>
  <div>
    <h2>Login Page</h2>
    <button @click="showLoginConfirm">Login</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessageBox } from 'element-plus';

export default defineComponent({
  setup() {
    const router = useRouter();

    const login = () => {
      // 模拟登录成功，并存储用户信息到本地存储
      localStorage.setItem('user', 'loggedInUser');

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

    return {
      showLoginConfirm
    };
  }
});
</script>
