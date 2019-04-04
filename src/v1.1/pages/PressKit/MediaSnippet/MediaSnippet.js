import React from 'react'
import classNames from 'classnames'

import './mediaSnippet.sass'

const MediaSnippet = props => {
  const {
    id,
    content,
    imgSrc,
    imgTitle,
  } = props

  return (
    <div className={classNames('mediaSnippet', id)}>
      <div className="mediaSnippet__wrap">
        <blockquote className="mediaSnippet__para">{content.para}</blockquote>
        <div className="mediaSnippet__logo">
          <img src={imgSrc} alt={imgTitle} />
        </div>
      </div>
    </div>
  )
}

export default MediaSnippet
