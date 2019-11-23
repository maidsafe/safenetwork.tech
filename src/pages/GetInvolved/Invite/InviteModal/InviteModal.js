import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import UnderlinedLink from 'components/UnderlinedLink'
import { prefixClassName } from 'utils'

import './inviteModal.sass'

const baseClassName = 'InviteModal'
const cn = prefixClassName(baseClassName)

export default class InviteModal extends React.Component {
  invite = React.createRef()
  state = {
    fixedHeader: false
  }

  handleScroll() {
    if (this.invite.current.scrollTop > 20) {
      this.setState({
        fixedHeader: true
      })
      return
    }
    this.setState({
      fixedHeader: false
    })
  }

  render() {
    const { content, onInviteRequest, onJoinForum, onClickClose } = this.props
    return (
      <div
        className={classNames(baseClassName, {
          fixed: this.state.fixedHeader,
        })}
      >
        <div
          ref={this.invite}
          onScroll={() => {
            this.handleScroll()
          }}
          className={cn('wrap')}
        >
          <div className={cn('container')}>
            <div className={cn('header')}>
              <div className="overline">{content.title}</div>
              <button className={cn('closeBtn')} type="button" onClick={() => {
                onClickClose()
              }}>{''}</button>
            </div>
            <div className={cn('content')}>
              <div className="caption">{content.caption}</div>
                <div className="splitView">
                  <div className="splitView__item">
                    <h3 className="splitView__title">{content.request.title}</h3>
                    <p className="splitView__para">{content.request.para}</p>
                    <div className="splitView__cta">
                      <Button
                        className="hollow"
                        onClick={() => {onInviteRequest()}}
                      >{content.request.CTA.name}</Button>
                    </div>
                  </div>
                  <div className="splitView__item">
                    <h3 className="splitView__title">{content.joinForum.title}</h3>
                    <p className="splitView__para">{content.joinForum.para}</p>
                    <div className="splitView__cta">
                      <Button
                        className="primary"
                        onClick={() => {onJoinForum()}}
                      >{content.joinForum.CTA.name}</Button>
                    </div>
                  </div>
                </div>
            </div>
            <div className={cn('whyInvite')}>
              <UnderlinedLink url={content.whyInvite.url}>{content.whyInvite.name}</UnderlinedLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
