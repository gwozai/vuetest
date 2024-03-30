<template>
  <div class="app-container">
    <div v-for="(item, index) in noteRecords" :key="index" class="note-record">
      <p class="creation-date">创建日期：{{ new Date(item.date).toLocaleString() }}</p>
      <p class="note-content-display">{{ item.content }}</p>
      <div>
        <button class="button" @click="writeExistingNote(index)">编辑</button>
        <button class="button" @click="deleteNote(index)">删除</button>
      </div>
    </div>
    <textarea class="text-area" v-model="noteContent" :placeholder="placeholderText"></textarea>
    <button class="button save-button" v-if="editIndex === null" @click="saveNote">保存新建便签</button>
    <button class="button save-button" v-else @click="saveNote">保存对便签的修改</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noteContent: '',
      noteRecords: [],
      correctPassword: '123456', // 这里是设定的密码，可以修改
      editIndex: null,
      placeholderText: "新建便签..."
    };
  },
  methods: {
    saveNote() {
      const password = window.prompt('请输入密码以保存');
      if (password === this.correctPassword) {
        if (this.editIndex === null) { // 新建便签
          this.noteRecords.push({content: this.noteContent, date: new Date()});
        } else { // 编辑便签
          this.noteRecords[this.editIndex].content = this.noteContent;
          this.editIndex = null;
          this.placeholderText = "新建便签...";
        }
        localStorage.setItem('notes', JSON.stringify(this.noteRecords));
        this.noteContent = '';
        alert('便签已保存');
      } else {
        alert('密码错误，便签未保存');
      }
    },
    writeExistingNote(index) {
      this.noteContent = this.noteRecords[index].content;
      this.editIndex = index;
      this.placeholderText = "修改便签...";
    },
    deleteNote(index) {
      const password = window.prompt('请输入密码以删除');
      if (password === this.correctPassword) {
        this.noteRecords.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(this.noteRecords));
        alert('便签已删除');
      } else {
        alert('密码错误，未能删除');
      }
    }
  },
  created() {
    let savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      this.noteRecords = savedNotes;
    }
  }
}
</script>

<style scoped>
.app-container {
  background-color: #222;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  font-family: Arial, sans-serif;
  color: #fff;
  padding: 20px;
}

.note-record {
  background-color: #333;
  border: none;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

.creation-date {
  font-size: 12px;
  color: #aaa;
  margin-bottom: 10px;
}

.note-content-display {
  color: #fff;
  line-height: 1.4;
  margin-bottom: 20px;
}

.text-area {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 20px;
  font-family: Arial, sans-serif;
  margin-bottom: 15px;
  width: 100%;
}

.button {
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.save-button {
  background-color: #4CAF50; /* Green */
}

.button:hover {
  opacity: 0.7;
}
</style>