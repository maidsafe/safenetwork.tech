import React from 'react'

import Video from '../../Video'
import { prefixClassName } from 'src/utils'

import './intro.sass'

const baseClassName = 'ReleaseInto'
const cn = prefixClassName(baseClassName)

const Intro = props => {
  const { overline, title, text, videoUrl, videoCaption } = props

  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <div className="overline">{overline}</div>
        <h2 className={cn('title')}>{title}</h2>
        <div className={cn('para')}>
          <p>{text}</p>
        </div>
        <div className={cn('media')}>
          <Video width="530" height="330" url={videoUrl} caption={videoCaption} />
        </div>
      </div>
    </div>
  )
}
export default Intro
