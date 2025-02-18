<template>
  <div class='home'>
    <h1>Counter</h1>
  <div class="count">
    {{ count }}
  </div>
  <div class="buttons">
    <button @click="decrementCount">-</button>
    <button @click="incrementCount">+</button>
    <hr>
    <div>This counter is: {{ oddOrEven }}</div>
  </div>
  </div>
</template>

<script setup lang="ts">
  import {computed, ref} from 'vue';

  const count = ref(0);

  const incrementCount = () => {
    count.value++
  }
  const decrementCount = () => {
    count.value--
  }

  const oddOrEven = computed(() => {
    if (count.value % 2 ) return "odd"
    return "even"
  });

</script>

<style>
.home {
  text-align: center;
}
.count {
  font-size: 42px;
}
.buttons button {
  font-size: 20px;
}
</style>