import React from 'react'
import classNames from 'classnames'
//
import Button from '../button/index'
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
        <h3 className="downloadContainer__title header3__default">{data.title}</h3>
        <p className="downloadContainer__para bodyText__default">{data.para}</p>
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
          <Button className="hollow download">{buttonName}</Button>
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
          <Button className="hollow download">{buttonName}</Button>
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
          <h4 className="documentDownloads__title header3__default">{title}</h4>
          <p className="documentDownloads__para bodyText__default">{para}</p>
        </div>
        <div className="documentDownloads__button">
          <Button className="hollow download">{buttonName}</Button>
        </div>
      </div>
    </div>
  )
}

const LogoContainer = props => {
  const { content, logos } = props

  return (
    <DownloadContainer data={content}>
      {
        logos.map(logo => <LogoDownloads key={genRandomKey()} {...logo} />)
      }
      <div className="logoDownloads__credit">
        <div className="creditPara">{parseMDText(content.credit)}</div>
        <div className="creditLogo"><img src={CCLogo} alt="CC logo" /></div>
      </div>
    </DownloadContainer>
  )
}

const ImagePackContainer = props => {
  const { content, imagePack } = props
  return (
    <DownloadContainer data={content} isSmall>
      <ImagePackDownloads {...imagePack} />
    </DownloadContainer>
  )
}

const DocumentContainer = props => {
  const { content } = props
  const { list } = content
  return (
    <DownloadContainer data={content} isSmall isDocument>
      {
        (list && list.length > 0) ? (
          list.map(li => (
            <DocumentDownloads
              key={genRandomKey()}
              title={li.title}
              para={li.para}
              buttonName="Download"
            />
          ))) : null
      }
    </DownloadContainer>
  )
}

const AssetsDownload = props => {
  const { data, logos = [], imagePack } = props
  const {
    title,
    logos: logoContent,
    images,
    documents,
  } = data

  return (
    <div className="assetDownloads">
      <div className="assetDownloads__wrap">
        <div className="assetDownloads__title">
          <h2 className="header2__default">{title}</h2>
        </div>
        {
          // Logo assets
          (logos && logos.length > 0) ? (<LogoContainer content={logoContent} logos={logos} />) : null
        }
        {
          // Image pack asset
          imagePack ? (<ImagePackContainer content={images} imagePack={imagePack} />) : null
        }
        <DocumentContainer content={documents} />
      </div>
    </div>
  )
}

export default AssetsDownload

