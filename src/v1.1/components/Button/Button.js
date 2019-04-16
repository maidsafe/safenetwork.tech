import React from 'react'
import classNames from 'classnames'

import './button.sass'

const Button = props => {
  const {
    children,
    className,
    type,
    disabled,
    size,
    onClick,
    active = false,
  } = props

  const sizes = {
    L: 'LARGE'
  }


  return (
    <button
      type={type}
      className={classNames('btn', className, {
        'btn-large': sizes[size] === sizes.L,
        active,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
