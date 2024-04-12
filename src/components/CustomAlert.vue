<template>
    <el-dialog
      :visible.sync="dialogVisible"
      title="自定义告警"
      @close="handleClose"
    >
      <p>{{ message }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialogVisible: false,
        message: ""
      };
    },
    methods: {
      // 打开弹窗
      openDialog(message) {
        this.message = message;
        this.dialogVisible = true;
      },
      // 关闭弹窗
      handleClose() {
        this.dialogVisible = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /* 可以在这里添加样式 */
  </style>
  