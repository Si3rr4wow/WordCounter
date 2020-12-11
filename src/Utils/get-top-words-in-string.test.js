import getTopWordsInString from './get-top-words-in-string'

const testString = `In a village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`

test('Resturns the most common words in the string with their frequency', () => {
  expect(getTopWordsInString(testString)).toEqual({ a: 6, of: 5, on: 4 })
})
