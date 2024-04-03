// auth.js
import { reactive } from 'vue';

// 创建一个简单的登录模块
const auth = reactive({
  isLoggedIn: false,
  user: null,

  // 模拟用户数据，实际项目中应该从后端获取
  users: [
    { username: 'admin', password: 'password', name: 'Administrator' }
  ],

  // 用户登录功能
  login(username, password) {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      auth.isLoggedIn = true;
      auth.user = user; // 这里可以存储更多的用户信息
      localStorage.setItem('user', JSON.stringify(user)); // 将用户信息存储到本地存储中
      return true; // 登录成功
    } else {
      return false; // 登录失败
    }
  },

  // 用户退出功能
  logout() {
    auth.isLoggedIn = false;
    auth.user = null;
    localStorage.removeItem('user'); // 清除本地存储中的用户信息
  },

  // 用户注册功能
  register(user) {
    // 模拟用户注册成功
    // 这里可以进行一些注册验证逻辑
    auth.login(user.username, user.password); // 注册成功后直接登录
  },

  // 初始化函数，在应用程序初始化时检查本地存储中是否有用户信息
  initialize() {
    const user = localStorage.getItem('user');
    if (user) {
      auth.isLoggedIn = true;
      auth.user = JSON.parse(user);
    }
  },

  // 检查用户是否已登录
  isAuthenticated() {
    return auth.isLoggedIn;
  }
});

// 在应用程序初始化时调用 initialize() 函数
// auth.initialize();

export default auth;
