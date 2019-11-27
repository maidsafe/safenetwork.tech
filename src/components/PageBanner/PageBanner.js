import React from 'react'

import { genRandomKey } from 'utils'

import './pageBanner.sass'

const PageBanner = props => {
  const { title, children } = props
  let titleEle = ''
  if (children) {
    titleEle = children
  } else {
    titleEle = []
    title.split('\n').forEach(t => titleEle.push([t, <br key={genRandomKey()}/>]))
  }

  return (
    <div className="pageBanner">
      <div className="pageBanner__wrap">
        <h1 className="pageBanner__title">
          {titleEle}
        </h1>
      </div>
    </div>
  )
}

export default PageBanner
