import React from 'react'
import classNames from 'classnames'
//
import { genRandomKey, parseMDText, spinalCase } from '../../utils'
//
import './style.sass'

class FAQItem extends React.Component {
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
      <div className={classNames('faqItem', {
        open: this.state.isOpen,
      })}>
        <div className="faqItem__wrap">
          <div id={this.questionId} className="faqItem__question">
            <h4
              className="bodyText__default"
              onClick={() => { this.onClickHeader() }}
            >{question}
            </h4>
          </div>
          <div className="faqItem__answer">
            {
              (answer && answer.length >=0) ? (
                answer.map(para => <div key={genRandomKey()} className="faqItem__para bodyText__default">{parseMDText(para)}</div>)
              ) : null
            }
          </div>
        </div>
      </div>
    )
  }
}

const FAQSection = props => {
  const { content } = props
  const { title, items } = content

  return (
    <div className="faqsSection">
      <div className="faqsSection__wrap">
        <div className="faqsSection__title"><h3 className="header3__default">{title}</h3></div>
        {
          (items && items.length >= 0) ? (
            items.map(item => <FAQItem key={genRandomKey()} content={item} />)
          ) : null
        }
      </div>
    </div>
  )
}

export default FAQSection
