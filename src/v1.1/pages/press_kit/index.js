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
import AssetsDownload from '../../components/assetsDownload/index'
import SNLogoBlack from '~images/downloads/safe_network_logo_black.svg'
import SNLogoWhite from '~images/downloads/safe_network_logo_white.svg'
import SNIconBlack from '~images/downloads/safe_network_icon_black.svg'
import SNIconWhite from '~images/downloads/safe_network_icon_white.svg'
import ImagePackCover from '~images/downloads/image_pack_cover.jpg'
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

export default class PressKit extends Component {
  render() {
    const assetLogos = [
      {
        imgSrc: SNLogoBlack,
        imgAlt: 'Safe Network logo black',
      },
      {
        imgSrc: SNLogoWhite,
        imgAlt: 'Safe Network logo white',
      },
      {
        imgSrc: SNIconBlack,
        imgAlt: 'Safe Network icon black',
      },
      {
        imgSrc: SNIconWhite,
        imgAlt: 'Safe Network icon white',
      },
    ]

    const mediaLogos = [
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
    ]

    const imagePack = {
      imgSrc: ImagePackCover,
      imgAlt: 'Safe Network icon white',
    }

    return (
      <section className="pressKit">
        <div className="pressKit__wrap">
          <PressKitBanner title={content.pageTitle} />
          <TextSnippets data={content} />
          <MediaSnippets data={content} mediaLogos={mediaLogos} />
          <AssetsDownload
            data={content.downloads}
            logos={assetLogos}
            imagePack={imagePack}
          />
        </div>
      </section>
    )
  }
}
