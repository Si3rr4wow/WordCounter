import getWordCountsInString from './get-word-counts-in-string'

const mixedCaseTestString = 'e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e'
const punctuatedTestString = " //wont won't won't"

test('Returns an object of [word]: count pairs for every word in a string with mixed case', () => {
  expect(getWordCountsInString(mixedCaseTestString)).toEqual({ e: 7, ddd: 5, aa: 3, cc: 2, bb: 1 })
})

test('Returns an object of [word]: count pairs for every word in a string, grouping those with apostrophes separately', () => {
  expect(getWordCountsInString(punctuatedTestString)).toEqual({ wont: 1, "won't": 2 })
})
