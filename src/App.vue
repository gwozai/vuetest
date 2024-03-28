<script setup>
  import { ref } from 'vue';
  import { ElDialog } from 'element-plus';
  import Listmedia from './components/listmedia.vue'
  import Mediaaudio from './components/mediaaudio.vue'
  import Suijiyiju from './components/suijiyiju.vue';
  import Videotest from './components/videotest.vue';

  const components = ['Mediaaudio', 'Videotest', 'Suijiyiju', 'Listmedia'];
  const selectedComponent = ref(components[0]);
  const isDialogVisible = ref(false);
</script>


<template>
  <main>
    <p>vue 主页</p>

    <button @click="isDialogVisible = true">选择要显示的组件</button>

    <el-dialog title="请选择要显示的组件" :visible.sync="isDialogVisible">
      <button v-for="component in components" @click="selectedComponent = component">{{ `显示 ${component}` }}</button>
    </el-dialog>

    <component :is="selectedComponent"></component>
  </main>
</template>
<style scoped>
</style>
