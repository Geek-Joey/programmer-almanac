function hashSeed(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i) | 0
  }
  return h >>> 0
}

function mulberry32(seed) {
  let s = seed | 0
  return function () {
    s = s + 0x6D2B79F5 | 0
    let t = Math.imul(s ^ s >>> 15, 1 | s)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

export function getRNG(date) {
  const d = date || new Date()
  const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  return mulberry32(hashSeed(key))
}

export function pickOne(list, rng) {
  return list[Math.floor(rng() * list.length)]
}

export function pickByWeight(list, rng) {
  const total = list.reduce((s, item) => s + (item.weight || 1), 0)
  let r = rng() * total
  for (const item of list) {
    r -= item.weight || 1
    if (r <= 0) return item
  }
  return list[list.length - 1]
}

export function pickN(list, n, rng) {
  const shuffled = [...list]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, n)
}

export function pickNByWeight(list, n, rng) {
  const pool = [...list]
  const result = []
  for (let i = 0; i < n && pool.length > 0; i++) {
    const picked = pickByWeight(pool, rng)
    result.push(picked)
    const idx = pool.indexOf(picked)
    if (idx !== -1) pool.splice(idx, 1)
  }
  return result
}
