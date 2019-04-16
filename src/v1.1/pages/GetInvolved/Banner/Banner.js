import React from 'react'

import PageBanner from 'components/PageBanner'

import './banner.sass'

const Banner = (props) => {
  const { title, desc } = props
  return (
    <div className="GetInvolvedBanner">
      <PageBanner title={title} />
      <div className="GetInvolvedBanner__content">
        <div className="GetInvolvedBanner__intro introText"><p>{desc}</p></div>
        <div className="GetInvolvedBanner__texture"></div>
      </div>
    </div>
  )
}

export default Banner
