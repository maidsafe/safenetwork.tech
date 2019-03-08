import React from 'react'

import FAQItem from './FAQItem'

import './faqSection.sass'

const FAQSection = props => {
  const { content } = props
  const { title, items } = content

  return (
    <div className="faqsSection">
      <div className="faqsSection__wrap">
        <div className="faqsSection__title"><h3 className="header3__default">{title}</h3></div>
        {
          (items && items.length >= 0) ? (
            items.map(item => <FAQItem key={genRandomKey()} content={item} />)
          ) : null
        }
      </div>
    </div>
  )
}

export default FAQSection
