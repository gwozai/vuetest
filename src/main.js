// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index';



// Import videojs and related css
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

// Import Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Create app
const app = createApp(App)
app.use(VueVideoPlayer)
app.use(ElementPlus, { size: 'small', zIndex: 3000 }) // Use Element Plus
app.use(router)
// Mount app
app.mount('#app')
