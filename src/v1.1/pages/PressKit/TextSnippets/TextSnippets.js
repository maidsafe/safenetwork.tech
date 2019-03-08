import React from 'react'

import TextSnippet from 'components/TextSnippet'

import { genRandomKey } from 'src/utils'

import './textSnippets.sass'

const TextSnippets = props => {
  const { data } = props

  return (
    <div className="textSnippets">
      <div className="textSnippets__wrap">
        {
          data.map(text => <TextSnippet key={genRandomKey()} {...text} />)
        }
        <div className="textSnippets__shadow">{' '}</div>
        <div className="textSnippets__rowBg">{' '}</div>
      </div>
    </div>
  )
}

export default TextSnippets
