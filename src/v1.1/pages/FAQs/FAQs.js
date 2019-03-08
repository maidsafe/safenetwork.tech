import React from 'react'

import PageBanner from 'components/PageBanner'
import FAQSection from 'components/FAQSection'

import { genRandomKey } from 'src/utils'

import content from './content.json'
import './faqs.sass'

const FAQBanner = props => (
  <div className="faqs__banner">
    <PageBanner title={props.title} />
  </div>
)

const FAQs = () => {
  const { title, sections } = content

  return (
    <section className="faqs">
      <div className="faqs__wrap">
        <FAQBanner title={title} />
        {
          (sections && sections.length >=0) ? (
            sections.map(section => <FAQSection key={genRandomKey()} content={section} />)
          ) : null
        }
      </div>
    </section>
  )
}

export default FAQs
