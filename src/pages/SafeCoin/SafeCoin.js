import React from 'react'

import Button from 'components/Button'
import TextSnippet from 'components/TextSnippet'
import UnderlinedLink from 'components/UnderlinedLink'
import QASection from 'components/QASection'
import Banner from './Banner'
import BGVideo from 'components/BGVideo'
import { prefixClassName, genRandomKey, openLink } from 'utils'
import content from './content'
import CONSTANTS from 'constant'

import sparkThin2 from 'assets/videos/spark_2_thin.mp4'
import sparkThin2Web from 'assets/videos/spark_2_thin.webm'

import Bittrex from 'assets/images/exchange_bittrex.png'
import Hitbtc from 'assets/images/exchange_hitbtc.png'

import SafeCoinPoster from 'assets/images/textures/texture_safecoin.jpg'

import './safeCoin.sass'

const baseClassName = 'SafeCoin'
const cn = prefixClassName(baseClassName)

const EXCHANGE_IMGS = {
  Bittrex: Bittrex,
  HitBTC: Hitbtc
}

const SafeCoin = () => {
  const {
    banner,
    textBlock1,
    textBlock2,
    textBlock3,
    textBlock4,
    textBlock5,
    textBlock6,
    exchanges,
    faqs,
    video
  } = content

  const { sections: faqSections = [] } = faqs

  return (
    <section className={baseClassName}>
      <div className={cn('wrap')}>
        <Banner content={banner} />
        <div className={cn('textBlocks')}>
          <div className={cn('textBlocksWrap')}>
            <div className={cn('video')}>
              <figure>
                <video
                  tabIndex="-1"
                  poster={SafeCoinPoster}
                  controls="controls">
                  <source src={CONSTANTS.videoLinks.security.mp4} type="video/mp4" />
                  <source src={CONSTANTS.videoLinks.security.ogv} type="video/ogg" />
                  <source src={CONSTANTS.videoLinks.security.webm} type="video/webm" />
                </video>
                <figcaption>{video.caption}</figcaption>
              </figure>
            </div>
            <div className={cn('textBlock1')}>
              <TextSnippet title={textBlock1.title} titleSize="H2" text={textBlock1.para} />
            </div>
            <div className={cn('textBlock2')}>
              <TextSnippet title={textBlock2.title} titleSize="H2" text={textBlock2.para} />
              <div className="CTA">
                <Button className="icon external" onClick={() => {
                  openLink(textBlock2.CTA.url, true)
                }}>{textBlock2.CTA.name}</Button>
              </div>
            </div>
            <div className={cn('textBlock3')}>
              <TextSnippet title={textBlock3.title} text={textBlock3.para} />
            </div>
            <div className={cn('textBlock4')}>
              <TextSnippet title={textBlock4.title} text={textBlock4.para} />
              <UnderlinedLink url={textBlock4.CTA.url}>{textBlock4.CTA.name}</UnderlinedLink>
            </div>
            <div className={cn('textBlock5')}>
              <TextSnippet title={textBlock5.title} titleSize="H2" text={textBlock5.para} />
            </div>
            <div className={cn('textBlock6')}>
              <TextSnippet title={textBlock6.title} text={textBlock6.para} />
              <div className={cn('exchange')}>
                  {
                    exchanges.map(ex => (
                      <div key={genRandomKey()} className={cn('exchangeItem')}>
                        <figure>
                          <a href={ex.url} target="_blank">
                            <img src={EXCHANGE_IMGS[ex.name]} />
                            <figcaption>{ex.name}</figcaption>
                          </a>
                        </figure>
                      </div>
                    ))
                  }
              </div>
            </div>
            <div className={cn('faq')}>
              <div className={cn('faqWrap')}>
                {
                  faqSections.map(section => <QASection key={genRandomKey()} content={section} />)
                }
                <div className={cn('more')}>
                  <div className={cn('cta')}>
                    <Button className="hollow" onClick={() => {
                      openLink(faqs.CTA.url)
                    }}>{faqs.CTA.name}</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn('bgVideo')}>
            <BGVideo src={sparkThin2} webmSrc={sparkThin2Web} height={'30px'} />
          </div>
          <div className={cn('bgDark')}></div>
          <div className={cn('buySafeCoinBg')}></div>
        </div>
      </div>
    </section>
  )
}

export default SafeCoin
