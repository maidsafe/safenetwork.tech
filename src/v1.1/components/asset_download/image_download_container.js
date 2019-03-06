import React from 'react'

import DownloadContainer from './download_container'
import ImageDownload from './image_download'

const ImageDownloadContainer = props => {
  const { content, imagePack } = props
  return (
    <DownloadContainer data={content} isSmall>
      <ImageDownload {...imagePack} />
    </DownloadContainer>
  )
}

export default ImageDownloadContainer
