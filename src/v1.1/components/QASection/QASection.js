import React from 'react'

import QAItem from './QAItem'

import { genRandomKey } from 'src/utils'

import './qaSection.sass'

const QASection = props => {
  const { content } = props
  const { title, items } = content

  return (
    <div className="qaSection">
      <div className="qaSection__wrap">
        <div className="qaSection__title"><h3>{title}</h3></div>
        {
          items.map(item => <QAItem key={genRandomKey()} content={item} />)
        }
      </div>
    </div>
  )
}

export default QASection
