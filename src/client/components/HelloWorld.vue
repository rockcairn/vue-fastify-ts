<template>
  <div class="openingmessage">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Vue 3 project with Pinia!
    </h3>
  </div>
</template>


<script setup lang="ts">
  defineProps<{
    msg: string
  }>()
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.0rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.openingmessage h1,
.openingmessage h3 {
  text-align: center;
}
</style>
