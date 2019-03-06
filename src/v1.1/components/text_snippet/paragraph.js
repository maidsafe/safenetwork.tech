import React from 'react'
import classNames from 'classnames'

import { genRandomKey, parseMDText } from '~src/utils'

const Para = props => {
  const { text, textSize } = props
  const classes = classNames('textSnippet__para', {
    introText__default: (textSize === 'L'),
    bodyText__default: !textSize,
  })

  if (typeof text === 'object') {
    return text.map(t => (
      <div key={genRandomKey()} className={classes}>{parseMDText(t)}</div>
    ))
  }
  return (
    <div className={classes}>{parseMDText(text)}</div>)
}

export default Para
