import React from 'react'
import { Head } from 'react-static'

import CONSTANT from 'constant'
import Banner from './Banner'
import Texts from './Texts'
import Medias from './Medias'
import Downloads from './Downloads'
import content from './content'

import TheGuardian from 'assets/images/news_1.png'
import TechCrunch from 'assets/images/news_2.png'
import Spectrum from 'assets/images/news_3.png'
import SNLogoBlack from 'assets/images/downloads/safe_network_logo_black.png'
import SNLogoWhite from 'assets/images/downloads/safe_network_logo_white.png'
import SNIconBlack from 'assets/images/downloads/safe_network_icon_black.png'
import SNIconWhite from 'assets/images/downloads/safe_network_icon_white.png'
import ImagePackCover from 'assets/images/downloads/image_pack_cover.jpg'

import './pressKit.sass'

const PressKit = () => {
  const textData = [{
    id: 'intro',
    text: content.copyText1.para,
    textSize: 'L',
    canCopy: true,
    copyButtonType: 'primary'
  }, {
    id: 'projectAim',
    title: content.copyText2.title,
    text: content.copyText2.para,
    canCopy: true,
    copyButtonType: 'grey'
  }, {
    id: 'aboutSafecoin',
    title: content.copyText3.title,
    text: content.copyText3.para,
    canCopy: true,
    copyButtonType: 'grey'
  }, {
    id: 'pressFreedom',
    title: content.textSnippet1.title,
    titleSize: 'H2',
    text: content.textSnippet1.para
  }, {
    id: 'revenueStream',
    title: content.textSnippet2.title,
    titleSize: 'H3',
    text: content.textSnippet2.para
  }]

  const mediaData = [{
    id: 'techCrunch',
    content: content.techCrunch,
    imgSrc: TechCrunch,
    imgTitle: 'Tech Crunch',
    url: CONSTANT.pressKitMedia.techCrunch
  }, {
    id: 'theGuardian',
    content: content.theGuardian,
    imgSrc: TheGuardian,
    imgTitle: 'The Guardian',
    url: CONSTANT.pressKitMedia.theGuardian
  }, {
    id: 'spectrum',
    content: content.spectrum,
    imgSrc: Spectrum,
    imgTitle: 'Spectrum',
    url: CONSTANT.pressKitMedia.spectrum
  }]

  const assetLogos = [
    {
      imgSrc: SNLogoBlack,
      imgAlt: 'SAFE Network logo black',
      downloadLink: CONSTANT.downloadLinks.logos.safeNetworkLogoBlack,
    },
    {
      imgSrc: SNLogoWhite,
      imgAlt: 'SAFE Network logo white',
      downloadLink: CONSTANT.downloadLinks.logos.safeNetworkLogoWhite,
    },
    {
      imgSrc: SNIconBlack,
      imgAlt: 'SAFE Network icon black',
      downloadLink: CONSTANT.downloadLinks.logos.safeNetworkIconBlack,
    },
    {
      imgSrc: SNIconWhite,
      imgAlt: 'SAFE Network icon white',
      downloadLink: CONSTANT.downloadLinks.logos.safeNetworkIconWhite,
    },
  ]

  const imagePack = {
    imgSrc: ImagePackCover,
    imgAlt: 'SAFE Network icon white',
    downloadLink: CONSTANT.downloadLinks.imagePack,
  }

  const documents = {
    parsecWhitePaper: {
      url: CONSTANT.downloadLinks.documents.parsecWhitePaper,
      isExternal: true,
    },
    primer: {
      url: CONSTANT.downloadLinks.documents.primer,
      isExternal: true
    },
  }

  const meta = CONSTANT.pageMeta.pressKit

  return (
    <section className="pressKit">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.desc} />
      </Head>
      <div className="pressKit__wrap">
        <Banner title={content.pageTitle} />
        <Texts data={textData} />
        <Medias
          interviewRequest={content.interviewRequest}
          mediaData={mediaData}
        />
        <Downloads
          data={content.downloads}
          logos={assetLogos}
          imagePack={imagePack}
          documents={documents}
        />
      </div>
    </section>
  )
}

export default PressKit
