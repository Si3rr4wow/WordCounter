import getWordCountsInString from './get-word-counts-in-string'
import getTopWordsFromCounts from './get-top-words-from-counts'

const getTopWordsInString = (str, resultLength = 3) => {
  if (!str) { return {} }
  const counts = getWordCountsInString(str)
  const topWords = getTopWordsFromCounts(counts, resultLength)
  return topWords
}

export default getTopWordsInString
