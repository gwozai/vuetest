<script setup>
import { ref } from 'vue';
import Listmedia from './components/listmedia.vue'
import Mediaaudio from './components/mediaaudio.vue'
import Suijiyiju from './components/suijiyiju.vue';
import Videotest from './components/videotest.vue';

const showComponent = ref(false);

function toggleComponent() {
  showComponent.value = !showComponent.value;
}
</script>

<template>
  <main>
    <p>vue 主页</p>

    <Mediaaudio />
    <Videotest />
    <Suijiyiju />
    <button @click="toggleComponent">测试部分</button>
    <Listmedia v-if="showComponent" />
  </main>
</template>

<style scoped>
</style>
