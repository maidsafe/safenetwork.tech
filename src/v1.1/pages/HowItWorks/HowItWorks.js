import React from 'react'

import Button from 'components/Button'
import TextSnippet from 'components/TextSnippet'
import UnderlinedLink from 'components/UnderlinedLink'
import Banner from './Banner'
import Topic from './Topic'
import content from './content'
import { prefixClassName, genRandomKey, openLink } from 'src/utils'
import MacPro from 'images/macBook_pro.png'

import './howItWorks.sass'

const baseClassName = 'HowItWorks'
const cn = prefixClassName(baseClassName)

const HowItWorks = () => {
  const { banner, topics } = content

  return (
    <section className={baseClassName}>
      <div className={cn('wrap')}>
        <Banner content={banner} topics={topics.map(t => t.name)} />
        <div className={cn('topics')}>
          {
            topics.map(topic => {
              let aside = null
              if (topic.aside) {
                if (topic.name === 'Browsing') {
                  aside = (
                    <div className={cn('aside1')}>
                      <div className={'desc'}><div className="caption">{topic.aside.para}</div></div>
                      <Button className="primary" onClick={() => {
                        openLink(topic.aside.CTA.url)
                      }}>{topic.aside.CTA.name}</Button>
                      <div className={'fig'}><img src={MacPro} alt="Get Involved" /></div>
                    </div>
                  )
                }
                if (topic.name === 'Where Is Data Stored?') {
                  aside = (
                    <div className={cn('aside2')}>
                      <TextSnippet text={topic.aside.para} title={topic.aside.title} />
                      <UnderlinedLink url={topic.aside.CTA.url}>{topic.aside.CTA.name}</UnderlinedLink>
                    </div>
                  )
                }
              }
              return (
                <Topic key={genRandomKey()} content={topic}>{aside}</Topic>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
