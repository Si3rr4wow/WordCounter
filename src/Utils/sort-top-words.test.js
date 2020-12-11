import sortTopWords from './sort-top-words'

const testObj = {
  a: 2,
  b: 4,
  c: 3,
  d: 1
}

const expectedResult = [{
  word: 'b',
  count: 4
}, {
  word: 'c',
  count: 3
}, {
  word: 'a',
  count: 2
}, {
  word: 'd',
  count: 1
}]

test('Returns words in an ordered array given an object of [word]: count pairs', () => {
  expect(sortTopWords(testObj)).toEqual(expectedResult)
})
