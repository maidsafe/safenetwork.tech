import React from 'react'
import classNames from 'classnames'

import PageBanner from 'components/PageBanner'
import UnderlinedLink from 'components/UnderlinedLink'
import BGVideo from 'components/BGVideo'
import { prefixClassName, parseMDText } from 'src/utils'

import beach1 from 'src/assets/videos/beach_1.mov'
import beach2 from 'src/assets/videos/beach_2.mov'

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
          <BGVideo src={beach1} width={'1000px'} />
        </div>
        <div className={cn('video2')}>
          <BGVideo src={beach2} height={'700px'} position="BOTTOM_LEFT" />
        </div>
      </div>
    </div>
  )
}

export default Banner
