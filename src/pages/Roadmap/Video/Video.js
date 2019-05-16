import React from 'react'

import './video.sass'

const Video = props => {
  const { width, height, url, caption } = props
  return (
    <figure className="CustomVideo">
      <video
        width={width}
        height={height}
        tabIndex="-1"
        src={`${url}`}
        controls="controls"></video>
      <figcaption className="caption">{caption}</figcaption>
    </figure>
  )
}

export default Video
