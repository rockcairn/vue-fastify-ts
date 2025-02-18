import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const oddOrEven = computed(() => {
    if (count.value % 2 ) return "odd"
    return "even"
  });
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }

  return { count, oddOrEven, doubleCount, increment, decrement }
})
