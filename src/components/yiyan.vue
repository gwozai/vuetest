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
        categories: ["Anime", "Comic", "Game", "Literature", "Original", 
                     "Internet", "Other", "Video", "Poem", "NCM", 
                     "Philosophy", "Funny"],
        selectedCategory: "",
        data: null,
      };
    },
    methods: {
      async fetchData() {
        if (!this.selectedCategory) {
          alert("请先选择一个分类");
          return;
        }
        const response = await axios.get("https://myjsapi.vercel.app", { 
          params: { category: this.selectedCategory } 
        });
        this.data = response.data;
      }
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