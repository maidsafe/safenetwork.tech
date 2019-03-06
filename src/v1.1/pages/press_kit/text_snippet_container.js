import React from 'react'

import TextSnippet from '~components/text_snippet/index'

import { genRandomKey } from '~src/utils'

const TextSnippetContainer = props => {
  const { data } = props

  return (
    <div className="textSnippetContainer">
      <div className="textSnippetContainer__wrap">
        {
          data.map(text => <TextSnippet key={genRandomKey()} {...text} />)
        }
        <div className="textSnippetContainer__shadow">{' '}</div>
        <div className="textSnippetContainer__rowBg">{' '}</div>
      </div>
    </div>
  )
}

export default TextSnippetContainer
