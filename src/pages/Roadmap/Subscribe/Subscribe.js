import React from 'react'

import SubscribeForm from 'components/SubscribeForm'
import { prefixClassName, parseMDText } from 'utils'
import CONST from 'constant'

import './subscribe.sass'

const baseClassName = 'RoadmapSubscribe'
const cn = prefixClassName(baseClassName)

const RMSubscribe = props => {
  const { content } = props
  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('content')}>
          <h4 className={cn('title')}>{parseMDText(content.title, true)}</h4>
          <SubscribeForm url={CONST.subscribeUrl.mailSubscription} />
        </div>
        <div className={cn('bg')}></div>
      </div>
    </div>
  )
}

export default RMSubscribe
