import getTopWordsFromCounts from './get-top-words-from-counts'

const testCounts = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

test('Returns top 3 words given just an object of { [word]: count }', () => {
  expect(getTopWordsFromCounts(testCounts)).toEqual({ e: 5, d: 4, c: 3 })
})

test('Returns top 2 words given an object of { [word]: count } and a resultLength of 2', () => {
  expect(getTopWordsFromCounts(testCounts, 2)).toEqual({ e: 5, d: 4 })
})

test('Returns top 4 words given an object of { [word]: count } and a resultLength of 4', () => {
  expect(getTopWordsFromCounts(testCounts, 4)).toEqual({ e: 5, d: 4, c: 3, b: 2 })
})

test('Returns one result if given only one word', () => {
  expect(getTopWordsFromCounts({ a: 1 })).toEqual({ a: 1 })
})

test('Returns one result if given only one word and a resultLength of 2', () => {
  expect(getTopWordsFromCounts({ a: 1 }, 2)).toEqual({ a: 1 })
})

test('Returns an empty object if given an empty object', () => {
  expect(getTopWordsFromCounts({ })).toEqual({ })
})
