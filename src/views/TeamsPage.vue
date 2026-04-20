<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { teams, teamData, teamColors } from '@/data/teams'

const router = useRouter()
const route = useRoute()

// 从路由参数获取 team，默认足球
const activeTeam = ref(route.params.team === 'basketball' ? 'warm-sunshine' : 'gaoge-fc')
const currentSlide = ref(0)

// 监听路由变化
watch(() => route.params.team, (newTeam) => {
  if (newTeam === 'basketball') {
    activeTeam.value = 'warm-sunshine'
  } else {
    activeTeam.value = 'gaoge-fc'
  }
  currentSlide.value = 0
  nextTick(() => {
    scrollToTop()
  })
})

// 回到顶部
const scrollToTop = () => {
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

// 触摸滑动相关
const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 50

const currentTeamData = computed(() => teamData[activeTeam.value])

const nextSlide = () => {
  const total = currentTeamData.value.gallery.length
  currentSlide.value = (currentSlide.value + 1) % total
}

const prevSlide = () => {
  const total = currentTeamData.value.gallery.length
  currentSlide.value = (currentSlide.value - 1 + total) % total
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const goBack = () => {
  router.push('/')
}

// 触摸滑动事件处理
const onTouchStart = (e) => {
  touchEndX.value = 0
  touchStartX.value = e.targetTouches[0].clientX
}

const onTouchMove = (e) => {
  touchEndX.value = e.targetTouches[0].clientX
}

const onTouchEnd = () => {
  const distance = touchEndX.value - touchStartX.value
  if (Math.abs(distance) > minSwipeDistance) {
    if (distance > 0) {
      prevSlide()
    } else {
      nextSlide()
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#090a0d] text-white">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-[#090a0d]/95 backdrop-blur-sm border-b border-white/5">
      <div class="flex items-center justify-between max-w-6xl mx-auto">
        <button
          @click="goBack"
          class="flex items-center gap-2 px-3 py-2 text-sm text-white/80 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>返回</span>
        </button>
        <div class="text-sm font-bold tracking-[2px] text-white">GAOGE SPORTS</div>
        <div class="w-[70px]"></div>
      </div>
    </header>

    <!-- Team Switcher -->
    <!-- PC: left side of content area, Mobile: bottom center -->
    <div class="fixed z-40 flex gap-2 md:flex-col md:gap-3">
      <!-- Mobile: bottom center -->
      <div class="md:hidden fixed left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
        <button
          v-for="team in teams"
          :key="team.id"
          @click="activeTeam = team.id; currentSlide = 0; scrollToTop(); router.replace({ params: { team: team.type === 'basketball' ? 'basketball' : 'football' } })"
          class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer"
          :style="{
            backgroundColor: activeTeam === team.id ? teamColors[team.id].primary : 'rgba(255,255,255,0.08)',
            color: activeTeam === team.id ? teamColors[team.id].text : 'rgba(255,255,255,0.5)'
          }"
          :title="team.name"
        >
          <Icon :icon="team.icon" class="w-5 h-5" />
        </button>
      </div>
      <!-- PC: left side of content -->
      <div class="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-3">
        <button
          v-for="team in teams"
          :key="team.id"
          @click="activeTeam = team.id; currentSlide = 0; scrollToTop(); router.replace({ params: { team: team.type === 'basketball' ? 'basketball' : 'football' } })"
          class="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer"
          :style="{
            backgroundColor: activeTeam === team.id ? teamColors[team.id].primary : 'rgba(255,255,255,0.08)',
            color: activeTeam === team.id ? teamColors[team.id].text : 'rgba(255,255,255,0.5)'
          }"
          :title="team.name"
        >
          <Icon :icon="team.icon" class="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>

    <!-- Main Content - Centered -->
    <main class="pt-20 pb-20 md:pb-15 px-4 md:px-16 max-w-5xl mx-auto relative">
      <transition name="fade" mode="out-in">
        <div :key="activeTeam">
          <!-- Team Hero Image -->
          <div class="relative h-[200px] md:h-[350px] rounded-2xl overflow-hidden mb-6">
            <img
              :src="currentTeamData.heroImage"
              :alt="currentTeamData.name"
              class="team-hero-image w-full h-full object-cover"
              :style="{ '--hero-image-offset': `${currentTeamData.heroImageOffsetX}%` }"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/30 to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-[#090a0d]/60 via-transparent to-[#090a0d]/40"></div>
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-lg md:text-xl font-bold"
                  :style="{ backgroundColor: teamColors[activeTeam].primary, color: teamColors[activeTeam].text }"
                >
                  <Icon :icon="teams.find(t => t.id === activeTeam)?.icon || ''" class="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h1 class="text-xl md:text-2xl font-bold">{{ currentTeamData.name }}</h1>
                  <p class="text-white/50 text-xs md:text-sm">{{ currentTeamData.fullName }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Team Info -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-6">
            <div class="p-3 bg-white/5 rounded-xl border border-white/5">
              <p class="text-xs text-white/40 uppercase tracking-wider mb-1">成立</p>
              <p class="text-base font-semibold">{{ currentTeamData.founded }}</p>
            </div>
            <div class="p-3 bg-white/5 rounded-xl border border-white/5">
              <p class="text-xs text-white/40 uppercase tracking-wider mb-1">城市</p>
              <p class="text-base font-semibold">{{ currentTeamData.city }}</p>
            </div>
            <div class="p-3 bg-white/5 rounded-xl border border-white/5">
              <p class="text-xs text-white/40 uppercase tracking-wider mb-1">主场</p>
              <p class="text-base font-semibold">{{ currentTeamData.stadium }}</p>
            </div>
            <div class="p-3 bg-white/5 rounded-xl border border-white/5">
              <p class="text-xs text-white/40 uppercase tracking-wider mb-1">类型</p>
              <p class="text-base font-semibold">{{ activeTeam === 'gaoge-fc' ? '足球' : '篮球' }}</p>
            </div>
          </div>

          <!-- Description -->
          <div class="mb-6">
            <h2 class="text-lg font-bold mb-3" :style="{ color: teamColors[activeTeam].primary }">引言</h2>
            <p class="text-white/70 leading-relaxed text-sm md:text-base">{{ currentTeamData.description }}</p>
          </div>

          <!-- Gallery -->
          <div class="mb-6">
            <h2 class="text-lg font-bold mb-3" :style="{ color: teamColors[activeTeam].primary }">瞬间</h2>
            <div
              class="relative rounded-2xl overflow-hidden group touch-pan-y"
              @touchstart="onTouchStart"
              @touchmove="onTouchMove"
              @touchend="onTouchEnd"
            >
              <div class="aspect-[16/10] relative">
                <img
                  v-for="(img, index) in currentTeamData.gallery"
                  :key="index"
                  :src="img"
                  :alt="`相册 ${index + 1}`"
                  class="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                  :class="index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
                />
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              <button
                @click="prevSlide"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                @click="nextSlide"
                class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>

              <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                <button
                  v-for="(_, index) in currentTeamData.gallery"
                  :key="index"
                  @click="goToSlide(index)"
                  class="w-1.5 h-1.5 rounded-full transition-all cursor-pointer"
                  :class="index === currentSlide ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/60'"
                ></button>
              </div>
            </div>
          </div>
          <footer class="pt-6 text-center text-[11px] md:text-xs text-white/30 tracking-[0.08em]">
            <p>© 2026 GAOGE SPORTS. All rights reserved.</p>
          </footer>
        </div>
      </transition>
    </main>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.team-hero-image {
  object-position: center var(--hero-image-offset);
}

@media (max-width: 767px) {
  .team-hero-image {
    object-position: center 100%;
  }
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
