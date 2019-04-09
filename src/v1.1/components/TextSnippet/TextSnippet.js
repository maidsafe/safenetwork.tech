import React from 'react'
import classNames from 'classnames'

import Paragraph from './Paragraph'

import './textSnippet.sass'
const HEADERS = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
}

const TextSnippet = props => {
  const {
    title,
    titleSize = HEADERS.H3,
    text,
    textSize,
    children,
  } = props

  let header = null
  if (title) {
    const headerClasses = 'textSnippet__title'
    switch(titleSize) {
      case HEADERS.H1:
        header = <h1 className={headerClasses}>{title}</h1>
        break;
      case HEADERS.H2:
        header = <h2 className={headerClasses}>{title}</h2>
        break;
      case HEADERS.H3:
        header = <h3 className={headerClasses}>{title}</h3>
    }
  }

  return (
    <div className="textSnippet">
      <div className="textSnippet__wrap">
        {header}
        <Paragraph text={text} textSize={textSize} />
        {children}
      </div>
    </div>
  )
}

export default TextSnippet
