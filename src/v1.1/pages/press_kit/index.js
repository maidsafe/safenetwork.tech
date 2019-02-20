import React, { Component } from 'react'
import classNames from 'classnames'
//
import Button from '../../components/button/index'
import PageBanner from '../../components/page_banner/index'
import TextSnippet from '../../components/text_snippet/index'
import TheGuardian from "~images/news_1.png"
import TechCrunch from "~images/news_2.png"
import Spectrum from "~images/news_3.png"
import AssetsDownload from '../../components/assetsDownload/index'
import SNLogoBlack from '~images/downloads/safe_network_logo_black.png'
import SNLogoWhite from '~images/downloads/safe_network_logo_white.png'
import SNIconBlack from '~images/downloads/safe_network_icon_black.png'
import SNIconWhite from '~images/downloads/safe_network_icon_white.png'
import ImagePackCover from '~images/downloads/image_pack_cover.jpg'
//
import content from './content.json'
import './style.sass'

const InterviewReq = props => {
  const { data, className } = props
  return (
    <div className={classNames('interviewReq', className)}>
      <TextSnippet
        title={data.title}
        titleSize="H2"
        text={data.para}
      />
      <div className="interviewReq__button">
        <Button type="button" className="primary">{data.buttonText}</Button>
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
      <h3 className="mediaSnippet__para blockquote">{data.para}</h3>
      <div className="mediaSnippet__logo">
        <img src={imgSrc} alt={imgTitle} />
      </div>
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
        <TextSnippet
          className="pressIntro"
          canCopy
          text={data.copyText1.para}
          textSize="L"
          copyButtonType="primary"
        />
        <TextSnippet
          className="projectAim"
          canCopy
          title={data.copyText2.title}
          text={data.copyText2.para}
          copyButtonType="grey"
        />
        <TextSnippet
          className="aboutSafecoin"
          canCopy
          title={data.copyText3.title}
          text={data.copyText3.para}
          copyButtonType="grey"
        />
        <TextSnippet
          className="pressFreedom"
          title={data.textSnippet1.title}
          titleSize="H2"
          text={data.textSnippet1.para}
        />
        <TextSnippet
          className="revenueStream"
          title={data.textSnippet2.title}
          titleSize="H3"
          text={data.textSnippet2.para}
        />
        <div className="textSnippets__shadow">{' '}</div>
        <div className="textSnippets__rowBg">{' '}</div>
      </div>
    </div>
  )
}

const MediaSnippets = props => {
  const { data } = props
  return (
    <div className="mediaSnippets">
      <div className="mediaSnippets__wrap">
        <InterviewReq
          className="mediaSnippets__item"
          data={data.interviewRequest}
        />
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
        <div className="mediaLogos">{' '}</div>
        <div className="interviewReq__bg">{' '}</div>
        <div className="techCrunch__bg">{' '}</div>
      </div>
    </div>
  )
}

const PressKit = () => {
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

  const imagePack = {
    imgSrc: ImagePackCover,
    imgAlt: 'Safe Network icon white',
  }

  return (
    <section className="pressKit">
      <div className="pressKit__wrap">
        <PressKitBanner title={content.pageTitle} />
        <TextSnippets data={content} />
        <MediaSnippets data={content} />
        <AssetsDownload
          data={content.downloads}
          logos={assetLogos}
          imagePack={imagePack}
        />
      </div>
    </section>
  )
}

export default PressKit
