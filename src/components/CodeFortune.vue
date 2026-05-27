<script setup>
defineProps({
  fortune: Object,
  index: Number,
})

const levelClass = (level) => {
  if (level.includes('上上')) return 'level-ss'
  if (level.includes('上')) return 'level-s'
  if (level.includes('中')) return 'level-z'
  return 'level-x'
}
</script>

<template>
  <div class="fortune-panel" v-if="fortune">
    <div class="fortune-header">
      <span class="fortune-badge" :class="levelClass(fortune.level)">
        {{ fortune.level }}
      </span>
      <span class="fortune-name">第{{ index }}签 · {{ fortune.name }}</span>
    </div>
    <p class="fortune-text">{{ fortune.text }}</p>
    <p class="fortune-detail">{{ fortune.detail }}</p>
  </div>
</template>

<style scoped>
.fortune-panel {
  background: linear-gradient(135deg, #fdf6e3, #fef9ef);
  border: 2px solid #d4a373;
  border-radius: 8px;
  padding: 16px;
}
.fortune-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.fortune-badge {
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 4px;
  font-family: 'Noto Serif SC', 'SimSun', serif;
}
.level-ss {
  background: #b91c1c;
  color: #fff;
}
.level-s {
  background: #e8a838;
  color: #fff;
}
.level-z {
  background: #6b8e6b;
  color: #fff;
}
.level-x {
  background: #888;
  color: #fff;
}
.fortune-name {
  font-size: 14px;
  color: #8b5e3c;
  font-family: 'Noto Serif SC', 'SimSun', serif;
}
.fortune-text {
  font-size: 15px;
  color: #333;
  line-height: 1.7;
  margin: 0 0 8px;
  font-family: 'Noto Serif SC', 'SimSun', serif;
}
.fortune-detail {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}
</style>
