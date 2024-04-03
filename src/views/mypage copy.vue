<script setup>
import { ref, onBeforeUnmount } from 'vue';
import Listmedia from '@/components/listmedia.vue';
import Mediaaudio from '@/components/mediaaudio.vue';
import Suijiyiju from '@/components/suijiyiju.vue';
import Videotest from '@/components/videotest.vue';
import Geren from '@/components/geren.vue';
import Videoaa from '@/components/videoaa.vue';
import Videojsaa from '@/components/videojsaa.vue';
import Nihaowu from '@/components/nihaowu.vue';
import Noterecordaa from '@/components/noterecordaa.vue';
import Yiyan from '@/components/yiyan.vue';
import Todo from '@/views/todolista.vue';
import SystemtoolviewVue from '@/views/systemtoolview.vue';

const componentsList = { Yiyan, Mediaaudio, Suijiyiju, Videoaa, Listmedia, Videojsaa,Nihaowu ,Noterecordaa,Yiyan,Videotest,SystemtoolviewVue};
const components = Object.keys(componentsList);

// 添加组件别名
const componentsAlias = { Mediaaudio: '音频播放', 
Suijiyiju: '随机一句', 
Videoaa: '视频播放组件',
 Listmedia: '音乐展示',
  Videojsaa: '视频组件',
  Noterecordaa: '便签',
  Yiyan: '一言',
  'Nihaowu':'你好污',
  'Videotest':'elementui',
  'SystemtoolviewVue': '系统工具',
  'Todo':'待办事项',
};

const selectedComponent = ref(components[0]);

// Emulate close operation when component is switched
onBeforeUnmount(() => {
  console.log(`Component ${selectedComponent.value} closed`);
});
</script>

<template>
<main>
  <div class="myinfo">
    <Geren />
    <Todo />
  </div>

  <div class="select-container">
    <select v-model="selectedComponent" class="custom-select">
      <option v-for="(component, index) in components" :value="component" :key="index">{{ `Show ${componentsAlias[component]}` }}</option>
    </select>
  </div>
  <div class="component-container">
    <component :is="componentsList[selectedComponent]" />
  </div>

</main>
</template>


<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.select-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.component-container {
  display: flex;
  justify-content: center;
}
.myinfo{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

}
.custom-select {
  background: transparent;
  border: 1px solid #000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  outline: none;
  color: #000;
  padding: 5px 10px;
  font-size: 1em;
  border-radius: 5px;
}
</style>
