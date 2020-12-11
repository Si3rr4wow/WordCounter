import promisedWorker from './promised-worker'
import { chunkArray } from 'Utils'

export default (workerFile, poolSize, dataArr) => {
  const chunks = chunkArray(dataArr, poolSize)
  const promiseArr = chunks.map(chunk =>
    promisedWorker(workerFile, chunk)
  )
  return Promise.all(promiseArr)
}
