<!-- <template>
    <div id="app">
      <h1>请选择一个分类</h1>
      <select v-model="selectedCategory">
        <option disabled value="">请选择</option>
        <option v-for="category in categories" :key="category">
          {{ category }}
        </option>
      </select>




      <button @click="fetchData">获取</button>
      <p v-if="loading">加载中...</p>
      <div v-if="data">
        <h2>返回结果:</h2>
        <pre>{{ data }}</pre>
      </div>


      
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
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
        selectedCategory: "Comic",
        data: null,
        loading: false,
      };
    },
    methods: {
      async fetchData() {
        if (!this.selectedCategory) {
          alert("请先选择一个分类");
          return;
        }
        this.loading = true;
        try {
          const response = await axios.get(`${this.$apiURL}/`, {
            params: { category: this.selectedCategory },
            headers: {
                'Accept': 'application/json'
            } 
          });
          this.data = response.data;
        } catch (error) {
          console.error(error);
          alert("请求失败");
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style>
  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style> -->
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
  
    methods: {
      getQuote() {
        this.loading = true;
  
        const config = {
          method: 'get',
          url: `/api?category=${this.selectedCategory}`,
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