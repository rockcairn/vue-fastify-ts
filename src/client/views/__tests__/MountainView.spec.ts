import { describe, it, vi } from 'vitest';
import { flushPromises } from '@vue/test-utils';
import { screen, render } from '@testing-library/vue';
import { beforeEach } from 'node:test';

import MountainView from '../MountainView.vue';

describe('MountainView', () => {
  const mocks = vi.hoisted(() => {
    return {
      testMountain: {
        name: 'my test mountain',
        height: 1000,
        mountain_range: 'my range',
      },
    };
  });
  beforeEach(() => {
    vi.mock('../../api/MountainService', () => ({
      getMountains: vi.fn(async () => [
        {
          name: mocks.testMountain.name,
          height: mocks.testMountain.height,
          mountain_range: mocks.testMountain.mountain_range,
        },
      ]),
    }));
  });
  it('renders properly', async () => {
    render(MountainView, {});
    screen.getByText('Loading...');
    screen.getByText(/Colorado Mountains/i);
    await flushPromises();
    screen.getByText(
      `${mocks.testMountain.name} (${mocks.testMountain.height} ft.) | ${mocks.testMountain.mountain_range}`
    );
  });
});
