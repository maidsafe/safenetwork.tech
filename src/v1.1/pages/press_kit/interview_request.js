import React from 'react'
import classNames from 'classnames'

import Button from '~components/button/index'
import TextSnippet from '~components/text_snippet/index'

import { openLink } from '~src/utils'

const InterviewRequest = props => {
  const { data, className } = props
  return (
    <div className={classNames('interviewReq', className)}>
      <TextSnippet
        title={data.title}
        titleSize="H2"
        text={data.para}
      />
      <div className="interviewReq__button">
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
