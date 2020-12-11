import React from 'react'
import renderer from 'react-test-renderer'
import FileCounter from './file-counter'

it('Renders the file input', () => {
  const tree = renderer
    .create(<FileCounter/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
