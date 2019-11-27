import React from 'react'
import classNames from 'classnames'

import PageBanner from 'components/PageBanner'
import UnderlinedLink from 'components/UnderlinedLink'
import BGVideo from 'components/BGVideo'
import { prefixClassName, genRandomKey, spinalCase } from 'utils'
import birds from 'assets/videos/birds.mp4'
import birdsWeb from 'assets/videos/birds.webm'

import './banner.sass'

const baseClassName = 'HIWBanner'
const cn = prefixClassName(baseClassName)

const Banner = props => {
  const { content, topics = [] } = props
  const { title, aside } = content

  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('title')}>
          <PageBanner title={title} />
        </div>
        <div className={cn('aside')}>
          <div className={cn('asideWrap')}>
            <div className={classNames(cn('asideDesc'), 'introText')}>
              <p>{aside.para}</p>
            </div>
            <UnderlinedLink url={aside.CTA.url}>{aside.CTA.name}</UnderlinedLink>
          </div>
        </div>
        <div className={cn('topics')}>
          {
            topics.map(t => (
              <div className={cn('topic')} key={genRandomKey()}><UnderlinedLink url={`#${spinalCase(t)}`}>{t}</UnderlinedLink></div>
            ))
          }
        </div>
        <div className={cn('texture2')}></div>
      </div>
      <div className={cn('video1')}>
        <BGVideo src={birds} webmSrc={birdsWeb} height={'1200px'} position="BOTTOM_LEFT"/>
      </div>
    </div>
  )
}

export default Banner
