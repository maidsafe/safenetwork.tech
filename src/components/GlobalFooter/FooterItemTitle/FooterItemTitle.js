import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import './footerItemTitle.sass'

const FooterItemTitle = props => {
  const {
    title,
    url,
    active,
    onClick,
  } = props

  if (!title) {
    return <span>{' '}</span>
  }

  const titleElement = (<h3 className="navigationText">{title}</h3>)

  return (
    <div className={classNames('footerItemTitle', {
      active: active
    })} onClick={onClick}>
      {
        url ? (<Link to={url}>{titleElement}</Link>) : titleElement
      }
    </div>
  )
}

export default FooterItemTitle
