<template>
    <div>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password">
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        axios.post('http://localhost:5000/login', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          console.log(response.data);
          // Redirect to another page or handle success message
        })
        .catch(error => {
          console.error(error.response.data);
          // Handle error message
        });
      }
    }
  }
  </script>
  