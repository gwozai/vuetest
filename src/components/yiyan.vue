
  <template>
    <el-card class="box-card" shadow="hover">
      <blockquote>
        <p class="quote-content">{{jsonData.hitokoto}}</p>
        <footer class="quote-author">—— {{jsonData.from}}</footer>
      </blockquote>
      <el-select v-model="selectedCategory" placeholder="请选择类别" class="selection">
        <el-option
          v-for="category in categories"
          :key="category"
          :label="category"
          :value="category">
        </el-option>
      </el-select>
      <el-switch
         v-model="loadingSwitch"
         active-text="自动加载"
         inactive-text="手动加载"
      ></el-switch>
      <el-button class="getButton" type="success" @click="getQuote()">再来一句</el-button>
      <el-button v-if="loading" type="text" icon="el-icon-loading" circle></el-button>
    </el-card>
  </template>
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        jsonData: {},
        categories: [
         "Anime",
         "Comic",
         "Game",
         "Literature",
         "Original",
         "Internet",
         "Other",
         "Video",
         "Poem",
         "NCM",
         "Philosophy",
         "Funny",
        ],
        selectedCategory: null,
        loading: false,
      };
    },
    mounted() {
    this.getQuote(); // 页面初始化时自动加载数据
  },
    methods: {
      getQuote() {
        this.loading = true;
  
        const config = {
          method: 'get',
          url: `/api/?category=${this.selectedCategory}`,
          headers: { 
            'Accept': 'application/json', 
          }
        };
  
        axios(config)
          .then(response => {
            this.jsonData = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.log(error);
            this.loading = false;
          });
      }
    },
  };
  </script>
  
  <style scoped>
  
  .box-card {
    border: none;
    background-color: transparent;
  }
  
  .selection {
    margin: 15px 0;
  }
  
  .quote-content {
    font-size: 1.25rem;
    line-height: 1.5;
  }
  
  .quote-author {
    font-size: 1rem;
    margin-top: 1rem;
  }
  
  .getButton {
    color: #fff;
    background-color: #409eff;
  }
  </style>