// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

// 全局 API URL
let apiURL;
if (process.env.NODE_ENV === 'production') {
  // 生产环境使用这个 URL
  apiURL = 'https://myjsapi.gwozai.com';
} else {
  // 开发环境使用这个 URL
  apiURL = '/api';
}

// Import videojs and related css
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

// Create app
const app = createApp(App)
app.config.globalProperties.$apiURL = apiURL // Use video player
app.use(VueVideoPlayer)

// Mount app
app.mount('#app')