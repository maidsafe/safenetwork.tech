import React, { Component } from 'react'
import classNames from 'classnames'
//
import PageBanner from '../../components/page_banner/index'
import { genRandomKey } from '../../utils'
import TheGuardian from "~images/news_1.png"
import TechCrunch from "~images/news_2.png"
import Spectrum from "~images/news_3.png"
import WSJ from "~images/press_img_1.png"
import Wired from "~images/press_img_2.png"
import BitcoinMagazine from "~images/press_img_3.png"
import Computing from "~images/press_img_4.png"
import SNLogoBlack from '~images/downloads/safe_network_logo_black.svg'
import SNLogoWhite from '~images/downloads/safe_network_logo_white.svg'
import SNIconBlack from '~images/downloads/safe_network_icon_black.svg'
import SNIconWhite from '~images/downloads/safe_network_icon_white.svg'
import ImagePackCover from '~images/downloads/image_pack_cover.jpg'
import CCLogo from '~images/downloads/cc.svg'
//
import content from './content.json'
import './style.sass'

const CopyTextSnippet = props => {
  const {
    data,
    className,
    backgroundColor,
    buttonType,
  } = props
  const { title, para, buttonText } = data
  return (
    <div className={classNames('copyTextSnippet', className, {
      yellow: (backgroundColor === 'yellow'),
      grey: (backgroundColor === 'grey'),
    })}>
      <div className="copyTextSnippet__content">
        {title ? <h3 className="copyTextSnippet__title">{title}</h3> : null}
        <div className="copyTextSnippet__para"><p>{para}</p></div>
      </div>
      <div className="copyTextSnippet__button">
        <button
          className={classNames('btn', {
            primary: (buttonType === 'primary'),
            dark: (buttonType === 'grey'),
          })}
        >{buttonText}
        </button>
      </div>
    </div>
  )
}

const PlainTextSnippet = props => {
  const { data, smallTitle, className } = props
  const { title, para } = data

  return (
    <div className={classNames('plainTextSnippet', className)}>
      {title ? (
        <h3 className={classNames('plainTextSnippet__title', {
          plainTextSnippet__smallTitle: smallTitle,
        })}>{title}
        </h3>
      ) : null}
      {
        para && para.length !== 0 ? para.map(p => (
          <div key={genRandomKey()} className="plainTextSnippet__para"><p>{p}</p></div>
        )) : null
      }
    </div>
  )
}

const InterviewReq = props => {
  const { data, className } = props
  return (
    <div className={classNames('interviewReq', className)}>
      <PlainTextSnippet data={data} />
      <div className="interviewReq__button">
        <button type="button" className="btn primary">{data.buttonText}</button>
      </div>
    </div>
  )
}

const MediaSnippet = props => {
  const {
    className,
    data,
    imgSrc,
    imgTitle,
  } = props

  return (
    <div className={classNames('mediaSnippet', className)}>
      <h3 className="mediaSnippet__para">{data.para}</h3>
      <div className="mediaSnippet__logo">
        <img src={imgSrc} alt={imgTitle} />
      </div>
    </div>
  )
}

const MediaLogo = props => {
  const { logos } = props
  return (
    <div className="mediaLogos">
      {
        logos && logos.length > 0 ? logos.map(logo => (
          <div key={genRandomKey()} className="mediaLogos__item"><img src={logo.src} alt={logo.title} /></div>
        )) : null
      }
    </div>
  )
}

const PressKitBanner = props => {
  const { title } = props
  return (
    <div className="pressKit__banner"><PageBanner title={title} /></div>
  )
}

const TextSnippets = props => {
  const { data } = props
  return (
    <div className="textSnippets">
      <div className="textSnippets__wrap">
        <CopyTextSnippet
          className="textSnippets__item large"
          data={data.copyText1} buttonType="primary" />
        <CopyTextSnippet
          className="textSnippets__item"
          data={data.copyText2}
          buttonType="grey"
          backgroundColor="yellow"
        />
        <CopyTextSnippet
          className="textSnippets__item"
          data={data.copyText3}
          buttonType="grey"
          backgroundColor="grey"
        />
        <PlainTextSnippet className="textSnippets__item" data={data.textSnippet1} />
        <PlainTextSnippet className="textSnippets__item" data={data.textSnippet2} smallTitle />
        <div className="textSnippets__shadow">{' '}</div>
        <div className="textSnippets__rowBg">{' '}</div>
      </div>
    </div>
  )
}

