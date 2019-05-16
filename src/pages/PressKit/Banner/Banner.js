import React from 'react'

import PageBanner from 'components/PageBanner'

import './banner.sass'

const Banner = props => {
  const { title } = props
  return (
    <div className="pressKitBanner"><PageBanner title={title} /></div>
  )
}

export default Banner
