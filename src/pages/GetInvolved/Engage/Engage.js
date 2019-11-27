import React from 'react'

import Button from 'components/Button'
import Subscribe from 'components/Subscribe'
import TextSnippet from 'components/TextSnippet'
import { prefixClassName, openLink } from 'utils'
import CONST from 'constant'

import './engage.sass'

const baseClassName = 'GetInvolvedEngage'
const cn = prefixClassName(baseClassName)

const Engage = props => {
  const { content } = props
  const { community, subscribe } = content

  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('community')}>
          <TextSnippet title={community.title} titleSize="H2" text={community.para} />
          <div className="cta">
            <Button className="primary icon external" onClick={() => {
              openLink(community.CTA.url, true)
            }}>{community.CTA.name}</Button>
          </div>
        </div>
        <div className={cn('communityBg')}></div>
        <div className={cn('subscribe')}>
          <h3 className={cn('subscribeTitle')}>{subscribe.title}</h3>
          <Subscribe url={CONST.subscribeUrl.mailSubscription} />
        </div>
      </div>
    </div>
  )
}

export default Engage
