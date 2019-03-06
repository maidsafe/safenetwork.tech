import React from 'react'

import PageBanner from '~components/page_banner/index'

const Banner = props => {
  const { title } = props
  return (
    <div className="pressKit__banner"><PageBanner title={title} /></div>
  )
}

export default Banner
