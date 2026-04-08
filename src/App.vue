<template>
  <!-- 导航栏 -->
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <a href="#" class="logo">
        <span class="logo-text">高歌体育</span>
        <span class="logo-en">GAOGE SPORTS</span>
      </a>
      <ul class="nav-links">
        <li><a href="#brand" @click.prevent="scrollTo('brand')">品牌介绍</a></li>
        <li><a href="#teams" @click.prevent="scrollTo('teams')">高歌FC</a></li>
        <li><a href="#teams" @click.prevent="scrollTo('teams')">GBA</a></li>
        <li><a href="#schedule" @click.prevent="scrollTo('schedule')">赛事日程</a></li>
      </ul>
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- Hero 区域 -->
  <section class="hero">
    <div class="hero-bg">
      <div class="hero-gradient"></div>
      <div class="hero-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="title-line">高歌体育</span>
        <span class="title-en">GAOGE SPORTS</span>
      </h1>
      <p class="hero-slogan">追逐梦想 · 超越自我</p>
      <p class="hero-desc">高歌FC & GBA — 用汗水书写荣耀</p>
      <div class="hero-actions">
        <a href="#teams" class="btn btn-primary" @click.prevent="scrollTo('teams')">了解更多</a>
      </div>
    </div>
    <div class="scroll-indicator" @click="scrollTo('brand')">
      <span>向下滚动</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>

  <!-- 品牌故事区 -->
  <section id="brand" class="brand-section">
    <div class="container">
      <div class="brand-content fade-in-up">
        <div class="brand-header">
          <span class="section-label">关于我们</span>
          <h2 class="section-title">关于高歌体育</h2>
        </div>
        <p class="brand-desc">
          高歌体育成立于2015年，致力于推动本土体育事业发展。旗下拥有高歌FC足球俱乐部和GBA篮球联赛两支职业队伍。
          我们坚持"拼搏、创新、团结、超越"的核心理念，为年轻球员提供专业的训练平台和比赛机会。
        </p>
        <div class="brand-values">
          <div class="value-card">
            <div class="value-icon">🎯</div>
            <h3>使命</h3>
            <p>培养下一代体育人才</p>
          </div>
          <div class="value-card">
            <div class="value-icon">💪</div>
            <h3>精神</h3>
            <p>永不言弃，勇往直前</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🏆</div>
            <h3>目标</h3>
            <p>打造顶级体育品牌</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 球队展示区 -->
  <section id="teams" class="teams-section">
    <div class="container">
      <div class="teams-header fade-in-up">
        <span class="section-label">我们的队伍</span>
        <h2 class="section-title">球队展示</h2>
      </div>

      <!-- 标签页切换 -->
      <div class="team-tabs">
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'fc' }"
          @click="activeTab = 'fc'"
        >
          高歌FC
          <span class="tab-en">Football Club</span>
        </button>
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'gba' }"
          @click="activeTab = 'gba'"
        >
          GBA
          <span class="tab-en">Basketball Association</span>
        </button>
      </div>

      <!-- 球队卡片 -->
      <div class="team-cards fade-in-up" :key="activeTab">
        <!-- 高歌FC -->
        <div v-if="activeTab === 'fc'" class="team-card">
          <div class="team-card-left">
            <div class="team-emblem">
              <span class="emblem-icon">⚽</span>
            </div>
          </div>
          <div class="team-card-right">
            <h3 class="team-name">高歌FC</h3>
            <p class="team-name-en">GAOGE FOOTBALL CLUB</p>
            <p class="team-intro">
              高歌FC是高歌体育旗下的职业足球俱乐部，成立于2015年。球队坚持以青训为本，
              培养了多名优秀年轻球员。球队主场为高歌体育中心，可容纳5000名观众。
            </p>
            <div class="team-honors">
              <div class="honor-item">
                <span class="honor-num">3</span>
                <span class="honor-label">冠军</span>
              </div>
              <div class="honor-item">
                <span class="honor-num">2</span>
                <span class="honor-label">亚军</span>
              </div>
              <div class="honor-item">
                <span class="honor-num">68%</span>
                <span class="honor-label">胜率</span>
              </div>
            </div>
          </div>
        </div>

        <!-- GBA -->
        <div v-if="activeTab === 'gba'" class="team-card">
          <div class="team-card-left">
            <div class="team-emblem gba">
              <span class="emblem-icon">🏀</span>
            </div>
          </div>
          <div class="team-card-right">
            <h3 class="team-name">GBA</h3>
            <p class="team-name-en">GAOGE BASKETBALL ASSOCIATION</p>
            <p class="team-intro">
              GBA（高歌篮球协会）是高歌体育旗下的职业篮球俱乐部，成立于2018年。
              球队注重团队配合与防守反击，拥有一批充满活力的年轻球员。
            </p>
            <div class="team-honors">
              <div class="honor-item">
                <span class="honor-num">2</span>
                <span class="honor-label">冠军</span>
              </div>
              <div class="honor-item">
                <span class="honor-num">3</span>
                <span class="honor-label">亚军</span>
              </div>
              <div class="honor-item">
                <span class="honor-num">62%</span>
                <span class="honor-label">胜率</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 赛事日程区 -->
  <section id="schedule" class="schedule-section">
    <div class="container">
      <div class="schedule-header fade-in-up">
        <span class="section-label">赛事动态</span>
        <h2 class="section-title">近期赛事</h2>
      </div>

      <div class="schedule-list">
        <div class="schedule-item fade-in-up" v-for="(match, index) in matches" :key="index">
          <div class="match-date">
            <span class="date-day">{{ match.day }}</span>
            <span class="date-month">{{ match.month }}</span>
          </div>
          <div class="match-info">
            <span class="match-league">{{ match.league }}</span>
            <div class="match-teams">
              <span class="team-name">{{ match.home }}</span>
              <span class="vs">VS</span>
              <span class="team-name">{{ match.away }}</span>
            </div>
            <span class="match-venue">📍 {{ match.venue }}</span>
          </div>
          <div class="match-action">
            <button class="btn btn-outline">详情</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 页脚 -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="footer-logo">高歌体育</span>
          <p class="footer-desc">追逐梦想 · 超越自我</p>
        </div>
        <div class="footer-links">
          <a href="#brand">品牌介绍</a>
          <a href="#teams">球队展示</a>
          <a href="#schedule">赛事日程</a>
        </div>
        <div class="footer-social">
          <a href="#" class="social-icon">📱</a>
          <a href="#" class="social-icon">📧</a>
          <a href="#" class="social-icon">📍</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 高歌体育 Gaoge Sports. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const isScrolled = ref(false)
const activeTab = ref('fc')
const matches = ref([
  { day: '12', month: '四月', league: '城市足球联赛', home: '高歌FC', away: '旋风 FC', venue: '高歌体育中心' },
  { day: '15', month: '四月', league: 'GBA 常规赛', home: 'GBA', away: '雄鹿队', venue: '市民体育馆' },
  { day: '20', month: '四月', league: '城市足球联赛', home: '高歌FC', away: '蓝星 FC', venue: '高歌体育中心' },
  { day: '25', month: '四月', league: 'GBA 常规赛', home: 'GBA', away: '猛龙队', venue: '市民体育馆' },
])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleMobileMenu = () => {
  // 移动端菜单切换逻辑后续添加
}

// 滚动动画
let observer = null

const initScrollAnimation = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.fade-in-up').forEach((el) => {
    observer.observe(el)
  })
}

onMounted(async () => {
  window.addEventListener('scroll', handleScroll)
  await nextTick()
  initScrollAnimation()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style>
/* 导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all var(--transition-normal);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.logo-text {
  font-size: 24px;
  font-weight: 900;
  color: var(--primary-blue);
  letter-spacing: 2px;
}

.logo-en {
  font-size: 10px;
  color: var(--text-light);
  letter-spacing: 3px;
  font-family: 'Bebas Neue', sans-serif;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  position: relative;
  padding: 8px 0;
  text-decoration: none;
  cursor: pointer;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-blue);
  transition: width var(--transition-normal);
}

.nav-links a:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 5px;
  border: none;
  cursor: pointer;
}

.mobile-menu-btn span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: all var(--transition-normal);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }
}

/* Hero 区域 */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #F5F8FF 0%, #E8F0FE 100%);
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-gradient {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 150%;
  background: radial-gradient(ellipse, rgba(0, 102, 255, 0.08) 0%, transparent 70%);
}

.hero-shapes {
  position: absolute;
  inset: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-light) 100%);
  top: -100px;
  right: -100px;
  opacity: 0.1;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: var(--accent-gold);
  bottom: 10%;
  left: -50px;
  opacity: 0.08;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: var(--primary-dark);
  top: 40%;
  right: 20%;
  opacity: 0.06;
}

.hero-content {
  text-align: center;
  z-index: 1;
  padding: 0 20px;
}

.hero-title {
  margin-bottom: 20px;
}

.title-line {
  display: block;
  font-size: clamp(48px, 10vw, 96px);
  font-weight: 900;
  color: var(--primary-blue);
  letter-spacing: 8px;
  text-shadow: 0 4px 30px rgba(0, 102, 255, 0.3);
}

.title-en {
  display: block;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(18px, 4vw, 32px);
  color: var(--text-secondary);
  letter-spacing: 12px;
  margin-top: 8px;
}

.hero-slogan {
  font-size: clamp(20px, 4vw, 32px);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.hero-desc {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity var(--transition-normal);
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-indicator span {
  font-size: 12px;
  color: var(--text-secondary);
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--primary-blue);
  border-bottom: 2px solid var(--primary-blue);
  transform: rotate(45deg);
  animation: scrollBounce 2s infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(8px); }
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .scroll-indicator {
    bottom: 24px;
  }
}

/* 滚动动画 */
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 品牌故事区 */
.brand-section {
  padding: 120px 0;
  background: var(--bg-white);
  position: relative;
}

.brand-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.brand-header {
  margin-bottom: 40px;
}

.section-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: var(--primary-blue);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(32px, 5vw, 48px);
  color: var(--text-primary);
}

