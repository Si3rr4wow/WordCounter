import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

it('Renders the app', () => {
  const tree = renderer
    .create(<App/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
