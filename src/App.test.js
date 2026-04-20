import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from './App.vue'

describe('App', () => {
  it('renders the fixed nav and five full-page sections', () => {
    const wrapper = mount(App)

    expect(wrapper.get('[data-test="site-header"]').text()).toContain('高歌体育')
    expect(wrapper.findAll('[data-test="fullpage-section"]')).toHaveLength(5)
    expect(wrapper.get('[data-test="nav-link-hero"]').classes()).toContain('is-current')
    expect(wrapper.text()).toContain('将运动浪漫贯彻到底')
    expect(wrapper.text()).toContain('高歌体育，不止于球队')
    expect(wrapper.get('[data-section-id="finale"]').classes()).toContain('section-finale')
    expect(wrapper.get('[data-test="section-title-finale"]').classes()).toContain('section-title-vertical')
  })
})
