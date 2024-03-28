<template>
  <video-player
    class="video-player vjs-custom-skin v-player"
    ref="videoPlayer"
    :playsinline="true"
    controls
    :volume="2.0"
    :loop="true"
    :options="playerOptions"
  ></video-player>
</template>

<script>
export default {
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "16:9",
        fluid: true,
        sources: [
          {
            type: "video/mp4",
            src: "/1.mp4",
          },
        ],
        poster: "",
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          volumeControl: true,
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
    };
  },
};
</script>