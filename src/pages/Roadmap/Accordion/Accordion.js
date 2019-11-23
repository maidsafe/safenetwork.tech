import React from 'react'

import { prefixClassName, genRandomKey } from 'utils'

import './accordion.sass'

const baseClassName = 'RoadmapAccordion'
const cn = prefixClassName(baseClassName)

const Accordion = props => {
  const { header, children } = props

  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('header')}>
          {
            header.map(h => (
              <div key={genRandomKey()} className={cn('headerItem')}>{h}</div>
            ))
          }
        </div>
        <div className={cn('container')}>{children}</div>
      </div>
    </div>
  )
}

export default Accordion
