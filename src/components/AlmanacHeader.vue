<script setup>
defineProps({
  dateStr: String,
  weekDay: String,
  lunarDate: String,
  fortuneLevel: Number,
})
</script>

<template>
  <div class="almanac-header">
    <div class="lunar-date">{{ lunarDate }}</div>
    <h1 class="title">程序员老黄历</h1>
    <div class="solar-date">{{ dateStr }} {{ weekDay }}</div>
    <div class="fortune-bar">
      <span class="fortune-label">整体运势</span>
      <span class="fortune-stars">
        <span v-for="i in 5" :key="i" class="star" :class="{ active: i <= fortuneLevel }">★</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.almanac-header {
  text-align: center;
  padding: 24px 16px 16px;
  border-bottom: 2px solid #d4a373;
  margin-bottom: 16px;
}
.lunar-date {
  font-size: 14px;
  color: #8b5e3c;
  font-family: 'Noto Serif SC', 'SimSun', serif;
  margin-bottom: 4px;
}
.title {
  font-size: 28px;
  color: #b91c1c;
  font-family: 'Noto Serif SC', 'SimSun', serif;
  margin: 4px 0;
  letter-spacing: 6px;
}
.solar-date {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}
.fortune-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.fortune-label {
  font-size: 13px;
  color: #8b5e3c;
}
.fortune-stars {
  font-size: 18px;
  color: #ddd;
}
.star.active {
  color: #e8a838;
  text-shadow: 0 0 4px rgba(232, 168, 56, 0.4);
}
</style>
