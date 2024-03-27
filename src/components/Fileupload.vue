<template>
  <div class="container">
    <button class="btn" @click="showPopup = !showPopup">
      {{ showPopup ? "隐藏" : "显示" }}播放内容
    </button>
    <div v-if="showPopup" class="popup">
      正在播放：{{ mediaSource }}
    </div>
    <video class="player" controls autoplay :name="mediaName">
      <source :src="mediaSource" :type="mediaType">
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      mediaName: 'media',
      mediaSource: 'http://1.15.7.2:9000/album/%E9%86%89%E7%BA%A2%E9%A2%9C_%E5%88%98%E4%BE%9D%E6%9C%B5.flac',
      mediaType: 'audio/flac'
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  background: url('http://1.15.7.2:9000/picshow/imfree/202403280345955.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
}
.btn {
  display: inline-block;
  margin: 20px 0;
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
}
.popup {
  margin: 20px 0;
  padding: 10px;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
}
.player {
  max-width: 80%;
  height: auto;
  margin: 0 auto;
}
</style>