import React from 'react'

import Button from 'components/Button'
import TextSnippet from 'components/TextSnippet'
import UnderlinedLink from 'components/UnderlinedLink'
import QASection from 'components/QASection'
import Banner from './Banner'
import { prefixClassName, genRandomKey, openLink } from 'src/utils'
import content from './content'
import CONSTANTS from 'src/v1.1/constant'

import Poloniex from 'images/exchange_poloniex.png'
import Hitbtc from 'images/exchange_hitbtc.png'
import Cryptopia from 'images/exchange_cryptopia.png'
import Openledger from 'images/exchange_openledger.png'
import Bitker from 'images/exchange_bitker.png'

import './safeCoin.sass'

const baseClassName = 'SafeCoin'
const cn = prefixClassName(baseClassName)

const EXCHANGE_IMGS = {
  Poloniex: Poloniex,
  HitBTC: Hitbtc,
  Cryptopia: Cryptopia,
  Openledger: Openledger,
  Bitker: Bitker,
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
                <Button className="icon external">{textBlock2.CTA.name}</Button>
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
                          <a href={ex.url}>
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
            <div className={cn('texture1')}></div>
            <div className={cn('bgDark')}></div>
            <div className={cn('buySafeCoinBg')}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SafeCoin
