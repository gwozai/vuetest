<template>
  <div class="container">
    <button class="btn" @click="showPopup = !showPopup">
      {{ showPopup ? "隐藏" : "显示" }}播放内容
    </button>
    <div v-if="showPopup" class="popup">
      正在播放：{{ mediaSource }}
    </div>
    <video class="player" controls autoplay :name="mediaName" crossorigin="anonymous">
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
      mediaSource: '/assets/obj_wo3DlMOGwrbDjj7DisKw_26273634012_a205_52a8_2af8_18a28fd85860e30f2065db73380912e7.flac',
      mediaType: 'audio/flac'
      
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  background: url('./../assets/202403280345955.jpg') no-repeat center center fixed;
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