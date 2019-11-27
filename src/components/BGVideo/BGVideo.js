import React from 'react'
import classNames from 'classnames'
import LazyLoad from 'react-lazyload'

import { prefixClassName } from 'utils'

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
    const { src, webmSrc= '', width = 'auto', height  = 'auto', position = 'CENTER' } = this.props

    const videoStyle = {
      width: width,
      height: height,
    }
    return (
      <div className={classNames(baseClassName, this.POSITION[position])}>
        <div className={cn('wrap')}>
          <LazyLoad>
            <video autoPlay muted loop style={videoStyle} playsInline={true} preload="none">
              <source src={src} type="video/mp4" />
              {
                webmSrc ? <source src={webmSrc} type="video/webm" /> : null
              }
            </video>
          </LazyLoad>
        </div>
      </div>
    )
  }
}
