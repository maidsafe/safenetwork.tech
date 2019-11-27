import React from 'react'

import MainTextPanel from '../MainTextPanel'
import QuotePanel from '../QuotePanel'
import TextPanel from '../TextPanel'
import { prefixClassName } from 'utils'

import './privacy.sass'

const baseClassName = 'HomePrivacy'
const cn = prefixClassName(baseClassName)

const Privacy = props => {
  const { content } = props
  const { title, para, CTA, quote, aside1 } = content

  return (
    <div className={baseClassName} id="privacy">
      <div className={cn('wrap')}>
        <div className={cn('mainText')}>
          <MainTextPanel title={title} text={para} CTA={CTA} />
        </div>
        <div className={cn('quote')}>
          <QuotePanel>
            <div className={cn('quotePara')}>{quote.para}</div>
          </QuotePanel>
        </div>
        <div className={cn('aside')}>
          <TextPanel {...aside1} />
        </div>
        <div className={cn('texture1')}></div>
        <div className={cn('texture2')}></div>
        <div className={cn('texture3')}></div>
      </div>
    </div>
  )
}

export default Privacy
