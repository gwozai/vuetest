<template>
  <div v-if="visible" class="popup">
    <div>图片</div>
    <div>RFID Code: {{ message.rfidCode }}</div>
    <div>IP: {{ message.connectIp }}</div>
    <div>Port: {{ message.connectPort }}</div>
    <div>Device Code: {{ message.deviceCode }}</div>
    <div>SourceType: {{ message.sourceType }}</div>
    <div>File Path: {{ message.file_path }}</div>
    <div>Time: {{ message.current_time }}</div>
    <button @click="closePopup">Close</button>
  </div>

</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import CommonDialog from '@/components/dialog/CommonDialog.vue';

export default {
  props: ['message'],
  setup(props, { emit }) {
    const visible = ref(true);
    const audio = new Audio('/12345.mp3'); // 创建Audio对象

    onMounted(() => {
      audio.loop = true; // 设置音频循环播放
      audio.play(); // 组件加载时开始播放音频
    });

    onBeforeUnmount(() => {
      audio.pause(); // 组件销毁时停止播放音频
      audio.currentTime = 0; // 重置音频时间，确保下次播放时从头开始
    });

    const closePopup = () => {
      visible.value = false;
      emit('close');
    };

    return { visible, closePopup };
  }
};
</script>

<style>
.popup {
  /* Popup styling */
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1000;
}
</style>
