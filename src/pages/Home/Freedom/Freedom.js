import React from 'react'
import classNames from 'classnames'

import MainTextPanel from '../MainTextPanel'
import QuotePanel from '../QuotePanel'
import TextPanel from '../TextPanel'
import BGVideo from 'components/BGVideo'
import { prefixClassName } from 'utils'

import wave1 from 'assets/videos/wave_1.mp4'
import wave1Web from 'assets/videos/wave_1.webm'
import wave2 from 'assets/videos/wave_2.mp4'
import wave2Web from 'assets/videos/wave_2.webm'

import './freedom.sass'

const baseClassName = 'HomeFreedom'
const cn = prefixClassName(baseClassName)

const Freedom = props => {
  const { content } = props
  const { title, para, CTA, founderQuote, aside1, aside2 } = content

  return (
    <div className={baseClassName} id="freedom">
      <div className={cn('wrap')}>
        <div className={classNames(cn('mainText'), 'underlineLink-bright-onYellow')}>
          <MainTextPanel title={title} text={para} CTA={CTA} />
        </div>
        <div className={cn('quote')}>
          <QuotePanel>
            <div className={cn('quotePara')}>{founderQuote.para}</div>
            <div className={cn('quoteName')}>{founderQuote.by}</div>
          </QuotePanel>
        </div>
        <div className={cn('aside1')}>
          <TextPanel {...aside1} />
        </div>
        <div className={cn('aside2')}>
          <TextPanel {...aside2} />
        </div>
        <div className={cn('video1')}>
          <BGVideo src={wave2} webmSrc={wave2Web} height={'700px'} />
        </div>
        <div className={cn('video2')}>
          <BGVideo src={wave1} webmSrc={wave1Web} height={'500px'} position="BOTTOM_RIGHT" />
        </div>
        <div className={cn('texture')}></div>
        <div className={cn('yellowBg')}></div>
      </div>
    </div>
  )
}

export default Freedom
