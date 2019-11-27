import React from 'react'

import QAItem from './QAItem'

import { genRandomKey } from 'utils'

import './qaSection.sass'

const QASection = props => {
  const LIST_TYPE = {
    NUM: 'NUM'
  }

  const { content, listType = null } = props
  const { title, items = [] } = content

  return (
    <div className="qaSection">
      <div className="qaSection__wrap">
        <div className="qaSection__title"><h3>{title}</h3></div>
        {
          items.map((item, index) => (
            <QAItem
              key={genRandomKey()}
              content={item}
              index={listType === LIST_TYPE.NUM ? `${index + 1}` : null}
            />
          ))
        }
      </div>
    </div>
  )
}

export default QASection
