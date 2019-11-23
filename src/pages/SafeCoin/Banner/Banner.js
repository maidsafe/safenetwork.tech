import React from 'react'

import PageBanner from 'components/PageBanner'
import BGVideo from 'components/BGVideo'
import { prefixClassName } from 'utils'

import sparkThin1 from 'assets/videos/spark_1_thin.mp4'
import sparkThin1Web from 'assets/videos/spark_1_thin.webm'

import './banner.sass'

const baseClassName = 'SafeCoinBanner'
const cn = prefixClassName(baseClassName)

const Banner = props => {
  const { content } = props
  const { title, desc, video = {} } = content
  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('title')}><PageBanner title={title} /></div>
        <div className={cn('content')}>
          <div className="introText"><p>{desc}</p></div>
        </div>
        <div className={cn('video')}>
          <BGVideo src={sparkThin1} webmSrc={sparkThin1Web} height={'20px'} />
        </div>
      </div>
    </div>
  )
}

export default Banner
