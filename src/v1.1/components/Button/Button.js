import React from 'react'
import classNames from 'classnames'

import './button.sass'

const Button = props => {
  const { children, className } = props

  return (
    <button className={classNames('btn buttonText', className)}>{children}</button>
  )
}

export default Button
