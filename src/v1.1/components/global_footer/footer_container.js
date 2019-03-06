import React from 'react'
import classNames from 'classnames'

import FooterItemTitle from './footer_item_title'

export default class FooterContainer extends React.Component {
  state = {
    active: false,
  }

  onClickTitle() {
    this.setState({ active: !this.state.active })
  }

  render() {
    const {
      id,
      name,
      to,
      children,
    } = this.props
    const { active } = this.state
    return (
      <div className={classNames(`footItem ${id}`, {
        active,
      })}>
        <div className="footItem__wrap">
          <FooterItemTitle title={name} to={to} onClick={() => { this.onClickTitle() }} />
          <div className="footItem__context">
            {children}
          </div>
        </div>
      </div>
    )
  }
}
