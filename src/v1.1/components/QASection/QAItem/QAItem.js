import React from 'react'
import classNames from 'classnames'

import { genRandomKey, parseMDText, spinalCase } from 'src/utils'

import './qaItem.sass'

export default class QAItem extends React.Component {
  state = {
    isOpen: false,
  }

  questionId = null

  componentDidMount() {
    this.questionId = spinalCase(this.props.content.question)
    const hash = window.location.hash
    if (hash) {
      const decodedHash = decodeURIComponent(hash).substr(1)
      if (decodedHash !== this.questionId) {
        return
      }
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

  onClickHeader() {
    if (typeof window !== 'undefined') {
      window.location.hash = this.questionId
    }
  }

  render() {
    const { content } = this.props
    const { question, answer } = content

    return (
      <div className={classNames('qaItem', {
        open: this.state.isOpen,
      })}>
        <div className="qaItem__wrap">
          <div id={this.questionId} className="qaItem__question">
            <h4
              onClick={() => { this.onClickHeader() }}
            >{question}
            </h4>
          </div>
          <div className="qaItem__answer">
            {
              (answer && answer.length >=0) ? (
                <div className="qaItem__para">{answer.map(para => parseMDText(para))}</div>
              ) : null
            }
          </div>
        </div>
      </div>
    )
  }
}