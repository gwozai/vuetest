<template>
    <div>
      <input v-model="newTaskTitle" type="text" placeholder="Task Title">
      <input v-model="newTaskDescription" type="text" placeholder="Task Description">
      <input v-model="taskId" type="text" placeholder="Task ID">
      <button @click="createTask">Create Task</button>
      <button @click="getAllTasks">Get All Tasks</button>
      <button @click="getTaskById(taskId)">Get Task by ID</button>
      <button @click="updateTask(taskId)">Update Task</button>
      <button @click="deleteTask(taskId)">Delete Task</button>
    </div>
  </template>
  
  <script>
  import apiUtils from '@/jscom/apiUtils.js';
  
  export default {
    data() {
      return {
        newTaskTitle: '',
        newTaskDescription: '',
        taskId: ''
      };
    },
    methods: {
      async createTask() {
        await apiUtils.testCreateTask(this.newTaskTitle, this.newTaskDescription);
      },
      async getAllTasks() {
        await apiUtils.testGetAllTasks();
      },
      async getTaskById(taskId) {
        await apiUtils.testGetTaskById(taskId);
      },
      async updateTask(taskId) {
        await apiUtils.testUpdateTask(taskId);
      },
      async deleteTask(taskId) {
        await apiUtils.testDeleteTask(taskId);
      }
    }
  };
  </script>
  