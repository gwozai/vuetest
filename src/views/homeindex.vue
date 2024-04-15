<template>
  <div id="app">
    <!-- 弹窗组件，仅在收到消息时显示 -->
    <popup-component v-if="receivedMessage" :message="receivedMessage" @close="closePopup"></popup-component>

    <p>点击ping的按钮可以回复pong</p>
    <p>点击讲个笑话的按钮可以返回笑话事件</p>
    <p>可以通知页面，当用户连接上线时，弹一些好玩的</p>
    <p>可以统计在线人数</p>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import PopupComponent from './PopupComponent.vue';

export default {
  name: 'App',
  components: {
    PopupComponent,
  },
  setup() {
    const receivedMessage = ref(null);
    let websocket = null;
    let heartbeatInterval = null;
    const heartbeatMsg = JSON.stringify({ type: 'heartbeat', message: 'ping' });
    const heartbeatIntervalTime = 300; // 发送心跳的间隔，比如3秒

    const connectWebSocket = () => {
      websocket = new WebSocket('ws://127.0.0.1:5678');

      websocket.onopen = () => {
        console.log("WebSocket connection established.");
        startHeartbeat(); // 连接打开后开始心跳
      };

      websocket.onmessage = (event) => {
        receivedMessage.value = JSON.parse(event.data);
      };

      websocket.onclose = (event) => {
        console.log("WebSocket connection closed.", event.reason);
        stopHeartbeat(); // 停止心跳
        setTimeout(connectWebSocket, 5000); // 5秒后尝试重连
      };

      websocket.onerror = (error) => {
        console.log("WebSocket error:", error);
        websocket.close(); // 主动关闭可能处于异常状态的连接
      };
    };

    const closePopup = () => {
      receivedMessage.value = null;
    };

    // 开始发送心跳
    const startHeartbeat = () => {
      heartbeatInterval = setInterval(() => {
        if (websocket.readyState === WebSocket.OPEN) {
          websocket.send(heartbeatMsg);
        }
      }, heartbeatIntervalTime);
    };

    // 停止发送心跳
    const stopHeartbeat = () => {
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
      }
    };

    onMounted(() => {
      connectWebSocket();
    });

    onBeforeUnmount(() => {
      if (websocket) {
        websocket.close();
      }
      stopHeartbeat();
    });

    return {
      receivedMessage,
      closePopup
    };
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
