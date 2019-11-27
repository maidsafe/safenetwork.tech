import React from 'react'

import PageBanner from 'components/PageBanner'
import QASection from 'components/QASection'

import { genRandomKey } from 'utils'
import content from './content'

import './faqs.sass'

const FAQs = () => {
  const { title, sections } = content

  return (
    <section className="faqs">
      <div className="faqs__wrap">
        <div className="faqs__banner">
          <PageBanner title={title} />
        </div>
        {
          sections.map(section => <QASection key={genRandomKey()} content={section} />)
        }
      </div>
    </section>
  )
}

export default FAQs
