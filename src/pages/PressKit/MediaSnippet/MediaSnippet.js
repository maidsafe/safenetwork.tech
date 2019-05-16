import React from 'react'
import { Link } from 'react-static'
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
    <Link className={classNames('mediaSnippet', id)} to={url}>
      <div className="mediaSnippet__wrap">
        <blockquote className="mediaSnippet__para">{content.para}</blockquote>
          <div className="mediaSnippet__logo">
            <img src={imgSrc} alt={imgTitle} />
        </div>
      </div>
    </Link>
  )
}

export default MediaSnippet
