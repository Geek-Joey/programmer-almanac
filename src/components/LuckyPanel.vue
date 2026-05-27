<script setup>
defineProps({
  language: Object,
  color: Object,
  direction: Object,
  number: Number,
})
</script>

<template>
  <div class="lucky-panel">
    <h2 class="section-title">今日幸运</h2>
    <div class="lucky-grid">
      <div class="lucky-item">
        <span class="lucky-label">编程语言</span>
        <span class="lucky-value">{{ language?.emoji }} {{ language?.text }}</span>
      </div>
      <div class="lucky-item">
        <span class="lucky-label">幸运颜色</span>
        <span class="lucky-value">
          <span class="color-dot" :style="{ background: color?.hex }"></span>
          {{ color?.label }}（五行属{{ color?.element }}）
        </span>
      </div>
      <div class="lucky-item">
        <span class="lucky-label">幸运方向</span>
        <span class="lucky-value">{{ direction?.text }}（五行属{{ direction?.element }}）</span>
      </div>
      <div class="lucky-item">
        <span class="lucky-label">幸运数字</span>
        <span class="lucky-value lucky-number">{{ number }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lucky-panel {
  background: #fffdf5;
  border: 1px solid #e8d5b5;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 16px;
}
.section-title {
  font-family: 'Noto Serif SC', 'SimSun', serif;
  font-size: 16px;
  color: #b91c1c;
  margin: 0 0 10px;
  padding-left: 8px;
  border-left: 3px solid #b91c1c;
}
.lucky-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.lucky-item {
  font-size: 13px;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.lucky-label {
  font-size: 11px;
  color: #999;
}
.lucky-value {
  display: flex;
  align-items: center;
  gap: 4px;
}
.color-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #ddd;
  flex-shrink: 0;
}
.lucky-number {
  font-size: 20px;
  font-weight: bold;
  color: #b91c1c;
}
</style>
