import React from 'react'
import classNames from 'classnames'
//
import CCLogo from '~images/downloads/cc.svg'
import { genRandomKey, parseMDText } from '../../utils'
//
import './style.sass'

const DownloadContainer = props => {
  const {
    data,
    children,
    isSmall,
    isDocument,
  } = props
  return (
    <div className="downloadContainer">
      <div className="downloadContainer__context">
        <h3 className="downloadContainer__title">{data.title}</h3>
        <p className="downloadContainer__para">{data.para}</p>
      </div>
      <div className={classNames('downloadContainer__downloads', {
        small: isSmall,
        document: isDocument,
      })}>{children}
      </div>
    </div>
  )
}

const LogoDownloads = props => {
  const { imgSrc, imgAlt, buttonName = 'Download' } = props
  return (
    <div className="logoDownloads">
      <div className="logoDownloads__wrap">
        <div className="logoDownloads__media">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="logoDownloads__button">
          <button className="btn">{buttonName}</button>
        </div>
      </div>
    </div>
  )
}

const ImagePackDownloads = props => {
  const { imgSrc, imgAlt, buttonName = 'Download Image Pack' } = props
  return (
    <div className="imagePackDownloads">
      <div className="imagePackDownloads__wrap">
        <div className="imagePackDownloads__media">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="imagePackDownloads__button">
          <button className="btn">{buttonName}</button>
        </div>
      </div>
    </div>
  )
}

const DocumentDownloads = props => {
  const { title, para, buttonName } = props
  return (
    <div className="documentDownloads">
      <div className="documentDownloads__wrap">
        <div className="documentDownloads__content">
          <h4 className="documentDownloads__title">{title}</h4>
          <p className="documentDownloads__para">{para}</p>
        </div>
        <div className="documentDownloads__button">
          <button className="btn">{buttonName}</button>
        </div>
      </div>
    </div>
  )
}

const AssetsDownload = props => {
  const { data: content, logos = [], imagePack } = props

  return (
    <div className="assetDownloads">
      <div className="assetDownloads__wrap">
        <div className="assetDownloads__title"><h2>{content.title}</h2></div>
        {
          // Logo assets
          (logos && logos.length > 0) ? (
            <DownloadContainer data={content.logos}>
              {
                logos.map(logo => <LogoDownloads key={genRandomKey()} {...logo} />)
              }
              <div className="logoDownloads__credit">
                <div className="creditPara">{parseMDText(content.logos.credit)}</div>
                <div className="creditLogo"><img src={CCLogo} alt="CC logo" /></div>
              </div>
            </DownloadContainer>
          ) : null
        }
        {
          // Image pack asset
          imagePack ? (
            <DownloadContainer data={content.images} isSmall>
              <ImagePackDownloads {...imagePack} />
            </DownloadContainer>
          ) : null
        }
        <DownloadContainer data={content.documents} isSmall isDocument>
          {
            (content.documents.list && content.documents.list.length > 0) ? content.documents.list.map(li => (
              <DocumentDownloads
                key={genRandomKey()}
                title={li.title}
                para={li.para}
                buttonName="Download"
              />
            )) : null
          }
        </DownloadContainer>
      </div>
    </div>
  )
}

export default AssetsDownload

