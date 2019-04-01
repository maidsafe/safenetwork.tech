import React from 'react'

import LogosDownload from './LogosDownload'
import ImagesDownload from './ImagesDownload'
import DocsDownload from './DocsDownload'

import './downloads.sass'

const Downloads = props => {
  const {
    data,
    logos = [],
    imagePack,
    documents,
  } = props
  const {
    title,
    logos: logoContent,
    images,
    documents: documentContent,
  } = data

  return (
    <div className="pressKitDownloads">
      <div className="pressKitDownloads__wrap">
        <div className="pressKitDownloads__title">
          <h2 className="header2__default">{title}</h2>
        </div>
        {
          // Logo assets
          (logos && logos.length > 0) ? (<LogosDownload content={logoContent} logos={logos} />) : null
        }
        {
          // Image pack asset
          imagePack ? (<ImagesDownload content={images} imagePack={imagePack} />) : null
        }
        <DocsDownload content={documentContent} documents={documents} />
      </div>
    </div>
  )
}

export default Downloads
