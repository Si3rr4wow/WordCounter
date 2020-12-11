import React, { useState } from 'react'

import { Card, CardBody, CardHeader, Input, Spinner } from 'reactstrap'
import { TopWords } from 'Components'

import {
  getTopWordsInFile
} from 'Utils'

const defaultState = {
  loading: false,
  workersProcessing: false,
  error: null,
  topWords: {}
}

const FileCounter = () => {
  const [state, setState] = useState(defaultState)

  const handleChange = async event => {
    const [file] = event.currentTarget.files
    if (file?.size > 1024 * 1024 * 2) {
      setState(s => ({ ...defaultState, error: new Error('The file you selected is too large. Please Try another one.') }))
      return
    }
    setState(s => ({ ...defaultState, loading: true }))
    let nextTopWords = {}
    try {
      nextTopWords = await getTopWordsInFile(file)
    } catch (error) {
      setState(s => ({ ...s, loading: false, error }))
      return
    }
    setState(s => ({ ...s, loading: false, topWords: nextTopWords }))
  }

  return (
    <Card>
      <CardHeader>
        <h4>
          Use me if you&apos;ve got a larger file to analyse.
        </h4>
      </CardHeader>
      <CardBody>
        <p>I spin up web workers to count the words in the file you pass me. This means that the event loop doesn&apos;t get clogged up during the long running process.</p>
        <Input type="file" onChange={handleChange} disabled={state.loading}/>
        {
          state.loading ? <Spinner/> : null
        }
        {
          state.error ? (
            <div>
              <h5>Something went wrong</h5>
              <p>{state.error.message}</p>
            </div>
          ) : null
        }
        {
          Object.keys(state.topWords).length ? <TopWords topWords={state.topWords}/> : null
        }
      </CardBody>
    </Card>
  )
}

export default FileCounter
