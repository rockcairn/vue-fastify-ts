<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

const hello = { name: 'stuff', color: 'other' }

console.log(`my stuff ${hello.name}`)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
