import React from 'react'

import PageBanner from 'components/PageBanner'
import { prefixClassName } from 'src/utils'

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
          <figure>
            <video
              tabIndex="-1"
              src={video.url}
              controls="controls"></video>
            <figcaption>{video.caption}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Banner
