<template>
    <div>
       <h1>这是另一个组件</h1>
       <EnvComponent/>
    </div>
  </template>
  
  <script>
  import EnvComponent from '@/components/systemtool/envwhere.vue'
  
  export default {
    components: {
      EnvComponent
    }
  }
  </script>