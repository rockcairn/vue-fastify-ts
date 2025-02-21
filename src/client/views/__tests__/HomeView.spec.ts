import { screen, render, fireEvent } from '@testing-library/vue';
import { describe, expect, it, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { useCounterStore } from '../../stores/counter';

import HomeView from '../HomeView.vue';
import { flushPromises } from '@vue/test-utils';

describe('HomeView', () => {
  it('renders counter properly', async () => {
    const pinia = createTestingPinia({ createSpy: vi.fn });
    render(HomeView, {
      global: {
        plugins: [pinia],
      },
    });

    const store = useCounterStore(); // Access the mocked store
    store.count = 5; // Manually set count for the test
    await flushPromises();
    screen.getByText('5');

    expect(store.oddOrEven).toBe('odd');

    await fireEvent.click(screen.getByRole('button', { name: '+' }));
    expect(store.increment).toHaveBeenCalled();
  });
});
