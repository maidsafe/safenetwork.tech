import React from 'react'

import InterviewRequest from '../InterviewRequest'
import MediaSnippet from '../MediaSnippet'

import { genRandomKey } from 'utils'

import './medias.sass'

const Medias = props => {
  const { interviewRequest, mediaData } = props

  return (
    <div className="pressKitMedias">
      <div className="pressKitMedias__wrap">
        <InterviewRequest
          className="pressKitMedias__item"
          data={interviewRequest}
        />
        {
          mediaData.map(media => <MediaSnippet key={genRandomKey()} {...media} />)
        }
        <div className="mediaLogos">{' '}</div>
        <div className="interviewReq__bg">{' '}</div>
      </div>
    </div>
  )
}

export default Medias
