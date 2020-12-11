// facilitates async tests
import regeneratorRuntime from 'regenerator-runtime'

const streamFile = file => (
  new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('A file stream was requested but no file was provided'))
    }

    let fileString = ''

    const reader = file.stream().getReader()
    const pump = reader => {
      return reader.read().then(({ value, done }) => {
        if (done) {
          resolve(fileString)
          return
        }
        const decoder = new TextDecoder()
        fileString += decoder.decode(value)
        return pump(reader)
      })
    }
    return pump(reader)
  })
)

export default streamFile
