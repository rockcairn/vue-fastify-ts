<template>
  <h1>{{ message }}</h1>

  <h1>Colorado Mountains</h1>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error" class="error">Error: {{ error }}</div>
  <div v-else-if="data != null">
    <ol>
      <li v-for="mountain in data">
        {{ mountain.name }}
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const message = "Welcome to @fastify/vue!";

type mountain = {
  name: string;
};
const data = ref<[mountain] | null>(null);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

const fetchData = async () => {
  try {
    const response = await fetch("/api/outdoor/mountains", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    data.value = await response.json() as [mountain];
  } catch (err) {
    error.value = (err as Error).message;
  } finally {
    loading.value = false;
  }
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
</style>
