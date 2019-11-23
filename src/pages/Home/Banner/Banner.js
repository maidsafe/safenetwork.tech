import React from 'react'
import classNames from 'classnames'

import PageBanner from 'components/PageBanner'
import UnderlinedLink from 'components/UnderlinedLink'
import BGVideo from 'components/BGVideo'
import { prefixClassName, parseMDText } from 'utils'

import wave1 from 'assets/videos/wave_1.mp4'
import wave1Web from 'assets/videos/wave_1.webm'
import wave2 from 'assets/videos/wave_2.mp4'
import wave2Web from 'assets/videos/wave_2.webm'

import './banner.sass'

const baseClassName = 'HomeBanner'
const cn = prefixClassName(baseClassName)

const Banner = props => {
  const { content } = props
  const { title, desc, aside } = content

  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('title')}>
          <PageBanner title={title} />
        </div>
        <div className={classNames(cn('intro'), 'introText')}>{parseMDText(desc)}</div>
        <div className={cn('aside')}>
          <div className={cn('asideWrap')}>
            <div className={cn('asideDesc')}>
              <p>{aside.para}</p>
            </div>
            <UnderlinedLink url={aside.CTA.url}>{aside.CTA.name}</UnderlinedLink>
          </div>
        </div>
        <div className={cn('asideBg')}></div>
        <div className={cn('video1')}>
          <BGVideo src={wave1} webmSrc={wave1Web} width={'1000px'} />
        </div>
        <div className={cn('video2')}>
          <BGVideo src={wave2} webmSrc={wave2Web} height={'700px'} position="BOTTOM_LEFT" />
        </div>
      </div>
    </div>
  )
}

export default Banner
