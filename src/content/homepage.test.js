import { describe, expect, it } from 'vitest'
import { homepageSections } from './homepage'

describe('homepageSections', () => {
  it('defines five brand sections backed by local assets', () => {
    expect(homepageSections).toHaveLength(5)
    expect(homepageSections[0]).toMatchObject({
      id: 'hero',
      kicker: 'Gaoge Sports',
      title: '将运动浪漫贯彻到底',
    })
    expect(homepageSections.map((section) => section.title)).toEqual([
      '将运动浪漫贯彻到底',
      '我们定义气质',
      '把热爱练成气质',
      '上场，就要被记住',
      '高歌体育，不止于球队',
    ])
    expect(homepageSections.every((section) => section.image)).toBe(true)
    expect(homepageSections.every((section) => section.description.length > 0)).toBe(true)
  })
})
