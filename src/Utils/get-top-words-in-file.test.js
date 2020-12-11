import getTopWordsInFile from './get-top-words-in-file'

const testFile = new File([`In a village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`], 'test.txt', {
  type: 'text/plain'
})

// Jest doesn't like passing these files around so this test fails. I've left it
// here for completeness.

test('Resturns the most common words in the string with their frequency', async () => {
  expect(await getTopWordsInFile(testFile)).toEqual({ a: 6, of: 5, on: 4 })
})
