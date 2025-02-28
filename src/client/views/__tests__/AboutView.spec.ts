import { createTestingPinia } from '@pinia/testing';
import { render, screen } from '@testing-library/vue';
import { describe, it, vi } from 'vitest';
import { useCounterStore } from '../../stores/counter';

import { flushPromises } from '@vue/test-utils';
import AboutView from '../AboutView.vue';

describe('AboutView', () => {
  it('renders counter properly', async () => {
    const pinia = createTestingPinia({ createSpy: vi.fn });
    render(AboutView, {
      global: {
        plugins: [pinia],
      },
    });

    screen.getByText(/About/i);

    const store = useCounterStore(); // Access the mocked store
    store.count = 5; // Manually set count for the test
    await flushPromises();
    screen.getByText(/Value is: \[ 5 \]/i);
  });
});
