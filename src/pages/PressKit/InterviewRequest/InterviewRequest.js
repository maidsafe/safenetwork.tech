import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import TextSnippet from 'components/TextSnippet'

import { openLink } from 'utils'

import './interviewRequest.sass'

const InterviewRequest = props => {
  const { data, className } = props
  return (
    <div className={classNames('interviewRequest', className)}>
      <TextSnippet
        title={data.title}
        titleSize="H2"
        text={data.para}
      />
      <div className="interviewRequest__button">
        <Button
          className="primary"
          type="button"
          onClick={() => {
            openLink(data.toLink)
          }}
        >
          {data.buttonText}
        </Button>
      </div>
    </div>
  )
}

export default InterviewRequest
