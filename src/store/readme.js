// 导入认证模块
import auth from './auth';

// 调用登录功能
const loggedIn = auth.login('admin', 'password');

// 如果登录成功，则输出用户信息
if (loggedIn) {
  console.log('User logged in:', auth.user);
} else {
  console.log('Login failed');
}

// 调用退出功能
auth.logout();

// 检查用户是否已登录
const isAuthenticated = auth.isAuthenticated();
console.log('Is user authenticated:', isAuthenticated);
