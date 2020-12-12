import React from 'react'
import PropTypes from 'proptypes'

import { sortTopWords } from 'Utils'

const TopWords = ({ topWords }) => {
  const sortedTopWords = sortTopWords(topWords)
  const topWordsArray = sortedTopWords.map(({ word }) => (
    word
  ))
  return (
    <>
      <h3>
        Top Words With Counts:
      </h3>
      {
        sortedTopWords.map(({ word, count }) =>
          <p key={word}>{word}: {count}</p>
        )
      }
      <h3>
        Top Words As an Array:
      </h3>
      <code>
      {
        JSON.stringify(topWordsArray)
      }
      </code>
    </>
  )
}

TopWords.propTypes = {
  topWords: PropTypes.object
}

export default TopWords
