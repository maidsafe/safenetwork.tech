import React from 'react'

import Button from 'components/Button'

import { openLink } from 'utils'

import './logoDownload.sass'

const LogoDownload = props => {
  const {
    imgSrc,
    imgAlt,
    buttonName = 'Download',
    downloadLink,
  } = props
  return (
    <div className="logoDownload">
      <div className="logoDownload__wrap">
        <div className="logoDownload__media">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="logoDownload__button">
          <Button
            className="hollow icon download"
            onClick={() => {
              openLink(downloadLink)
            }}
          >{buttonName}</Button>
        </div>
      </div>
    </div>
  )
}

export default LogoDownload
