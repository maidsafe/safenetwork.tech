import React from 'react'

import PageBanner from 'components/PageBanner'
import QASection from 'components/QASection'

import { genRandomKey } from 'src/utils'
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
          (sections && sections.length >=0) ? (
            sections.map(section => <QASection key={genRandomKey()} content={section} />)
          ) : null
        }
      </div>
    </section>
  )
}

export default FAQs
