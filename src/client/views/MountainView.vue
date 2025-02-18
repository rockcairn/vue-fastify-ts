<template>
  <div class="mountains">
    <h1>Mountains: Colorado Mountains <span class="small-note">{{ message }}</span></h1>
  </div>
  <div v-if="loading">Loading...</div>
  <div v-else-if="data != null">
    <ol>
      <li v-for="(mountain, index) in data" :key="index">
        {{ mountain.name }} ({{ mountain.height }} ft.) | {{ mountain.mountain_range }}
      </li>
    </ol>
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
// const error = ref<string | null>(null);

const fetchData = async () => {
  
  // try {
  //   const response = await fetch("/api/outdoor/mountains", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch data");
  //   }
  //   data.value = await response.json() as [mountain];
  // } catch (err) {
  //   error.value = (err as Error).message;
  // } finally {
    data.value = await getMountains();
    loading.value = false;
  // }
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
