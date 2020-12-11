import matchWords from './match-words'

export default str => {
  const words = matchWords(str)
  if (!words) { return {} }
  const counts = words.reduce((acc, cur, i) => {
    const lowerCaseCur = cur.toLowerCase()
    return {
      ...acc,
      [lowerCaseCur]: 1 + (acc?.[lowerCaseCur] || 0)
    }
  }, {})
  return counts
}
