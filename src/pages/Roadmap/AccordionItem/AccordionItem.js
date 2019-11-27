import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import Accordion from 'components/Accordion'
import Video from '../Video'
import { prefixClassName, genRandomKey, parseMDText, spinalCase, openLink } from 'utils'

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
    this.pushHistory(active ? '' : this.featureId)
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const { content } = this.props
    return (
      <Accordion id={content.feature} header={[
        <h4 key={genRandomKey()} className={cn('feature')}>{content.feature}</h4>,
        <div key={genRandomKey()} className={cn('description')}>{content.desc}</div>,
        <h4 key={genRandomKey()} className={classNames(cn('status'), content.status.toLowerCase())}>{content.status}</h4>
      ]}>
        <div key={genRandomKey()} className={cn('para')}>
          {
            content.para.map(para => (
              <p key={genRandomKey()}>{parseMDText(para, true)}</p>
            ))
          }
        </div>
        {
          content.CTA ? (
            <div key={genRandomKey()} className={cn('cta')}>
              <Button className="hollow icon external" onClick={() => {
                openLink(content.CTA.url, true)
              }}>{content.CTA.name}</Button>
            </div>
          ) : null
        }
        {
          content.video ? (
            <div key={genRandomKey()} className={cn('media')}>
              <Video width="530" height="330" url={content.video.url} caption={content.video.caption} />
            </div>
          ) : null
        }
      </Accordion>
    )
  }
}
