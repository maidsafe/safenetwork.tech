import React from 'react'

import Banner from './Banner'
import Develop from './Develop'
import Engage from './Engage'
import FAQs from './FAQs'
import content from './content'

const GetInvolved = () => {
  return (
    <section className="GetInvolved">
      <div className="GetInvolved__wrap">
        <Banner title={content.title} desc={content.pageDesc} />
        <Develop content={content.develop} invite={content.invite}/>
        <Engage content={content.engage} />
        { /* <FAQs content={content.faqs} /> */}
      </div>
    </section>
  )
}

export default GetInvolved
