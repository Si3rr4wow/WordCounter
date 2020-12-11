import React from 'react'
import renderer from 'react-test-renderer'
import InputCounter from './input-counter'

it('Renders the text input', () => {
  const tree = renderer
    .create(<InputCounter/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
