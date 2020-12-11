export default topWords => {
  return Object.entries(topWords).sort(([wordA, countA], [wordB, countB]) =>
    countB - countA
  ).map(([word, count]) => ({ word, count }))
}
