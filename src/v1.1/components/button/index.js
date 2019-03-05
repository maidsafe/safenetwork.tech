import React from 'react'
import classNames from 'classnames'

import './style.sass'

const Button = props => {
  const { children, className } = props

  return (
    <button className={classNames('btn button-text', className)}>{children}</button>
  )
}

export default Button
