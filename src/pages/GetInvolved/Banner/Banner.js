import React from 'react'

import PageBanner from 'components/PageBanner'
import BGVideo from 'components/BGVideo'

import waveThin1 from 'assets/videos/wave_1_thin.mp4'
import waveThin1Web from 'assets/videos/wave_1_thin.webm'

import './banner.sass'

const Banner = (props) => {
  const { title, desc } = props
  return (
    <div className="GetInvolvedBanner">
      <PageBanner title={title} />
      <div className="GetInvolvedBanner__content">
        <div className="GetInvolvedBanner__intro introText"><p>{desc}</p></div>
        <div className="GetInvolvedBanner__texture"></div>
        <div className="GetInvolvedBanner__video">
          <BGVideo src={waveThin1} webmSrc={waveThin1Web} height={'10px'} />
        </div>
      </div>
    </div>
  )
}

export default Banner
