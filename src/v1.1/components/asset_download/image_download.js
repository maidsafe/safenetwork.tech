import React from 'react'

import Button from '~components/button/index'

import { openLink } from '~src/utils'

const ImageDownload = props => {
  const {
    imgSrc,
    imgAlt,
    buttonName = 'Download Image Pack',
    downloadLink,
  } = props
  return (
    <div className="imageDownload">
      <div className="imageDownload__wrap">
        <div className="imageDownload__media">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="imageDownload__button">
          <Button
            className="hollow download"
            onClick={() => {
              openLink(downloadLink)
            }}
          >{buttonName}</Button>
        </div>
      </div>
    </div>
  )
}

export default ImageDownload
