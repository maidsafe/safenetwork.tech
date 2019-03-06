import React from 'react'

import LogoDownloadContainer from './logo_download_container'
import ImageDownloadContainer from './image_download_container'
import DocumentDownloadContainer from './document_download_container'

import './style.sass'

const AssetDownloads = props => {
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
    <div className="assetDownloads">
      <div className="assetDownloads__wrap">
        <div className="assetDownloads__title">
          <h2 className="header2__default">{title}</h2>
        </div>
        {
          // Logo assets
          (logos && logos.length > 0) ? (<LogoDownloadContainer content={logoContent} logos={logos} />) : null
        }
        {
          // Image pack asset
          imagePack ? (<ImageDownloadContainer content={images} imagePack={imagePack} />) : null
        }
        <DocumentDownloadContainer content={documentContent} documents={documents} />
      </div>
    </div>
  )
}

export default AssetDownloads

