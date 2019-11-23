import React from 'react'
import classNames from 'classnames'

import { parseMDText, spinalCase, setLocationHash } from 'utils'

import './qaItem.sass'

export default class QAItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.questionId = spinalCase(this.props.content.question)
  }

  componentDidMount() {
    const hash = window.location.hash.substr(1)
    if (hash) {
      const decodedHash = decodeURIComponent(hash)
      if (decodedHash !== this.questionId) {
        return
      }
      this.setState({ isOpen: !this.state.isOpen })
      this.baseEle.scrollIntoView()
    }
  }

  onClickHeader = () => {
    const { isOpen } = this.state
    const { questionId } = this
    setLocationHash(!isOpen ? questionId : '')
    this.setState({
      isOpen: !isOpen
    })
  }

  render() {
    const { content, index = null } = this.props
    const { question, answer } = content

    return (
      <div ref={(c) => { this.baseEle = c}} className={classNames('qaItem', {
        open: this.state.isOpen,
      })}>
        <div className="qaItem__wrap">
          <div id={this.questionId} className="qaItem__question">
            <p
              onClick={this.onClickHeader}
            >
            {index ? <span className="index">{index}</span> : null}
            {parseMDText(question, true)}
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
