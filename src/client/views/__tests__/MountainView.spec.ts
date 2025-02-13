import { describe, it, expect, vi } from 'vitest'
import { flushPromises} from '@vue/test-utils'
import { screen, render } from '@testing-library/vue';
import { beforeEach } from 'node:test';


import MountainView from '../MountainView.vue'

describe('HelloWorld', () => {
  const mocks = vi.hoisted(() => {
    return {
      testMountain: 'my test mountain'
    }
  })
    beforeEach(() => {

       vi.mock('../../api/MountainService', () => ({
            getMountains: vi.fn(async () => [{name: mocks.testMountain}]),
        }));
    }) 
  it('renders properly', async () => {
    render(MountainView, { })
    screen.getByText('Loading...');
    await flushPromises();
    screen.getByText(mocks.testMountain);
  })
})
