import React from 'react'

import MainTextPanel from '../MainTextPanel'
import TextPanel from '../TextPanel'
import BGVideo from 'components/BGVideo'
import { prefixClassName } from 'utils'

import spark1 from 'assets/videos/spark_1.mp4'
import spark1Web from 'assets/videos/spark_1.webm'
import spark2 from 'assets/videos/spark_2.mp4'
import spark2Web from 'assets/videos/spark_2.webm'

import './economy.sass'

const baseClassName = 'HomeEconomy'
const cn = prefixClassName(baseClassName)

const Economy = props => {
  const { content } = props
  const { title, para, CTA, aside1, aside2, aside3, aside4 } = content

  return (
    <div className={baseClassName} id="economy">
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
          <BGVideo src={spark1} webmSrc={spark1Web} height={'500px'} position="BOTTOM_LEFT"/>
        </div>
        <div className={cn('video2')}>
          <BGVideo src={spark2} webmSrc={spark2Web} height={'500px'} position="BOTTOM_LEFT" />
        </div>
        <div className={cn('video3')}>
          <BGVideo src={spark2} webmSrc={spark2Web} height={'500px'} position="TOP_LEFT" />
        </div>
      </div>
    </div>
  )
}

export default Economy
