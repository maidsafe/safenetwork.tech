import React from 'react'

import './downloadContainer.sass'

const DownloadContainer = props => {
  const {
    data,
    children,
  } = props

  return (
    <div className="downloadContainer">
      <div className="downloadContainer__context">
        <h3 className="downloadContainer__title header3__default">{data.title}</h3>
        <p className="downloadContainer__para bodyText__default">{data.para}</p>
      </div>
      <div className="downloadContainer__downloads">
        {children}
      </div>
    </div>
  )
}

export default DownloadContainer
