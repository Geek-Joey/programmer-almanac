<script setup>
import { computed } from 'vue'
import AlmanacHeader from './components/AlmanacHeader.vue'
import AdvicePanel from './components/AdvicePanel.vue'
import LuckyPanel from './components/LuckyPanel.vue'
import DailyQuote from './components/DailyQuote.vue'
import CodeFortune from './components/CodeFortune.vue'

import { goodAdvice, badAdvice } from './data/advice.js'
import { luckyLanguages, luckyColors, luckyDirections, luckyNumberRange } from './data/lucky.js'
import { quotes } from './data/quotes.js'
import { fortunes } from './data/fortunes.js'
import { getRNG, pickNByWeight, pickOne, pickN } from './utils/seed.js'

const WEEK_DAYS = ['日', '一', '二', '三', '四', '五', '六']
const LUNAR_MONTHS = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊']
const LUNAR_DAYS = [
  '初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
  '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
  '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十',
]
const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
const SHENG_XIAO = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']

function getLunarDate(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  // Approximate lunar conversion using 2026-01-01 as reference
  const refDate = new Date(2026, 0, 1)
  const refLunarMonth = 11
  const refLunarDay = 12
  const refGanZhiYear = 42

  const diffDays = Math.round((date - refDate) / 86400000)

  let lunarMonth = refLunarMonth
  let lunarDay = refLunarDay + diffDays

  const monthDays = [30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30]
  let monthIdx = lunarMonth - 1
  while (lunarDay > monthDays[monthIdx % 12]) {
    lunarDay -= monthDays[monthIdx % 12]
    monthIdx++
    if (monthIdx - lunarMonth >= 12) break
  }
  lunarMonth = (monthIdx % 12) + 1
  if (lunarDay < 1) lunarDay = 1

  const ganZhiIndex = refGanZhiYear + Math.floor(diffDays / 365)
  const gan = TIAN_GAN[ganZhiIndex % 10]
  const zhi = DI_ZHI[ganZhiIndex % 12]
  const shengXiao = SHENG_XIAO[ganZhiIndex % 12]

  return {
    month: LUNAR_MONTHS[lunarMonth - 1],
    day: lunarDay <= 30 ? LUNAR_DAYS[lunarDay - 1] : `${lunarDay}`,
    ganzhi: `${gan}${zhi}`,
    shengxiao: shengXiao,
  }
}

const today = new Date()
const rng = getRNG(today)

const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`
const weekDay = `周${WEEK_DAYS[today.getDay()]}`

const lunarInfo = getLunarDate(today)
const lunarDate = computed(() =>
  `农历${lunarInfo.ganzhi}年（${lunarInfo.shengxiao}年）${lunarInfo.month}月${lunarInfo.day}`
)

const goodAdvices = pickNByWeight(goodAdvice, 3, rng)
const badAdvices = pickNByWeight(badAdvice, 2, rng)

const luckyLang = pickOne(luckyLanguages, rng)
const luckyColor = pickOne(luckyColors, rng)
const luckyDir = pickOne(luckyDirections, rng)
const luckyNum = Math.floor(rng() * (luckyNumberRange.max - luckyNumberRange.min + 1)) + luckyNumberRange.min

const todayQuote = pickN(quotes, 1, rng)[0]

const fortuneIdx = Math.floor(rng() * fortunes.length)
const todayFortune = fortunes[fortuneIdx]

const fortuneLevel = computed(() => {
  const level = todayFortune?.level || '中'
  if (level.includes('上上')) return 5
  if (level.includes('上')) return 4
  if (level.includes('中')) return 3
  return 2
})
</script>

<template>
  <div class="container">
    <div class="card">
      <AlmanacHeader
        :dateStr="dateStr"
        :weekDay="weekDay"
        :lunarDate="lunarDate"
        :fortuneLevel="fortuneLevel"
      />
      <AdvicePanel :good="goodAdvices" :bad="badAdvices" />
      <LuckyPanel
        :language="luckyLang"
        :color="luckyColor"
        :direction="luckyDir"
        :number="luckyNum"
      />
      <DailyQuote :quote="todayQuote" />
      <CodeFortune :fortune="todayFortune" :index="fortuneIdx + 1" />
      <div class="footer">
        信则灵，不信则零 bug
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px 12px;
}
.card {
  max-width: 420px;
  width: 100%;
}
.footer {
  text-align: center;
  font-size: 12px;
  color: #bbb;
  margin-top: 16px;
  padding: 12px 0;
}
</style>
