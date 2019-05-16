import React from 'react'

import TextSnippet from 'components/TextSnippet'
import UnderlinedLink from 'components/UnderlinedLink'

import './mainTextPanel.sass'

const MainTextPanel = props => {
  const { title, text, CTA } = props
  return (
    <div className="MainTextPanel">
      <TextSnippet title={title} titleSize="H2" text={text} />
      <UnderlinedLink url={CTA.url}>{CTA.name}</UnderlinedLink>
    </div>
  )
}

export default MainTextPanel
