import React from 'react'
//
import PageBanner from '../../components/page_banner/index'
import FAQSection from '../../components/faq_section/index'
import { genRandomKey } from '../../utils'
//
import content from './content.json'
import './style.sass'

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
