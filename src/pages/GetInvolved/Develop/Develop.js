import React from 'react'

import Button from 'components/Button'
import UnderlinedLink from 'components/UnderlinedLink'
import TextSnippet from 'components/TextSnippet'
import { prefixClassName, openLink } from 'utils'
import BGVideo from 'components/BGVideo'
import Invite from '../Invite'

import waveThin1 from 'assets/videos/wave_1_thin.mp4'
import waveThin1Web from 'assets/videos/wave_1_thin.webm'

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
            <Button className="icon external" onClick={() => {
              openLink(startDevelop.CTA.url, true)
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
        <div className={cn('video')}>
          <BGVideo src={waveThin1} webmSrc={waveThin1Web} height={'10px'} />
        </div>
      </div>
    </div>
  )
}

export default Develop
