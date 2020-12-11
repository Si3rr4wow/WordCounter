import chunkArray from './chunk-array'

test('Splits [1,2,3] into [[1],[2],[3]]', () => {
  expect(chunkArray([1, 2, 3], 3)).toEqual([[1], [2], [3]])
})
