<template>
  <div class="container">


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
      mediaSource: '/obj_wo3DlMOGwrbDjj7DisKw_26273634012_a205_52a8_2af8_18a28fd85860e30f2065db73380912e7.flac',
      mediaType: 'audio/flac'
      
    }
  }
}
</script>

<style scoped>

</style>