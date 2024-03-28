<template>
  <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"/>
</template>

<script>
export default {
data() {
  return {
    playerOptions: {
      playbackRates: [0.7, 1.0, 1.5, 2.0],
      autoplay: true,
      muted: false,
      loop: false,
      preload: 'auto',
      language: 'zh-CN',
      aspectRatio: '16:9',
      fluid: true,
      sources: [{
        type: "video/mp4",
        src: "/1.mp4" //你的视频文件路径
      }],
      poster: "https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=600y500",
      notSupportedMessage: '此视频暂无法播放，请稍后再试',
      controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: false,
        fullscreenToggle: true
      }
    }
  }
}
}
</script>