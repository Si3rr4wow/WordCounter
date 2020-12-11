export default (counts, resultLength = 3) => {
  const topWords = Object.entries(counts).reduce((acc, [word, count], i) => {
    if (i < resultLength) { return { ...acc, [word]: count } }
    if (Object.values(acc).every(highestCount => highestCount > count)) { return acc }
    const sortedEntries = Object.entries(acc).sort(([wordA, countA], [wordB, countB]) => countB - countA)
    return sortedEntries.slice(0, resultLength - 1).reduce((acc, cur) => {
      return {
        ...acc,
        [cur[0]]: cur[1]
      }
    }, { [word]: count })
  }, {})
  return topWords
}
