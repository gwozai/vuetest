<template>
    <div>
      <video-player :options="videoOptions" />
    </div>
  </template>
  
  <script>
  import VideoPlayer from '@/components/VideoPlayer.vue';
  
  export default {
    name: 'VideoExample',
    components: {
      VideoPlayer
    },
    data() {
      return {
        videoOptions: {
          autoplay: false,
          controls: true,
          sources: [
            {
              src:
                '/1.mp4',
                type: 'video/mp4'
            }
          ]
        }
      };
    }
  };
  </script>