<template>
    <div id="app">
      <h1>请选择一个分类</h1>
      <select v-model="selectedCategory">
        <option disabled value="">请选择</option>
        <option v-for="category in categories" :key="category">
          {{ category }}
        </option>
      </select>
      <button @click="fetchData">获取</button>
      <p v-if="loading">加载中...</p>
      <div v-if="data">
        <h2>返回结果:</h2>
        <pre>{{ data }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        categories: [
          "Anime",
          "Comic",
          "Game",
          "Literature",
          "Original",
          "Internet",
          "Other",
          "Video",
          "Poem",
          "NCM",
          "Philosophy",
          "Funny",
        ],
        selectedCategory: "",
        data: null,
        loading: false,
      };
    },
    methods: {
      async fetchData() {
        if (!this.selectedCategory) {
          alert("请先选择一个分类");
          return;
        }
        this.loading = true;
        try {
          const response = await axios.get("/api", {
            params: { category: this.selectedCategory },
            headers: {
                'Accept': 'application/json'
            } 
          });
          this.data = response.data;
        } catch (error) {
          console.error(error);
          alert("请求失败");
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style>
  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>