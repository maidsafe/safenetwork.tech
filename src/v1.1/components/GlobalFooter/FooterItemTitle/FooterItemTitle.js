import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-static'

import './footerItemTitle.sass'

const FooterItemTitle = props => {
  const {
    title,
    to,
    active,
    onClick,
  } = props

  if (!title) {
    return <span>{' '}</span>
  }

  return (
    <div className={classNames('footerItemTitle navigationText', {
      active: active
    })} onClick={onClick}>
      {
        to ? (<Link to={to}><h3>{title}</h3></Link>) : (<h3>{title}</h3>)
      }
    </div>
  )
}

export default FooterItemTitle
