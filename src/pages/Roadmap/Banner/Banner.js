import React from 'react'
import classNames from 'classnames'

import PageBanner from 'components/PageBanner'
import TextSnippet from 'components/TextSnippet'
import UnderlinedLink from 'components/UnderlinedLink'
import { prefixClassName, parseMDText } from 'utils'

import './banner.sass'

const baseClassName = 'RoadmapBanner'
const cn = prefixClassName(baseClassName)

const Banner = props => {
  const { content } = props
  const { pageTitle, pageDesc, latestUpdate } = content
  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <PageBanner>
          {parseMDText(pageTitle, true)}
        </PageBanner>
        <div className={classNames(cn('content'), 'introText')}>
          <p>{pageDesc}</p>
        </div>
      
      </div>
    </div>
  )
}

export default Banner
