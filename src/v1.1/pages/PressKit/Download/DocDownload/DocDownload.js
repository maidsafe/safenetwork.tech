import React from 'react'

import Button from 'components/Button'

import { openLink } from 'src/utils'

import './docDownload.sass'

const DocDownload = props => {
  const {
    title,
    para,
    buttonName,
    downloadLink,
  } = props

  return (
    <div className="docDownload">
      <div className="docDownload__wrap">
        <div className="docDownload__content">
          <h4 className="docDownload__title header3__default">{title}</h4>
          <p className="docDownload__para bodyText__default">{para}</p>
        </div>
        <div className="docDownload__button">
          <Button
            className="hollow download"
            onClick={() => {
              openLink(downloadLink)
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
