export default () => {
  self.addEventListener('message', ({ data }) => {
    const getWordCounts = words => {
      const counts = words.reduce((acc, cur, i) => {
        const lowerCaseCur = cur.toLowerCase()
        return {
          ...acc,
          [lowerCaseCur]: 1 + (acc?.[lowerCaseCur] || 0)
        }
      }, {})
      return counts
    }

    const wordCounts = getWordCounts(data)
    postMessage(wordCounts)
  })
}
