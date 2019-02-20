import React from 'react'
//
import './style.sass'

const PageBanner = props => {
  const { title } = props
  return (
    <div className="pageBanner">
      <div className="pageBanner__wrap">
        <h1 className="pageBanner__title header1__default">{title}</h1>
      </div>
    </div>
  )
}

export default PageBanner
