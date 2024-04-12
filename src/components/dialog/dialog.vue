<template>
    <div v-if="visible" class="popup-overlay">
      <div class="popup">
        <div class="popup-header">
          <h2>Session Details</h2>
          <button class="close-button" @click="closePopup">✖</button>
        </div>
        <div class="popup-body">
          <div class="popup-item">
            <label>RFID Code:</label>
            <div class="popup-value">{{ message.rfidCode }}</div>
          </div>
          <div class="popup-item">
            <label>File Path:</label>
            <div class="popup-value">{{ message.file_path }}</div>
          </div>
          <div class="popup-item">
            <label>Time:</label>
            <div class="popup-value">{{ message.current_time }}</div>
          </div>
          <button class="handle-button" @click="handleAction">Handle</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['message'],
    data() {
      return {
        visible: true,
        audio: new Audio('/12345.mp3'),
      };
    },
    mounted() {
      this.audio.loop = true;
      this.audio.play();
    },
    beforeUnmount() {
      this.audio.pause();
      this.audio.currentTime = 0;
    },
    methods: {
      closePopup() {
        this.visible = false;
        this.$emit('close');
      },
      handleAction() {
        // Add your handle logic here
        this.$emit('handle');
        this.closePopup();
      }
    },
  };
  </script>
  
  <style>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .popup {
    background-color: #f4f7fc;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 400px;
    border-left: 5px solid #2a64db; /* blue theme */
  }
  
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .popup-header h2 {
    margin: 0;
    font-size: 1.5em;
    color: #2a64db; /* blue theme */
  }
  
  .close-button {
    background: none;
    border: none;
    font-size: 1.5em;
    color: #2a64db; /* blue theme */
    cursor: pointer;
  }
  
  .popup-body {
    font-size: 1em;
    color: #333;
  }
  
  .popup-item {
    margin-bottom: 15px;
  }
  
  .popup-item label {
    font-weight: bold;
    color: #2a64db; /* blue theme */
    display: block;
  }
  
  .popup-value {
    padding-left: 10px;
  }
  
  .handle-button {
    padding: 10px 15px;
    background-color: #2a64db; /* blue theme */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    float: right; /* Aligns the button to the right */
  }
  
  .handle-button:hover {
    background-color: #1e4e9d; /* Darker blue on hover */
  }
  </style>
  