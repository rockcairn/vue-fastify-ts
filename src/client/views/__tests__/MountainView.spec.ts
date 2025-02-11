import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { beforeEach } from 'node:test';


import MountainView from '../MountainView.vue'

describe('HelloWorld', () => {
    beforeEach(() => {
       vi.mock('../../api/MountainService', () => ({
            getMountains: vi.fn(async () => [{name: "my test mountain"}]),
        }));
    }) 
  it('renders properly', async () => {
    const wrapper = mount(MountainView, { })

    expect(wrapper.text()).toContain('Loading');
    await flushPromises();
    expect(wrapper.text()).toContain('my test mountain');
  })
})
