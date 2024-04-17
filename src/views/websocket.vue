<template>
    <div id="app_websocket">
      <h2>多人聊天测试</h2>
      <div class="chat-window">
        <ul>
          <li v-for="msg in messages" :key="msg.id">{{ msg.content }}</li>
        </ul>
      </div>
      <div class="input-area">
        <input type="text" v-model="message" @keyup.enter="sendMessage">
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "",
        messages: []
      };
    },
    mounted() {
      this.connectWebSocket();
    },
    methods: {
      connectWebSocket() {
        this.websocket = new WebSocket("ws://1.15.7.2:8765");
        this.websocket.onopen = () => {
          console.log("WebSocket connected");
        };
        this.websocket.onmessage = event => {
          this.messages.push({ id: Date.now(), content: event.data });
          this.scrollChatWindow();
        };
        this.websocket.onerror = error => {
          console.error("WebSocket error:", error);
        };
        this.websocket.onclose = () => {
          console.log("WebSocket closed");
        };
      },
      sendMessage() {
        if (this.message) {
          this.websocket.send(this.message);
        //   this.messages.push({ id: Date.now(), content: "You: " + this.message });
          this.message = "";
          this.scrollChatWindow();
        }
      },
      scrollChatWindow() {
        // Scroll to bottom of chat window
        const chatWindow = this.$el.querySelector(".chat-window");
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }
    }
  };
  </script>
  
  <style scoped>
  #app_websocket {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .chat-window {
    height: 300px; /* Fixed height for chat window */
    overflow-y: auto; /* Enable vertical scrollbar */
  }
  
  input[type="text"] {
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0; /* Remove default margin */
  }
  
  li {
    margin-bottom: 5px;
  }
  </style>
  