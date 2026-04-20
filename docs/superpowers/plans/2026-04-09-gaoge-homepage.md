# Gaoge Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a five-screen, full-page scrolling homepage for 高歌体育 using local assets, dark cinematic overlays, and minimal brand-led copy that matches the approved “现代纪念册” direction.

**Architecture:** Keep the homepage intentionally small and data-driven. Store the five sections in a dedicated content module, render them through one focused full-screen section component, and keep scroll snapping and active-section state in `App.vue` so the interaction remains easy to verify. Add a light Vitest setup to lock down the section content contract and the rendered structure before styling refinements.

**Tech Stack:** Vue 3, Vite, CSS, Vitest, Vue Test Utils, jsdom

---

## File Structure

- Create: `src/content/homepage.js`
  Responsibility: Export the five approved homepage sections with image imports, labels, titles, supporting copy, and CTA metadata.
- Create: `src/components/FullPageSection.vue`
  Responsibility: Render one full-screen section with background image, overlay, copy block, section index, and optional CTA.
- Create: `src/content/homepage.test.js`
  Responsibility: Verify the homepage content module exports exactly five sections with the expected keys and first-screen copy.
- Create: `src/App.test.js`
  Responsibility: Verify the app renders navigation, five sections, and the approved hero copy.
- Modify: `package.json`
  Responsibility: Add a test script and the minimum test dependencies.
- Modify: `vite.config.js`
  Responsibility: Add a Vitest `test` block for `jsdom`.
- Modify: `src/App.vue`
  Responsibility: Render the fixed header, full-page sections, and active-section state for nav and scroll cue behavior.
- Modify: `src/style.css`
  Responsibility: Replace the existing generic theme tokens with the approved dark, cinematic homepage system and responsive rules.
- Modify: `.gitignore`
  Responsibility: Ignore `.superpowers/` so visual brainstorming files are not accidentally committed.

### Task 1: Add test tooling and homepage content data

**Files:**
- Create: `src/content/homepage.js`
- Create: `src/content/homepage.test.js`
- Modify: `package.json`
- Modify: `vite.config.js`

- [ ] **Step 1: Write the failing content test**

```js
import { describe, expect, it } from 'vitest'
import { homepageSections } from './homepage'

describe('homepageSections', () => {
  it('defines five brand sections backed by local assets', () => {
    expect(homepageSections).toHaveLength(5)
    expect(homepageSections[0]).toMatchObject({
      id: 'hero',
      kicker: 'Gaoge Sports',
      title: '将运动浪漫主义坚决贯彻到底',
    })
    expect(homepageSections.every((section) => section.image)).toBe(true)
    expect(homepageSections.every((section) => section.description.length > 0)).toBe(true)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm exec vitest run src/content/homepage.test.js`

Expected: FAIL with a module resolution error because `src/content/homepage.js` and the Vitest setup do not exist yet.

- [ ] **Step 3: Add the test script and test config**

Update `package.json` to:

```json
{
  "name": "gaoge-sports-site",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.3",
    "@vue/test-utils": "^2.4.6",
    "jsdom": "^26.0.0",
    "vite": "^6.2.0",
    "vitest": "^3.1.1"
  }
}
```

Update `vite.config.js` to:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  test: {
    environment: 'jsdom',
  },
})
```

- [ ] **Step 4: Create the homepage content module**

Create `src/content/homepage.js`:

```js
import heroImage from '../assets/e711fb37860264a2260514e2a4ebaa9c.JPG'
import manifestoImage from '../assets/36CD12F5-E3DC-4C9D-9978-9358731AC9F1_1_105_c.jpeg'
import cultureImage from '../assets/bd5500cc99ef28ad9235e14838ec1ba8.JPG'
import legacyImage from '../assets/07675f1bcd980650c3c947113c16284c.JPG'
import finaleImage from '../assets/f6f6adc7e1b9649079b77c02abf1f6d2.JPG'

