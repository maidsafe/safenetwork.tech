import React from 'react'

import Button from 'components/Button'
import TextSnippet from 'components/TextSnippet'

import { openLink } from 'utils'

import './docDownload.sass'

const DocDownload = props => {
  const {
    title,
    para,
    buttonName,
    downloadLink,
    isExternal = false
  } = props

  return (
    <div className="docDownload">
      <div className="docDownload__wrap">
        <div className="docDownload__content">
          <TextSnippet title={title} text={para} />
        </div>
        <div className="docDownload__button">
          <Button
            className="hollow icon download"
            onClick={() => {
              openLink(downloadLink, isExternal)
            }}
          >
            {buttonName}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DocDownload
