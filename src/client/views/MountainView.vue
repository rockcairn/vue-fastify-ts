<template>
  <div class="mountains">
    <h1>Mountains</h1>
    <h3>Colorado Mountains <span class="small-note">{{ message }}</span></h3>
  </div>
  <div v-if="loading">Loading...</div>
  <div v-else-if="data != null">
    <div class="mountains">
    <ol>
      <li v-for="(mountain, index) in data" :key="index">
        {{ mountain.name }} ({{ mountain.height }} ft.) | {{ mountain.mountain_range }}
      </li>
    </ol>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getMountains } from "../api/MountainService";

const message = "...using @fastify/vue!";

type mountain = {
  name: string;
  height: number;
  mountain_range: string;
};

const data = ref<[mountain]>();
const loading = ref<boolean>(true);

const fetchData = async () => {
    data.value = await getMountains();
    loading.value = false;
};

onMounted(fetchData);
</script>

<script lang="ts">
export function getMeta() {
  return {
    title: "Welcome to @fastify/vue!",
  };
}
</script>

<style scoped>
img {
  width: 100%;
}
.mountains {
  text-align: center;
}
.small-note {
  font-size: 14px;
}
</style>