export const homepageSections = [
  {
    id: 'hero',
    kicker: 'Gaoge Sports',
    title: '将运动浪漫主义坚决贯彻到底',
    description: '高歌体育，不把上场视为任务，而把每一次奔赴都当作风格的公开表达。',
    image: heroImage,
    ctaLabel: '向下阅读',
  },
  {
    id: 'manifesto',
    kicker: '01 / Manifesto',
    title: '我们不是为了占据赛场，而是为了定义气质。',
    description: '速度、克制、想象力与纪律，被放进同一种运动语言里。这就是高歌体育的开场方式。',
    image: manifestoImage,
  },
  {
    id: 'culture',
    kicker: '02 / Temperament',
    title: '把纪律、审美、热爱与表达欲，训练成同一种本能。',
    description: '真正让一支球队被记住的，从来不只是比分，而是它如何出现、如何对待彼此、如何留下余韵。',
    image: cultureImage,
  },
  {
    id: 'legacy',
    kicker: '03 / Legacy',
    title: '每一次上场，都会留下被记住的理由。',
    description: '高歌体育把瞬间写成记忆，把记忆沉淀为风格。时间会替我们保留那些足够动人的场面。',
    image: legacyImage,
  },
  {
    id: 'finale',
    kicker: '04 / Beyond The Match',
    title: '高歌体育，不止是一支球队。',
    description: '它是一种彼此认同的姿态，也是一种会继续生长的运动浪漫主义。',
    image: finaleImage,
    ctaLabel: '了解更多',
  },
]
```

- [ ] **Step 5: Run the content test to verify it passes**

Run: `pnpm exec vitest run src/content/homepage.test.js`

Expected: PASS with `1 passed`.

- [ ] **Step 6: Commit**

```bash
git add package.json vite.config.js src/content/homepage.js src/content/homepage.test.js
git commit -m "test: add homepage content coverage"
```

### Task 2: Build the reusable full-page section component

**Files:**
- Create: `src/components/FullPageSection.vue`
- Create: `src/App.test.js`

- [ ] **Step 1: Write the failing app render test**

Create `src/App.test.js`:

```js
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from './App.vue'

