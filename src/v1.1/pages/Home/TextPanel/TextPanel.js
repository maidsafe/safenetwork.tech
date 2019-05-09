import React from 'react'

import TextSnippet from 'components/TextSnippet'
import UnderlinedLink from 'components/UnderlinedLink'

import './textPanel.sass'

const TextPanel = props => {
  const { title, para, CTA = null } = props
  return (
    <div className="TextPanel">
      <TextSnippet title={title} text={para} />
      {
        CTA ? (
          <UnderlinedLink url={CTA.url}>{CTA.name}</UnderlinedLink>
        ) : null
      }
    </div>
  )
}

export default TextPanel
