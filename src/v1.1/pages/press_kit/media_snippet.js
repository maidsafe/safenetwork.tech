import React from 'react'
import classNames from 'classnames'

const MediaSnippet = props => {
  const {
    id,
    content,
    imgSrc,
    imgTitle,
  } = props

  return (
    <div className={classNames('mediaSnippet', id)}>
      <h3 className="mediaSnippet__para blockquote">{content.para}</h3>
      <div className="mediaSnippet__logo">
        <img src={imgSrc} alt={imgTitle} />
      </div>
    </div>
  )
}

export default MediaSnippet
