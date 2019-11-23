import React from 'react'
import classNames from 'classnames'

import MainTextPanel from '../MainTextPanel'
import TextPanel from '../TextPanel'
import { prefixClassName } from 'utils'

import './data.sass'

const baseClassName = 'HomeData'
const cn = prefixClassName(baseClassName)

const Data = props => {
  const { content } = props
  const { title, para, CTA, aside1, aside2, aside3, aside4 } = content

  return (
    <div className={baseClassName} id="control">
      <div className={cn('wrap')}>
        <div className={classNames(cn('mainText'), 'underlineLink-bright-onDark')}>
          <MainTextPanel title={title} text={para} CTA={CTA} />
        </div>
        <div className={cn('aside1')}>
          <TextPanel {...aside1} />
        </div>
        <div className={cn('aside2')}>
          <TextPanel {...aside2} />
        </div>
        <div className={cn('aside3')}>
          <TextPanel {...aside3} />
        </div>
        <div className={classNames(cn('aside4'), 'underlineLink-bright-onYellow')}>
          <TextPanel {...aside4} />
        </div>
        <div className={cn('texture1')}></div>
        <div className={cn('texture2')}></div>
        <div className={cn('texture3')}></div>
      </div>
    </div>
  )
}

export default Data
