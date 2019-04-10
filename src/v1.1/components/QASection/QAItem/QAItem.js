import React from 'react'
import classNames from 'classnames'

import { parseMDText, spinalCase } from 'src/utils'

import './qaItem.sass'

export default class QAItem extends React.Component {
  state = {
    isOpen: false,
  }

  questionId = null

  componentDidMount() {
    this.questionId = spinalCase(this.props.content.question)
    const hash = window.location.hash.substr(1)
    if (hash) {
      const decodedHash = decodeURIComponent(hash)
      if (decodedHash !== this.questionId) {
        return
      }
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

  onClickHeader = () => {
    if (typeof window !== 'undefined') {
      const hash = decodeURIComponent(window.location.hash.substr(1))
      if (hash === this.questionId) {
        window.history.pushState('', window.document.title, window.location.pathname)
        this.setState({
          isOpen: false
        })
        return
      }
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
            <p
              onClick={this.onClickHeader}
            >{question}
            </p>
          </div>
          <div className="qaItem__answer">
            {
              <div className="qaItem__para">{answer.map(para => parseMDText(para))}</div>
            }
          </div>
        </div>
      </div>
    )
  }
}
