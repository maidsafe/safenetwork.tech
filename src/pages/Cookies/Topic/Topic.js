import React from 'react'
import classNames from 'classnames'

import { prefixClassName, genRandomKey, parseMDText } from 'utils'

import './topic.sass'

const baseClassName = 'CookieTopic'
const cn = prefixClassName(baseClassName)

const Topic = props => {
  const { content, numberedPara = false } = props
  const { title, index, para, subTopic = null } = content

  let subTopicEle = []

  const rowClassName = classNames(cn('row'), {
    numbered: numberedPara
  })

  const getPara = p => (
    <div className={cn('para')}><p>{parseMDText(p, true)}</p></div>
  )

  if (subTopic) {
    if (subTopic.title) {
      subTopicEle.push(<div key={genRandomKey()} className={rowClassName}>
        <div className={cn('index')}><h3>{subTopic.index}</h3></div>
        <div className={cn('subTitle')}><h3>{subTopic.title}</h3></div>
      </div>)
    }
    if (subTopic.para) {
      subTopicEle = subTopicEle.concat(
        subTopic.para.map(p => (
          <div key={genRandomKey()} className={cn('row')}>{getPara(p)}</div>
        ))
      )
    }
  }

  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('row')}>
          <div className={cn('index')}><h2>{index}</h2></div>
          <div className={cn('title')}><h2>{title}</h2></div>
        </div>
        {
          para.map((p, i) => (
            <div key={genRandomKey()} className={rowClassName}>
              {numberedPara ? <div className={cn('index')}><h3>{`${index}${i+1}`}</h3></div> : null}
              {getPara(p)}
            </div>
          ))
        }
        {subTopicEle}
      </div>
    </div>
  )
}

export default Topic
