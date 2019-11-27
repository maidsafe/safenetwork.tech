import React from 'react'

import Button from 'components/Button'
import QASection from 'components/QASection'

import { prefixClassName, genRandomKey, openLink } from 'utils'

import './faqs.sass'

const baseClassName = 'GetInvolvedFAQ'
const cn = prefixClassName(baseClassName)

const FAQs = props => {
  const { content } = props
  const { sections, CTA } = content
  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        {
          (sections && sections.length >=0) ? (
            sections.map(section => <QASection key={genRandomKey()} content={section} />)
          ) : null
        }
        <div className={cn('more')}>
          <div className={cn('cta')}>
            <Button className="hollow" onClick={() => openLink(CTA.url)}>{CTA.name}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs
