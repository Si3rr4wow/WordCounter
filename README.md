# WordCounter

Counts words in strings. 
You can feed your string directly into a text area or supply it as a file. 

The text area processes your string synchronously; the file input processes your string asynchronously.

The asynchronous process utillises [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) to run counts on subsections of larger files in parallel. Because the workers run in separate threads to the main process they do not clog up the the event loop, so we can continue to render new frames while the file is being processed. You can even run synchronous analysis parallel to asynchronous analysis.

## Setup

To get started clone the repository then, inside the project directory, run 
```
npm i
```
Then run the app with
```
npm start
```
Finally visit http://localhost:8080 and enjoy.

You may also wish to run the set of included jests with 
```
npm run test
```

## Appendix

This project was motivated by the following

#### Instructions
Write a function that, given a string of text (possibly with punctuation and
line-breaks), returns an array of the top-3 most occurring words, in descending
order of the number of occurrences.
Assumptions: A word is a string of letters (A to Z) optionally containing one or
more apostrophes (’) in ASCII. (No need to handle fancy punctuation.) Matches
should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily. If a text contains fewer than three unique words,
then either the top-2 or top-1 words should be returned, or an empty array if a
text contains no words.

and

#### Considerations

• Consider how you will prove the correctness of your solution.

• Consider how you will handle large inputs.

• Feel free to comment the code to defend your solution.

• Avoid any non-standard library.

I'll say immediately that I have used non-standard libraries in this task but non of them pertain to how I solved the actual problem. The solution to finding the most common words in a given string is entirely my own and is mostly just a bunch of `Array.reduce`. Therefore although I've bent the rules a little I believe I've done so fairly, and that this projects `dependencies` and `devDependencies` exists solely to present my solution in a (reasonably) pleasent looking UI and to provide unit tests. I configured webpack myself rather than using something like `create-react-app` to keep things as stripped down as possible.

As for the correctness of the solution, I have verified my functions output against examples given along with the problem and subsumed these as unit tests.

Large inputs are handled by the parallelised WebWorkers.

The final output displayed by my UI differest slightly from that requested but I believe this is a feature, not a bug. Rather than an array of plain strings I have chosen to return an array of objects each containing a word and it's count in the given string, sorted in descending count order. This allows me to display not only the most commonly occuring words but also the number of times that word occured.

### Features to add later

I've written the [`getTopWordsFromCounts`](https://github.com/Si3rr4wow/WordCounter/blob/master/src/Utils/get-top-words-from-counts.js) function in such a way that the number of words returned can be changed on a whim. Controlling this from the UI would be nice. 

[`getTopWordsInFile`](https://github.com/Si3rr4wow/WordCounter/blob/master/src/Utils/get-top-words-in-file.js) also has 2 parameters for chunk size (the substring taken from the main file string) and numberOfSubChunks (effectively how many workers will process the chunk). User facing control for these would also be nice.
