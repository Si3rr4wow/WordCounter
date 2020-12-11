export default (array, numberOfChunks) => {
  const chunks = []
  const chunkSize = Math.ceil(array.length / numberOfChunks)
  for (let i = 0; i < numberOfChunks; i++) {
    chunks.push(array.slice(i * chunkSize, ((i + 1) * chunkSize)))
  }
  return chunks
}
