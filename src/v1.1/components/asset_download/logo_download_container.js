import React from 'react'

import DownloadContainer from './download_container'
import LogoDownloads from './logo_download'
import CCLogo from '~images/downloads/cc.svg'

import { genRandomKey, parseMDText } from '~src/utils'

const LogoDownloadContainer = props => {
  const { content, logos } = props

  return (
    <DownloadContainer data={content}>
      {
        logos.map(logo => <LogoDownloads key={genRandomKey()} {...logo} />)
      }
      <div className="logoDownload__credit">
        <div className="creditPara">{parseMDText(content.credit)}</div>
        <div className="creditLogo"><img src={CCLogo} alt="CC logo" /></div>
      </div>
    </DownloadContainer>
  )
}

export default LogoDownloadContainer
