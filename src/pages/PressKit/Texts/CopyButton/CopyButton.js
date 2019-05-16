import React from 'react'
import classNames from 'classnames'
import copyClip from 'copy-to-clipboard'

import Button from 'components/Button'

const CopyButton = props => {
  const { children = 'Copy Text Snippet', type, copyText = '' } = props
  return (
    <div className="copyButton">
      <Button
        className={classNames({
          primary: (type === 'primary'),
        })}
        size="L"
        onClick={() => {
          copyClip(copyText)
        }}
      >{children}</Button>
    </div>
  )
}

export default CopyButton
