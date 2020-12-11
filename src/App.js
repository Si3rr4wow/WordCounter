import React from 'react'

import { Container } from 'reactstrap'
import { FileCounter, InputCounter } from 'Components'

const App = () => {
  return (
    <Container>
      <h1>
        I&apos;m a handy tool for counting words
      </h1>
      <InputCounter/>
      <hr/>
      <FileCounter/>
    </Container>
  )
}

export default App
