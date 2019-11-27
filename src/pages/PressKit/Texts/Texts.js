import React from 'react'
import classNames from 'classnames'

import TextSnippet from 'components/TextSnippet'
import CopyButton from './CopyButton'

import { genRandomKey } from 'utils'

import './texts.sass'

const Texts = props => {
  const { data } = props

  return (
    <div className="pressKitTexts">
      <div className="pressKitTexts__wrap">
        {
          data.map(text => (
            <div key={genRandomKey()} className={classNames('pressKitTexts__item', text.id)}>
              <div className="container">
                <TextSnippet {...text} />
                {
                  text.canCopy ? (
                    <CopyButton copyText={text.text} type={text.copyButtonType}></CopyButton>
                  ) : null
                }
              </div>
            </div>
          ))
        }
        <div className="pressKitTexts__shadow">{' '}</div>
        <div className="pressKitTexts__rowBg">{' '}</div>
      </div>
    </div>
  )
}

export default Texts
