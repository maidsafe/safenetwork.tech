import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import TextSnippet from 'components/TextSnippet'
import UnderlinedLink from 'components/UnderlinedLink'
import { prefixClassName, parseMDText, genRandomKey, spinalCase, openLink } from 'utils'
import MacPro from 'assets/images/macBook_pro.png'

import './topic.sass'

const baseClassName = 'HIWTopic'
const cn = prefixClassName(baseClassName)

const Topic = props => {
  const { content } = props
  const { name, desc = [], aside} = content

  const getPara = (p) => {
    return <p key={genRandomKey()}>{parseMDText(p, true)}</p>
  }

  const getAside = (topicName, asideContent) => {
    let asideEle = null
    if (asideContent) {
      if (topicName === 'Browsing') {
        asideEle = (
          <div key={genRandomKey()} className={cn('aside1')}>
            <div className={'desc'}><div className="caption">{asideContent.para}</div></div>
            <Button className="primary" onClick={() => {
              openLink(asideContent.CTA.url)
            }}>{asideContent.CTA.name}</Button>
            <div className={'fig'}><img src={MacPro} alt="Get Involved" /></div>
          </div>
        )
      }
      if (topicName === 'Where Is Data Stored?') {
        asideEle = (
          <div key={genRandomKey()} className={classNames(cn('aside2'), 'underlineLink-bright-onYellow')}>
            <TextSnippet text={asideContent.para} title={asideContent.title} />
            <UnderlinedLink url={asideContent.CTA.url}>{asideContent.CTA.name}</UnderlinedLink>
          </div>
        )
      }
    }
    return asideEle
  }

  return (
    <div id={spinalCase(name)} className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('name')}><div className="overline">{name}</div></div>
        <div className={cn('content')}>
          {
            desc.map(d => (
              <div key={genRandomKey()} className={cn('texts')}>
                <h3 className={cn('textsTitle')}>{d.title}</h3>
                <div className={classNames(cn('textsPara'), {
                  asideBrowser: (name === 'Browsing')
                })}>
                  {
                    (typeof d.para === 'string') ? getPara(d.para) : (
                      d.para.map((p, index) => {
                        const arrEle = []
                        if (aside && index === aside.position - 1) {
                          arrEle.push(getAside(name, aside))
                        }
                        arrEle.push(getPara(p))
                        return arrEle
                      })
                    )
                  }
                  {
                    d.quote ? (
                      <blockquote className={cn('quote')}>{d.quote}</blockquote>
                    ) : null
                  }
                </div>
              </div>
             ))
          }
        </div>
      </div>
    </div>
  )
}

export default Topic
