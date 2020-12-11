import matchWords from './match-words'

test('Returns an array of words given a string of words', () => {
  expect(matchWords('I am some words')).toEqual(['I', 'am', 'some', 'words'])
})

test('Returns null given a word with numbers in it', () => {
  expect(matchWords('y33t')).toBe(null)
})

test('Returns 2 results given a word and the same word with an apostrophy in', () => {
  expect(matchWords("wont won't")).toEqual(['wont', "won't"])
})

test('Returns a one result given a word with multiple apostrophes', () => {
  expect(matchWords("whom'st'd've")).toEqual(["whom'st'd've"])
})
