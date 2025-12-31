import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Modal from '../Modal.vue'

describe('Modal', () => {
  it('renders properly', () => {
    const wrapper = mount(Modal,{
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(wrapper.text()).toContain('You win!')
  })
})