const MediaSnippets = props => {
  const { data, mediaLogos } = props
  return (
    <div className="mediaSnippets">
      <div className="mediaSnippets__wrap">
        <InterviewReq
          className="mediaSnippets__item"
          data={data.interviewRequest}
        />
        <div className="interviewReq__bg">{' '}</div>
        <div className="techCrunch__bg">{' '}</div>
        <MediaSnippet
          className="techCrunch"
          data={data.techCrunch}
          imgSrc={TechCrunch}
          imgTitle="Tech Crunch"
        />
        <MediaSnippet
          className="theGuardian"
          data={data.theGuardian}
          imgSrc={TheGuardian}
          imgTitle="The Guardian"
        />
        <MediaSnippet
          className="spectrum"
          data={data.spectrum}
          imgSrc={Spectrum}
          imgTitle="Spectrum"
        />
        <MediaLogo logos={mediaLogos} />
      </div>
    </div>
  )
}

const LogoDownloads = props => {
  const { imgSrc, imgAlt, buttonName } = props

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
  const { imgSrc, imgAlt, buttonName } = props
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

const DownloadContainer = props => {
  const { data, children, isSmall } = props
  return (
    <div className="downloadContainer">
      <div className="downloadContainer__context">
        <h3 className="downloadContainer__title">{data.title}</h3>
        <p className="downloadContainer__para">{data.para}</p>
      </div>
      <div className={classNames('downloadContainer__downloads', {
        small: isSmall,
      })}>{children}
      </div>
    </div>
  )
}

const Downloads = props => {
  const { data } = props
  return (
    <div className="downloads">
      <div className="downloads__wrap">
        <div className="downloads__title"><h2>{data.title}</h2></div>
        <DownloadContainer data={data.logos}>
          <LogoDownloads
            imgSrc={SNLogoBlack}
            imgAlt="Safe Network logo black"
            buttonName="Download"
          />
          <LogoDownloads
            imgSrc={SNLogoWhite}
            imgAlt="Safe Network logo white"
            buttonName="Download"
          />
          <LogoDownloads
            imgSrc={SNIconBlack}
            imgAlt="Safe Network icon black"
            buttonName="Download"
          />
          <LogoDownloads
            imgSrc={SNIconWhite}
            imgAlt="Safe Network icon white"
            buttonName="Download"
          />
          <div className="logoDownloads__credit">
            <p className="creditPara">{data.logos.credit}</p>
            <div className="creditLogo"><img src={CCLogo} alt="CC logo" /></div>
          </div>
        </DownloadContainer>
        <DownloadContainer data={data.images} isSmall>
          <ImagePackDownloads
            imgSrc={ImagePackCover}
            imgAlt="Safe Network icon white"
            buttonName="Download Image Pack"
          />
        </DownloadContainer>
        <DownloadContainer data={data.documents} isSmall>
          {
            (data.documents.list && data.documents.list.length > 0) ? data.documents.list.map(li => (
              <DocumentDownloads
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

export default class PressKit extends Component {
  render() {
    return (
      <section className="pressKit">
        <div className="pressKit__wrap">
          <PressKitBanner title={content.pageTitle} />
          <TextSnippets data={content} />
          <MediaSnippets data={content} mediaLogos={[
            {
              src: WSJ,
              title: 'WSJ',
            }, {
              src: Wired,
              title: 'Wired',
            }, {
              src: BitcoinMagazine,
              title: 'Bitcoin Magazine',
            }, {
              src: Computing,
              title: 'Computing',
            },
          ]} />
          <Downloads data={content.downloads} />
        </div>
      </section>
    )
  }
}
