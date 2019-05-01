import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import Video from '../Video'
import { prefixClassName, genRandomKey, spinalCase } from 'src/utils'

import './accordionItem.sass'

const baseClassName = 'RoadmapAccordionItem'
const cn = prefixClassName(baseClassName)

export default class AccordionItem extends React.Component {
  constructor(props) {
    super(props)
    this.featureId = spinalCase(props.content.feature)
    this.state = {
      active: false
    }
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      const hash = decodeURIComponent(window.location.hash.substr(1))
      if (hash === this.featureId) {
        this.setState({ active: !this.state.active })
      }
    }
  }

  pushHistory(hash = '') {
    if (typeof window !== 'undefined') {
      window.history.pushState('', window.document.title, window.location.pathname + `#${hash}`)
    }
  }

  onClickItem  = () => {
    const  { active } = this.state
    if (!active) {
      this.pushHistory(this.featureId)
    }
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const { content } = this.props
    return (
      <div className={classNames(baseClassName, {
        active: this.state.active
      })}>
        <div className={cn('wrap')}>
          <div id={this.featureId} className={cn('row')} onClick={this.onClickItem}>
            <h4 className={cn('feature')}>{content.feature}</h4>
            <div className={cn('description')}>{content.desc}</div>
            <h4 className={classNames(cn('status'), content.status.toLowerCase())}>{content.status}</h4>
          </div>
          <div className={cn('container')}>
            <div className={cn('para')}>
              {
                content.para.map(para => (
                  <p key={genRandomKey()}>{para}</p>
                ))
              }
            </div>
            <div className={cn('cta')}>
              <Button className="hollow icon external">{content.CTA.name}</Button>
            </div>
            <div className={cn('media')}>
              <Video width="530" height="330" url={content.video.url} caption={content.video.caption} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
