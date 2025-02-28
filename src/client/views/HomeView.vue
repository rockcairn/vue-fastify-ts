<template>
  <div class='home'>
    <h1>Home</h1>
  <div class="count">
    Counter: [ {{ store.count }} ]
  </div>
  <div class="buttons">
    <button @click="store.decrement()">-</button>
    <button @click="store.increment()">+</button>
    <hr>
    <div>This counter is: [ {{ store.oddOrEven }} ]</div>
    <div>
      <label>Edit the counter: </label>
      <input v-model="store.count" type="number">
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '../stores/counter';
  const store = useCounterStore();
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
hr {
  margin: 10px 0px;
}
</style>