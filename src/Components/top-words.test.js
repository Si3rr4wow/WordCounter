import React from 'react'
import renderer from 'react-test-renderer'
import TopWords from './top-words'

it('Renders the top words display', () => {
  const tree = renderer
    .create(<TopWords topWords={{ a: 3, b: 2, c: 1 }}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
