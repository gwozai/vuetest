<template>
  <div>
    <button @click="toggleTableVisibility">{{ tableVisible ? 'Hide' : 'Show' }} Table</button>
    <div v-show="tableVisible">
      <table style="width: 1000px; height: 500px;">
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in pageData" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.content }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="prevPage" :disabled="page === 1">Previous</button>
      <button @click="nextPage" :disabled="page === maxPage">Next</button>
    </div>
    
    <button @click="showRandomEntry">Random Entry</button>
    <div v-if="randomEntry">
      <p>{{ randomEntry.id }}: {{ randomEntry.content }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import jsonData from '@/assets/2024-03-07.json';

export default {
  setup() {
    const jsonContent = ref(jsonData);
    const tableVisible = ref(false);

    const page = ref(1);
    const perPage = 10;
    
    const maxPage = computed(() => Math.ceil(jsonContent.value.length / perPage));
    const pageData = computed(() => jsonContent.value.slice((page.value - 1) * perPage, page.value * perPage));
    
    const nextPage = () => {
      if (page.value < maxPage.value) {
        page.value++;
      }
    };
    
    const prevPage = () => {
      if (page.value > 1) {
        page.value--;
      }
    };

    const toggleTableVisibility = () => {
      tableVisible.value = !tableVisible.value;
    }
    
    const randomEntry = ref(null);

    const showRandomEntry = () => {
      const randomIndex = Math.floor(Math.random() * jsonContent.value.length);
      randomEntry.value = jsonContent.value[randomIndex];
    }

    return {
      pageData,
      page,
      nextPage,
      prevPage,
      maxPage,
      tableVisible,
      toggleTableVisibility,
      randomEntry,
      showRandomEntry,
    };
  },
};
</script>

