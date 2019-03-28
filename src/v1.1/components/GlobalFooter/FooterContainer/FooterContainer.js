import React from 'react'
import classNames from 'classnames'

import FooterItemTitle from '../FooterItemTitle'

import './footerContainer.sass'

export default class FooterContainer extends React.Component {
  state = {
    open: false,
  }

  onClickTitle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const {
      id,
      name,
      titleLink,
      children,
    } = this.props
    const { open } = this.state

    return (
      <div className={classNames(`footerContainer ${id}`, {
        active: open,
      })}>
        <div className="footerContainer__wrap">
          <FooterItemTitle title={name} url={titleLink} active={open} onClick={() => { this.onClickTitle() }} />
          <div className="footerContainer__context">
            {children}
          </div>
        </div>
      </div>
    )
  }
}
