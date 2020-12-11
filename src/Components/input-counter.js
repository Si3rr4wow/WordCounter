import React, { useState } from 'react'

import { Card, CardBody, CardHeader, Input } from 'reactstrap'
import { TopWords } from 'Components'

import {
  getTopWordsInString
} from 'Utils'

const defaultState = {
  inputValue: '',
  topWords: {}
}

const FileCounter = () => {
  const [state, setState] = useState(defaultState)

  const handleChange = event => {
    const nextInputValue = event.currentTarget.value
    setState(s => ({
      ...s,
      inputValue: nextInputValue,
      topWords: getTopWordsInString(nextInputValue)
    }))
  }

  return (
    <Card>
      <CardHeader>
        <h4>
          Use me to analyse smaller bodies of text.
        </h4>
      </CardHeader>
      <CardBody>
        <p>I can count the words you type here synchronously</p>
        <Input type="textarea" onChange={handleChange} value={state.inputValue}/>
        {
          Object.keys(state.topWords).length ? <TopWords topWords={state.topWords}/> : null
        }
      </CardBody>
    </Card>
  )
}

export default FileCounter
