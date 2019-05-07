import React from 'react'
import classNames from 'classnames'

import { prefixClassName } from 'src/utils'

import './bGVideo.sass'

const baseClassName = 'BGVideo'
const cn = prefixClassName(baseClassName)

export default class BGVideo extends React.Component {
  POSITION = {
    TOP_LEFT: 'topLeft',
    TOP_RIGHT: 'topRight',
    BOTTOM_LEFT: 'bottomLeft',
    BOTTOM_RIGHT: 'bottomRight',
    CENTER: 'center',
  }

  render() {
    const { src, width = 'auto', height  = 'auto', position = 'CENTER' } = this.props

    const videoStyle = {
      width: width,
      height: height,
    }
    return (
      <div className={classNames(baseClassName, this.POSITION[position])}>
        <div className={cn('wrap')}>
          <video autoPlay muted loop style={videoStyle}>
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    )
  }
}
