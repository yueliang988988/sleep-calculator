// src/lib/calc.ts

// Wake window calculation functions for babies aged 0-24 months

export function getWakeWindow(ageInMonths: number): [number, number] {
  // Returns [min, max] wake window in minutes for given age in months
  
  if (ageInMonths === 0) return [45, 60]
  if (ageInMonths === 1) return [60, 90]
  if (ageInMonths === 2) return [75, 105]
  if (ageInMonths === 3) return [90, 120]
  if (ageInMonths === 4) return [105, 135]
  if (ageInMonths === 5) return [120, 150]
  if (ageInMonths === 6) return [135, 180]
  if (ageInMonths === 7) return [150, 195]
  if (ageInMonths === 8) return [165, 210]
  if (ageInMonths === 9) return [180, 225]
  if (ageInMonths === 10) return [195, 240]
  if (ageInMonths === 11) return [210, 255]
  if (ageInMonths === 12) return [225, 270]
  if (ageInMonths === 13) return [240, 285]
  if (ageInMonths === 14) return [255, 300]
  if (ageInMonths === 15) return [270, 315]
  if (ageInMonths === 16) return [285, 330]
  if (ageInMonths === 17) return [300, 345]
  if (ageInMonths === 18) return [315, 360]
  if (ageInMonths === 19) return [330, 375]
  if (ageInMonths === 20) return [345, 390]
  if (ageInMonths === 21) return [360, 405]
  if (ageInMonths === 22) return [375, 420]
  if (ageInMonths === 23) return [390, 435]
  if (ageInMonths === 24) return [405, 450]
  
  // For ages beyond 24 months, return the 24-month values
  return [405, 450]
}

export function calcSchedule(age: number, wakeTime: string): { nextNap: Date; idealBedtime: Date } {
  const [minWindow, maxWindow] = getWakeWindow(age)
  
  // Parse the wake time
  const wakeDate = new Date(wakeTime)
  
  // Calculate next nap time (wake time + minimum wake window)
  const nextNap = new Date(wakeDate.getTime() + minWindow * 60 * 1000)
  
  // Calculate ideal bedtime (wake time + maximum wake window)
  const idealBedtime = new Date(wakeDate.getTime() + maxWindow * 60 * 1000)
  
  return {
    nextNap,
    idealBedtime
  }
}
  