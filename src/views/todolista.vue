// ExampleComponent.vue

<template>
  <div>
    <button @click="createTask">Create Task</button>
    <button @click="getAllTasks">Get All Tasks</button>
    <button @click="getTaskById(2)">Get Task by ID</button>
    <button @click="updateTask(3)">Update Task</button>
    <button @click="deleteTask(1)">Delete Task</button>
  </div>
</template>

<script>
import apiUtils from '@/jscom/apiUtils.js';

export default {
  methods: {
    async createTask() {
      await apiUtils.testCreateTask();
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
