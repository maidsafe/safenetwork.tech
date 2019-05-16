import React from 'react'

import './quotePanel.sass'

const QuotePanel = props => {
  const { children } = props
  return (
    <div className="QuotePanel">{children}</div>
  )
}

export default QuotePanel
