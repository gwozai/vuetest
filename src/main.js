// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

// Import videojs and related css
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

// Create app
const app = createApp(App)

// Use video player
app.use(VueVideoPlayer)

// Mount app
app.mount('#app')