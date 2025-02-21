import { beforeEach, describe, expect, it } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '../../stores/counter';

describe('counter', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it('increment works', () => {
    const store = useCounterStore();
    store.count = 4;
    store.increment();
    expect(store.count).toBe(5);
  });
});
