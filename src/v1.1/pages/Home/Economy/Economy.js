import React from 'react'

import MainTextPanel from '../MainTextPanel'
import TextPanel from '../TextPanel'
import BGVideo from 'components/BGVideo'
import { prefixClassName } from 'src/utils'

import fire1 from 'src/assets/videos/fire_spark.mov'

import './economy.sass'

const baseClassName = 'HomeEconomy'
const cn = prefixClassName(baseClassName)

const Economy = props => {
  const { content } = props
  const { title, para, CTA, aside1, aside2, aside3, aside4 } = content

  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('mainText')}>
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
        <div className={cn('aside4')}>
          <TextPanel {...aside4} />
        </div>
        <div className={cn('video1')}>
          <BGVideo src={fire1} height={'500px'} position="BOTTOM_LEFT"/>
        </div>
        <div className={cn('video2')}>
          <BGVideo src={fire1} height={'500px'} position="BOTTOM_LEFT" />
        </div>
        <div className={cn('video3')}>
          <BGVideo src={fire1} height={'500px'} position="BOTTOM_LEFT" />
        </div>
      </div>
    </div>
  )
}

export default Economy
