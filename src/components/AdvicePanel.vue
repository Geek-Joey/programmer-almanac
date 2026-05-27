<script setup>
defineProps({
  good: Array,
  bad: Array,
})
</script>

<template>
  <div class="advice-panel">
    <div class="advice-column good">
      <h2 class="advice-title good-title">宜</h2>
      <ul class="advice-list">
        <li v-for="item in good" :key="item.text" class="advice-item good-item">
          <span class="advice-icon">○</span>
          {{ item.text }}
        </li>
      </ul>
    </div>
    <div class="advice-column bad">
      <h2 class="advice-title bad-title">忌</h2>
      <ul class="advice-list">
        <li v-for="item in bad" :key="item.text" class="advice-item bad-item">
          <span class="advice-icon">✕</span>
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.advice-panel {
  display: flex;
  gap: 1px;
  background: #d4a373;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
}
.advice-column {
  flex: 1;
  padding: 12px 16px;
}
.good {
  background: #fffdf5;
}
.bad {
  background: #fff5f5;
}
.advice-title {
  font-family: 'Noto Serif SC', 'SimSun', serif;
  font-size: 20px;
  margin: 0 0 8px;
  text-align: center;
}
.good-title {
  color: #b91c1c;
}
.bad-title {
  color: #666;
}
.advice-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.advice-item {
  font-size: 14px;
  padding: 4px 0;
  display: flex;
  align-items: center;
  gap: 6px;
}
.good-item {
  color: #333;
}
.bad-item {
  color: #888;
}
.advice-icon {
  font-size: 12px;
  flex-shrink: 0;
}
.good-item .advice-icon {
  color: #b91c1c;
}
.bad-item .advice-icon {
  color: #ccc;
}
</style>
