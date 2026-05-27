<script setup>
defineProps({
  quote: Object,
})
</script>

<template>
  <div class="quote-panel" v-if="quote">
    <p class="quote-text">「{{ quote.text }}」</p>
    <p class="quote-author">—— {{ quote.author }}</p>
  </div>
</template>

<style scoped>
.quote-panel {
  background: #faf6ee;
  border: 1px solid #e8d5b5;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;
}
.quote-text {
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  margin: 0 0 8px;
  font-style: italic;
}
.quote-author {
  font-size: 12px;
  color: #999;
  margin: 0;
}
</style>
