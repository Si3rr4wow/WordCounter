import {
  getTopWordsFromCounts,
  matchWords,
  streamFile
} from 'Utils'
import { promisedWorker, promisedWorkerPool } from 'Workers'
import wordCounter from 'Workers/word-counter.worker.js'
import wordCountMerger from 'Workers/word-count-merger.worker.js'

// facilitates async tests
import regeneratorRuntime from 'regenerator-runtime'

const reduceSubChunkCounts = async subChunkCounts => {
  const numberOfPairSums = Math.log2(subChunkCounts.length)
  if (!Number.isInteger(numberOfPairSums)) {
    throw new Error('The requested subchunking strategy is unpairable. Use a power of 2 instead.')
  }
  for (let j = 1; j <= numberOfPairSums; j++) {
    subChunkCounts = await promisedWorkerPool(
      wordCountMerger,
      Math.pow(2, numberOfPairSums - j),
      subChunkCounts
    )
  }
  return subChunkCounts[0]
}

export default async file => {
  let wordCounts = {}
  const chunkSize = 50000
  const numberOfSubChunks = 2 * 2 * 2 // keep it in 2s so we can sum the subchunk results in pairs

  const fileString = await streamFile(file)
  const wordArray = matchWords(fileString)

  for (let i = 0; i < Math.ceil(wordArray.length / chunkSize); i++) {
    const chunk = wordArray.slice(i * chunkSize, ((i + 1) * chunkSize))
    const subChunkCounts = await promisedWorkerPool(wordCounter, numberOfSubChunks, chunk)
    const chunkWordCounts = await reduceSubChunkCounts(subChunkCounts)

    wordCounts = await promisedWorker(wordCountMerger, [wordCounts, chunkWordCounts])
  }

  const topWords = getTopWordsFromCounts(wordCounts)

  return topWords
}
