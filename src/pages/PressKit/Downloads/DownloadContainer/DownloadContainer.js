import React from 'react'

import TextSnippet from 'components/TextSnippet'

import './downloadContainer.sass'

const DownloadContainer = props => {
  const {
    data,
    children,
  } = props

  return (
    <div className="downloadContainer">
      <div className="downloadContainer__context">
        <TextSnippet title={data.title} text={data.para} />
      </div>
      <div className="downloadContainer__downloads">
        {children}
      </div>
    </div>
  )
}

export default DownloadContainer
