import React from 'react'
import classNames from 'classnames'
import copyClip from 'copy-to-clipboard'

import Button from '~components/button/index'

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

export default CopyButton
