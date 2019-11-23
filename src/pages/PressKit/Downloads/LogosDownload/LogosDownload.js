import React from 'react'

import DownloadContainer from '../DownloadContainer'
import LogoDownloads from '../LogoDownload'
import CCLogo from 'assets/images/downloads/cc.svg'

import { genRandomKey, parseMDText } from 'utils'

import './logosDownload.sass'

const LogosDownload = props => {
  const { content, logos } = props

  return (
    <DownloadContainer data={content}>
      <div className="logosDownload">
        {
          logos.map(logo => <LogoDownloads key={genRandomKey()} {...logo} />)
        }
        <div className="logosDownload__credit">
          <div className="creditPara">{parseMDText(content.credit)}</div>
          <div className="creditLogo"><img src={CCLogo} alt="CC logo" /></div>
        </div>
      </div>
    </DownloadContainer>
  )
}

export default LogosDownload
