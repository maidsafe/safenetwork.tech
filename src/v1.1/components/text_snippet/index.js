import React from 'react'
import classNames from 'classnames'
import copyClip from 'copy-to-clipboard'
//
import Button from '../button/index'
import { genRandomKey, parseMDText } from '../../utils'

import './style.sass'

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

const CopyButton = props => {
  const { name = 'Copy Text Snippet', type, copyText = '' } = props
  return (
    <div className="textSnippet__button">
      <Button
        className={classNames({
          primary: (type === 'primary'),
          dark: (type === 'grey'),
        })}
        onClick={() => {
          copyClip(copyText)
        }}
      >{name}
      </Button>
    </div>
  )
}

const TextSnippet = props => {
  const {
    title,
    titleSize = 'H3',
    text,
    textSize,
    canCopy,
    copyButtonType,
    className,
  } = props

  return (
    <div className={classNames('textSnippet', className)}>
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
        <Para text={text} textSize={textSize} />
        {
          canCopy ? <CopyButton type={copyButtonType} copyText={text} /> : null
        }
      </div>
    </div>
  )
}

export default TextSnippet
