import React from 'react'
import PropTypes from 'proptypes'

import { sortTopWords } from 'Utils'

const TopWords = ({ topWords }) => {
  return (
    <>
      <h3>
        Top Words:
      </h3>
      {
        sortTopWords(topWords).map(({ word, count }) =>
          <p key={word}>{word}: {count}</p>
        )
      }
    </>
  )
}

TopWords.propTypes = {
  topWords: PropTypes.object
}

export default TopWords
