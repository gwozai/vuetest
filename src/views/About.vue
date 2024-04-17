<!-- <template>
  <div>
    <h1>About Page</h1>
    <p>这是一个关于页面</p>
    <div>
      <p>gallery页面需要登录</p>
      <router-link to="/gallery">gallery</router-link>
    </div>
  </div>
</template> -->

<template>
  <div>
    <el-table :data="urls" stripe border>
      <el-table-column prop="url" label="URL">
        <template v-slot="{ row, $index }">
          <el-input v-model="row.url" placeholder="Enter URL"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="Actions">
        <template v-slot="{ row, $index }">
          <el-button @click="removeURL($index)" type="danger" size="mini">Remove</el-button>
          <el-button @click="openPopup(row)" type="primary" size="mini">Open Popup</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div v-for="(url, index) in urls" :key="index">
      <a :href="getPreviewURL(url.url)" target="_blank">{{ url.url }}</a>
    </div>

    <el-dialog v-model="showPopup" title="Popup" :close-on-click-modal="false">
      <iframe :src="popupURL" style="width: 100%; height: 400px; border: none;"></iframe>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showPopup = false">Close</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const urls = ref([{ url: 'http://1.15.7.2:9000/album/commonutils/generate_requirements.bat' }]);
    const showPopup = ref(false);
    const popupURL = ref('');

    const removeURL = index => {
      urls.value.splice(index, 1);
    };

    const openPopup = row => {
      const encodedURL = encodeURIComponent(base64Encode(row.url));
      popupURL.value = `http://1.15.7.2:8012/onlinePreview?url=${encodedURL}`;
      showPopup.value = true;
    };

    const getPreviewURL = url => {
      const encodedURL = encodeURIComponent(base64Encode(url));
      return `http://1.15.7.2:8012/onlinePreview?url=${encodedURL}`;
    };

    const base64Encode = url => {
      // 实现 base64 编码的函数
      return btoa(url);
    };

    return { urls, showPopup, popupURL, removeURL, openPopup, getPreviewURL };
  }
};
</script>

<style>
/* 可以添加样式 */
</style>
