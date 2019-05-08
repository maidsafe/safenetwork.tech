import React from 'react'

import TextSnippet from 'components/TextSnippet'
import { prefixClassName, genRandomKey, spinalCase } from 'src/utils'

import './topic.sass'

const baseClassName = 'HIWTopic'
const cn = prefixClassName(baseClassName)

const Topic = props => {
  const { content, children } = props
  const { name, desc = [], quote } = content

  return (
    <div id={spinalCase(name)} className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('name')}><div className="overline">{name}</div></div>
        <div className={cn('content')}>
          {
            desc.map(d => {
              const eleArray = [
                <TextSnippet key={genRandomKey()} text={d.para} title={d.title} />
              ]
              if (d.quote) {
                eleArray.push(<blockquote key={genRandomKey()} className={cn('quote')}>{d.quote}</blockquote>)
              }
              return eleArray
            })
          }
        </div>
        {children}
      </div>
    </div>
  )
}

export default Topic
