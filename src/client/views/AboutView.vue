<template>
  <div class='about'>
    <h1>About</h1>
    <h3> My Store Counter Value is: [ {{ store.count }} ]</h3>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '../stores/counter';
  const store = useCounterStore();
</script>

<style>
  .about {
    text-align: center;
  }
</style>