.brand-desc {
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 60px;
}

.brand-values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.value-card {
  padding: 40px 24px;
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal);
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-card);
}

.value-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.value-card h3 {
  font-size: 20px;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.value-card p {
  font-size: 14px;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .brand-section {
    padding: 80px 0;
  }

  .brand-desc {
    font-size: 16px;
    margin-bottom: 40px;
  }

  .brand-values {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

/* 球队展示区 */
.teams-section {
  padding: 120px 0;
  background: var(--bg-light);
}

.teams-header {
  text-align: center;
  margin-bottom: 60px;
}

.team-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
}

.tab-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 50px;
  background: white;
  border: 2px solid transparent;
  border-radius: var(--radius-lg);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-secondary);
  transition: all var(--transition-normal);
  cursor: pointer;
}

.tab-btn:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
}

.tab-btn.active {
  background: var(--primary-blue);
  color: white;
  box-shadow: 0 8px 30px rgba(0, 102, 255, 0.3);
}

.tab-en {
  font-size: 11px;
  font-weight: 400;
  opacity: 0.7;
  margin-top: 4px;
  letter-spacing: 1px;
}

.team-cards {
  max-width: 900px;
  margin: 0 auto;
}

.team-card {
  display: flex;
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: all var(--transition-normal);
}

.team-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

.team-card-left {
  width: 300px;
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-dark) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
}

.team-emblem {
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.team-emblem.gba {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
}

.emblem-icon {
  font-size: 64px;
}

.team-card-right {
  flex: 1;
  padding: 50px;
}

.team-name {
  font-size: 36px;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.team-name-en {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 14px;
  color: var(--text-light);
  letter-spacing: 3px;
  margin-bottom: 24px;
}

.team-intro {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.team-honors {
  display: flex;
  gap: 40px;
}

.honor-item {
  display: flex;
  flex-direction: column;
}

.honor-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px;
  color: var(--primary-blue);
  line-height: 1;
}

.honor-label {
  font-size: 14px;
  color: var(--text-light);
  margin-top: 4px;
}

@media (max-width: 768px) {
  .teams-section {
    padding: 80px 0;
  }

  .team-tabs {
    flex-direction: column;
    align-items: center;
  }

  .tab-btn {
    width: 100%;
    max-width: 280px;
  }

  .team-card {
    flex-direction: column;
  }

  .team-card-left {
    width: 100%;
    padding: 40px;
  }

  .team-emblem {
    width: 100px;
    height: 100px;
  }

  .emblem-icon {
    font-size: 48px;
  }

  .team-card-right {
    padding: 30px;
  }

  .team-honors {
    gap: 24px;
  }
}

/* 赛事日程区 */
.schedule-section {
  padding: 120px 0;
  background: var(--bg-white);
}

.schedule-header {
  text-align: center;
  margin-bottom: 60px;
}

.schedule-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.schedule-item {
  display: flex;
  align-items: center;
  padding: 24px 30px;
  background: var(--bg-light);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}

.schedule-item:hover {
  background: white;
  box-shadow: var(--shadow-card);
  transform: translateX(8px);
}

.match-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 70px;
  padding-right: 30px;
  border-right: 2px solid var(--primary-blue);
  margin-right: 30px;
}

.date-day {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px;
  color: var(--primary-blue);
  line-height: 1;
}

.date-month {
  font-size: 12px;
  color: var(--text-light);
  text-transform: uppercase;
}

.match-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.match-league {
  font-size: 12px;
  font-weight: 700;
  color: var(--accent-gold);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.match-teams {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}

.vs {
  font-size: 14px;
  color: var(--text-light);
  font-weight: 400;
}

.match-venue {
  font-size: 14px;
  color: var(--text-secondary);
}

.match-action {
  margin-left: 30px;
}

@media (max-width: 768px) {
  .schedule-section {
    padding: 80px 0;
  }

  .schedule-item {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .match-date {
    border-right: none;
    border-bottom: 2px solid var(--primary-blue);
    padding-right: 0;
    padding-bottom: 16px;
    margin-right: 0;
    width: 100%;
    flex-direction: row;
    gap: 8px;
  }

  .match-teams {
    justify-content: center;
  }

  .match-action {
    margin-left: 0;
  }
}

/* 页脚 */
.footer {
  background: var(--text-primary);
  color: white;
  padding: 60px 0 30px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 2px;
}

.footer-desc {
  font-size: 14px;
  opacity: 0.6;
  margin-top: 4px;
}

.footer-links {
  display: flex;
  gap: 30px;
}

.footer-links a {
  font-size: 14px;
  opacity: 0.7;
  transition: opacity var(--transition-normal);
  color: white;
  text-decoration: none;
}

.footer-links a:hover {
  opacity: 1;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all var(--transition-normal);
  text-decoration: none;
}

.social-icon:hover {
  background: var(--primary-blue);
  transform: translateY(-4px);
}

.footer-bottom {
  padding-top: 30px;
  text-align: center;
}

.footer-bottom p {
  font-size: 12px;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }

  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>