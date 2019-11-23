import React from 'react'
import classNames from 'classnames'

import { genRandomKey, parseMDText } from 'utils'

const Paragraph = props => {
  const { text, textSize } = props
  const classes = classNames('textSnippet__para', {
    introText: (textSize === 'L')
  })

  if (typeof text === 'object') {
    return (
      <div className={classes}>{text.map(t => parseMDText(t))}</div>
    )
  }
  return (
    <div className={classes}>{parseMDText(text)}</div>)
}

export default Paragraph
