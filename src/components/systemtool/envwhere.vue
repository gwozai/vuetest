<template>
    <div>
      <h1>当前环境: {{ env }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        env: process.env.NODE_ENV
      }
    }
  }
  </script>