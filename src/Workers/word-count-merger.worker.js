export default () => {
  self.addEventListener('message', ({ data }) => {
    const mergeCounts = (objA, objB) => {
      return Object.entries(objA).reduce((acc, [word, count]) => {
        return {
          ...acc,
          [word]: count + (acc?.[word] || 0)
        }
      }, { ...objB })
    }

    if (!data[0] || !data[1]) { throw new Error('Word Count Merger did not receive valid data') }

    const wordCounts = mergeCounts(data[0], data[1])
    postMessage(wordCounts)
  })
}
