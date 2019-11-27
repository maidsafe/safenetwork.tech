import React from 'react'

import DownloadContainer from '../DownloadContainer'
import Button from 'components/Button'

import { openLink } from 'utils'

import './imagesDownload.sass'

const ImagesDownload = props => {
  const { content, imagePack } = props
  const {
    imgSrc,
    imgAlt,
    buttonName = 'Download Image Pack',
    downloadLink,
  } = imagePack

  return (
    <DownloadContainer data={content} isSmall>
      <div className="imageDownload">
        <div className="imageDownload__wrap">
          <div className="imageDownload__media">
            <img src={imgSrc} alt={imgAlt} />
          </div>
          <div className="imageDownload__button">
            <Button
              className="hollow icon download"
              onClick={() => {
                openLink(downloadLink)
              }}
            >{buttonName}</Button>
          </div>
        </div>
      </div>
    </DownloadContainer>
  )
}

export default ImagesDownload
