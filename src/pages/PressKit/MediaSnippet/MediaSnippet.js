import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './mediaSnippet.sass'

const MediaSnippet = props => {
  const {
    id,
    content,
    imgSrc,
    imgTitle,
    url,
  } = props

  return (
    <a className={classNames('mediaSnippet', id)} href={url} target="_blank">
      <div className="mediaSnippet__wrap">
        <blockquote className="mediaSnippet__para">{content.para}</blockquote>
          <div className="mediaSnippet__logo">
            <img src={imgSrc} alt={imgTitle} />
        </div>
      </div>
    </a>
  )
}

export default MediaSnippet
