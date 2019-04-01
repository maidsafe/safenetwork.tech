import React from 'react'
import classNames from 'classnames'

import Paragraph from './Paragraph'

import './textSnippet.sass'

const TextSnippet = props => {
  const {
    title,
    titleSize = 'H3',
    text,
    textSize,
    id,
  } = props

  return (
    <div className="textSnippet">
      <div className="textSnippet__wrap">
        {
          title ? (
            <h3 className={classNames('textSnippet__title', {
              header2__default: titleSize === 'H2',
              header3__default: titleSize === 'H3',
            })}>
              {title}
            </h3>) : null
        }
        <Paragraph text={text} textSize={textSize} />
      </div>
    </div>
  )
}

export default TextSnippet
