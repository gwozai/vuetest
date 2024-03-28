<template>
    <div>
      <textarea v-model="input" @input="update" id="editor" />
  
      <div v-html="compiledMarkdown" id="preview" />
    </div>
  </template>
  
  <script>
  import marked from 'marked'
  
  export default {
    data() {
      return {
        input: '# hello, markdown!',
      }
    },
    computed: {
      compiledMarkdown() {
        return marked(this.input)
      }
    },
    methods: {
      update() {
        let markdownText = this.$el.querySelector('#editor').value
        this.$el.querySelector('#preview').innerHTML = marked(markdownText)
      }
    }
  }
  </script>
  
  <style scoped>
  #editor {
    width: 100%;
    height: 200px;
  }
  
  #preview {
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
  }
  </style>