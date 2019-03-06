import React from 'react'

import Button from '~components/button/index'
import { openLink } from '~src/utils'

const DocumentDownload = props => {
  const {
    title,
    para,
    buttonName,
    downloadLink,
  } = props

  return (
    <div className="documentDownload">
      <div className="documentDownload__wrap">
        <div className="documentDownload__content">
          <h4 className="documentDownload__title header3__default">{title}</h4>
          <p className="documentDownload__para bodyText__default">{para}</p>
        </div>
        <div className="documentDownload__button">
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

export default DocumentDownload
