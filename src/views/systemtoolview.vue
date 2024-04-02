<template>
    <div>
        <!-- 是开发还是生产 -->
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