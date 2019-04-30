import React from 'react'

import Button from 'components/Button'
import UnderlinedLink from 'components/UnderlinedLink'
import TextSnippet from 'components/TextSnippet'
import Invite from '../Invite'
import { prefixClassName, openLink } from 'src/utils'

import './develop.sass'

const baseClassName = 'GetInvolvedDevelop'
const cn = prefixClassName(baseClassName)

const Develop = props => {
  const { content, invite } = props
  const { trySafeNet, startDevelop, joinForum, coreNetwork } = content

  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('trySafe')}>
          <TextSnippet title={trySafeNet.title} titleSize="H2" text={trySafeNet.para} />
        </div>
        <div className={cn('startDevelop')}>
          <TextSnippet title={startDevelop.title} titleSize="H2" text={startDevelop.para} />
          <div className="cta">
            <Button className="dark icon external" onClick={() => {
              openLink(startDevelop.CTA.url)
            }}>{startDevelop.CTA.name}</Button>
          </div>
        </div>
        <div className={cn('joinForum')}>
          <TextSnippet title={joinForum.title} text={joinForum.para} />
          <div className="cta">
            <UnderlinedLink url={joinForum.CTA.url}>{joinForum.CTA.name}</UnderlinedLink>
          </div>
        </div>
        <div className={cn('coreNetwork')}>
          <TextSnippet title={coreNetwork.title} text={coreNetwork.para} />
          <div className="cta">
            <UnderlinedLink url={coreNetwork.CTA.url}>{coreNetwork.CTA.name}</UnderlinedLink>
          </div>
        </div>
        <Invite content={invite} />
        <div className={cn('texture')}></div>
      </div>
    </div>
  )
}

export default Develop
