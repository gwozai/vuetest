<template>
  <div>
    <el-button @click="showFormDialog = true" type="success" style="margin-bottom: 20px;">Add URL</el-button>

    <el-dialog v-model="showFormDialog" title="Add URL">
      <el-form :model="newURL" ref="urlForm" :rules="urlFormRules">
        <el-form-item label="URL" prop="url">
          <el-input v-model="newURL.url" placeholder="Enter URL"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showFormDialog = false">Cancel</el-button>
        <el-button type="primary" @click="addURL">Add</el-button>
      </span>
    </el-dialog>

    <el-table :data="urls" stripe border>
      <el-table-column prop="url" label="URL">
        <template v-slot="{ row, $index }">
          <el-input v-model="row.url" placeholder="Enter URL"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="Preview">
        <template v-slot="{ row, $index }">
          <el-button @click="openPreview(row.url)" type="primary" size="mini">Preview</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Actions">
        <template v-slot="{ row, $index }">
          <el-button @click="removeURL($index)" type="danger" size="mini">Remove</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="showPreviewDialog" title="Preview" :close-on-click-modal="false">
      <iframe :src="previewURL" style="width: 100%; height: 400px; border: none;"></iframe>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showPreviewDialog = false">Close</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const urls = ref([{ url: ' http://1.15.7.2:9000/album/commonutils/generate_requirements.bat' }]);
    const showFormDialog = ref(false);
    const newURL = ref({ url: '' });
    const showPreviewDialog = ref(false);
    const previewURL = ref('');

    const urlFormRules = {
      url: [
        { required: true, message: 'Please enter the URL', trigger: 'blur' }
      ]
    };

    const addURL = () => {
      const form = newURL.value;
      form.url = form.url.trim();
      if (form.url) {
        urls.value.push({ url: form.url });
        showFormDialog.value = false;
      }
    };

    const removeURL = index => {
      urls.value.splice(index, 1);
    };

    const openPreview = url => {
      const encodedURL = encodeURIComponent(base64Encode(url));
      previewURL.value = `http://1.15.7.2:8012/onlinePreview?url=${encodedURL}`;
      showPreviewDialog.value = true;
    };

    const base64Encode = url => {
      // 实现 base64 编码的函数
      return btoa(url);
    };

    return { urls, showFormDialog, newURL, showPreviewDialog, previewURL, urlFormRules, addURL, removeURL, openPreview };
  }
};
</script>

<style>
/* 可以添加样式 */
</style>