describe('App', () => {
  it('renders the fixed nav and five full-page sections', () => {
    const wrapper = mount(App)

    expect(wrapper.get('[data-test="site-header"]').text()).toContain('高歌体育')
    expect(wrapper.findAll('[data-test="fullpage-section"]')).toHaveLength(5)
    expect(wrapper.text()).toContain('将运动浪漫主义坚决贯彻到底')
    expect(wrapper.text()).toContain('高歌体育，不止是一支球队。')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm exec vitest run src/App.test.js`

Expected: FAIL because `App.vue` still renders plain text and the reusable section component does not exist.

- [ ] **Step 3: Create the minimal full-page section component**

Create `src/components/FullPageSection.vue`:

```vue
<script setup>
defineProps({
  section: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section
    :id="section.id"
    class="fullpage-section"
    :class="{ 'is-active': isActive }"
    :style="{ '--section-image': `url(${section.image})` }"
    data-test="fullpage-section"
  >
    <div class="section-overlay"></div>

    <div class="section-copy">
      <p class="section-kicker">{{ section.kicker }}</p>
      <p class="section-index">{{ String(index + 1).padStart(2, '0') }}</p>
      <h1 class="section-title">{{ section.title }}</h1>
      <p class="section-description">{{ section.description }}</p>
      <a
        v-if="section.ctaLabel"
        class="section-cta"
        :href="index === 0 ? '#manifesto' : '#hero'"
      >
        {{ section.ctaLabel }}
      </a>
    </div>
  </section>
</template>
```

- [ ] **Step 4: Run the app test to verify it still fails for missing app wiring**

Run: `pnpm exec vitest run src/App.test.js`

Expected: FAIL because `App.vue` has not imported `homepageSections` or rendered `FullPageSection` yet.

- [ ] **Step 5: Commit**

```bash
git add src/components/FullPageSection.vue src/App.test.js
git commit -m "test: add homepage app rendering coverage"
```

### Task 3: Wire the homepage layout and scroll behavior in `App.vue`

**Files:**
- Modify: `src/App.vue`
- Test: `src/App.test.js`

- [ ] **Step 1: Update the app test to assert active nav state**

Extend `src/App.test.js`:

```js
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from './App.vue'

describe('App', () => {
  it('renders the fixed nav and five full-page sections', () => {
    const wrapper = mount(App)

    expect(wrapper.get('[data-test="site-header"]').text()).toContain('高歌体育')
    expect(wrapper.findAll('[data-test="fullpage-section"]')).toHaveLength(5)
    expect(wrapper.get('[data-test="nav-link-hero"]').classes()).toContain('is-current')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm exec vitest run src/App.test.js`

Expected: FAIL because the app still has no header or active-nav logic.

- [ ] **Step 3: Replace `src/App.vue` with the minimal homepage assembly**

Update `src/App.vue` to:

```vue
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import FullPageSection from './components/FullPageSection.vue'
import { homepageSections } from './content/homepage'

const activeSection = ref('hero')

const handleScroll = () => {
  const offsets = homepageSections.map((section) => {
    const element = document.getElementById(section.id)
    if (!element) return { id: section.id, top: Number.POSITIVE_INFINITY }

    return {
      id: section.id,
      top: Math.abs(element.getBoundingClientRect().top),
    }
  })

  offsets.sort((left, right) => left.top - right.top)
  activeSection.value = offsets[0]?.id ?? 'hero'
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="page-shell">
    <header class="site-header" data-test="site-header">
      <a class="site-brand" href="#hero">高歌体育</a>

      <nav class="site-nav" aria-label="Homepage sections">
        <a
          v-for="section in homepageSections"
          :key="section.id"
          :href="`#${section.id}`"
          class="site-nav-link"
          :class="{ 'is-current': activeSection === section.id }"
          :data-test="`nav-link-${section.id}`"
        >
          {{ section.kicker }}
        </a>
      </nav>
    </header>

    <main class="fullpage-stack">
      <FullPageSection
        v-for="(section, index) in homepageSections"
        :key="section.id"
        :section="section"
        :index="index"
        :is-active="activeSection === section.id"
      />
    </main>
  </div>
</template>
```

- [ ] **Step 4: Run the app test to verify it passes**

Run: `pnpm exec vitest run src/App.test.js`

Expected: PASS with `1 passed`.

- [ ] **Step 5: Commit**

```bash
git add src/App.vue src/App.test.js
git commit -m "feat: assemble fullpage homepage structure"
```

### Task 4: Apply the approved cinematic styling and responsive rules

**Files:**
- Modify: `src/style.css`
- Modify: `.gitignore`
- Test: `src/content/homepage.test.js`
- Test: `src/App.test.js`

- [ ] **Step 1: Add the failing ignore assertion by checking the file diff manually**

Run: `git diff -- .gitignore`

Expected: no `.superpowers/` entry yet.

- [ ] **Step 2: Replace the global stylesheet with the approved visual system**

Update `src/style.css` to:

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap');

:root {
  --bg-page: #090a0d;
  --bg-overlay: rgba(6, 8, 12, 0.48);
  --bg-overlay-strong: rgba(6, 8, 12, 0.74);
  --text-primary: #f3f1ed;
  --text-secondary: rgba(243, 241, 237, 0.74);
  --text-muted: rgba(243, 241, 237, 0.46);
  --line-soft: rgba(243, 241, 237, 0.18);
  --surface-soft: rgba(255, 255, 255, 0.05);
  --content-width: min(1120px, calc(100vw - 72px));
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--bg-page);
  color: var(--text-primary);
  font-family: 'Noto Sans SC', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

#app {
  min-height: 100vh;
}

.page-shell {
  position: relative;
}

.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: var(--content-width);
  margin: 0 auto;
  padding: 28px 0;
}

.site-brand {
  font-size: 14px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
}

.site-nav {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.site-nav-link {
  position: relative;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 180ms ease;
}

.site-nav-link.is-current,
.site-nav-link:hover {
  color: var(--text-primary);
}

.fullpage-stack {
  position: relative;
}

.fullpage-section {
  position: relative;
  min-height: 100vh;
  scroll-snap-align: start;
  background-image: var(--section-image);
  background-size: cover;
  background-position: center;
  overflow: clip;
}

.fullpage-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(8, 9, 13, 0.2) 0%, rgba(8, 9, 13, 0.5) 48%, rgba(8, 9, 13, 0.82) 100%),
    linear-gradient(115deg, rgba(255, 255, 255, 0.04), transparent 42%);
  transform: scale(1.03);
}

.section-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, var(--bg-overlay-strong) 0%, rgba(6, 8, 12, 0.28) 52%, rgba(6, 8, 12, 0.58) 100%);
}

.section-copy {
  position: relative;
  z-index: 1;
  display: grid;
  align-content: end;
  gap: 18px;
  width: var(--content-width);
  min-height: 100vh;
  margin: 0 auto;
  padding: 136px 0 72px;
}

.section-kicker,
.section-index {
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.section-title {
  max-width: 8ch;
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 600;
  line-height: 0.92;
  letter-spacing: 0.01em;
}

.section-description {
  max-width: 34rem;
  margin: 0;
  font-size: 15px;
  line-height: 1.9;
  color: var(--text-secondary);
}

.section-cta {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--line-soft);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.fullpage-section.is-active .section-copy {
  animation: sectionRise 420ms ease-out both;
}

@keyframes sectionRise {
  from {
    opacity: 0.45;
    transform: translate3d(0, 24px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@media (max-width: 900px) {
  :root {
    --content-width: min(100vw - 40px, 100%);
  }

  .site-header {
    padding: 20px 0;
  }

  .site-nav {
    display: none;
  }

  .section-copy {
    padding: 120px 0 48px;
    gap: 14px;
  }

  .section-title {
    max-width: 10ch;
    font-size: clamp(2.6rem, 13vw, 4.6rem);
  }

  .section-description {
    max-width: 24rem;
    font-size: 14px;
    line-height: 1.75;
  }
}
```

- [ ] **Step 3: Ignore the visual brainstorming workspace**

Update `.gitignore` to:

```gitignore
node_modules
dist
.DS_Store
.superpowers
```

- [ ] **Step 4: Run the focused tests to verify everything stays green**

Run: `pnpm test`

Expected: PASS with both `src/content/homepage.test.js` and `src/App.test.js` green.

- [ ] **Step 5: Run the production build**

Run: `pnpm build`

Expected: PASS with a generated `dist/` bundle and no Vite errors.

- [ ] **Step 6: Commit**

```bash
git add src/style.css .gitignore package.json vite.config.js src/App.vue src/components/FullPageSection.vue src/content/homepage.js src/content/homepage.test.js src/App.test.js
git commit -m "feat: build gaoge fullpage homepage"
```
