import React from 'react'
import classNames from 'classnames'

import './accordion.sass'

const baseClassName = 'Accordion'
const BG_COLOR = {
  YELLOW: 'yellow',
  SKY: 'sky'
}
const Accordion = props => {
  const { children, bgColor, className } = props

  return (
    <div className={classNames(baseClassName, className, {
      'bg-yellow': bgColor === BG_COLOR.YELLOW,
      'bg-sky': bgColor === BG_COLOR.SKY,
    })}>
      {children}
    </div>
  )
}

export default Accordion
