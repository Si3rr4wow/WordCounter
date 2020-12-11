import WebWorker from 'Workers/web-worker'

export default (workerFile, message) => (
  new Promise((resolve, reject) => {
    const worker = new WebWorker(workerFile)
    worker.postMessage(message)
    worker.addEventListener('message', ({ data }) => {
      worker.terminate()
      resolve(data)
    })
    worker.addEventListener('error', error => {
      worker.terminate()
      reject(error)
    })
  })
)
