# 整屏翻页功能优化设计

## 概述
用 Swiper 替换当前手写的滚轮翻页逻辑，实现流畅的整屏翻页效果。

## 现状
- 手动实现滚轮事件监听 + `scrollIntoView` 实现翻页
- 存在滚动不流畅、偶尔翻不过去的问题
- 代码分布在 `App.vue` 和 `utils/fullpageScroll.js`

## 方案
引入 **Swiper**（免费开源）实现整屏翻页。

### 技术选型
- Swiper 版本：latest (v11+)
- 效果模式：`effect: 'slide'` + CSS Scroll Snap
- 不使用 Swiper 的动画效果，保持原生平滑滚动

### 功能清单
- [x] 滚轮滚动翻页
- [x] 移动端触摸滑动翻页
- [x] 键盘上下键翻页
- [x] 导航点击跳转
- [x] 导航高亮联动

### 移动端处理
- 保持整屏翻页效果（与桌面端一致）
- 触摸滑动支持由 Swiper 原生提供

## 修改文件
1. `package.json` - 添加 swiper 依赖
2. `src/App.vue` - 用 Swiper 替换现有翻页逻辑
3. `src/style.css` - 调整容器样式
4. `src/utils/fullpageScroll.js` - 可删除

## 预期效果
- 鼠标滚轮：流畅整屏翻页，不再卡顿
- 触摸滑动：移动端自然翻页
- 键盘导航：上下键翻页
- 导航联动：当前 section 高亮