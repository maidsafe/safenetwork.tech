import React from 'react'
import classNames from 'classnames'
//
import './style.sass'

const Button = props => {
  const {
    children,
    className,
    type,
    disabled,
    onClick,
  } = props

  return (
    <button
      type={type}
      className={classNames('btn buttonText', className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
