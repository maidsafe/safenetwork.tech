import React, { Component } from 'react'
import classNames from 'classnames'
//
import siteLogo from '../../../assets/images/common/site_logo.svg'
//
import './style.sass'
//
export default class SiteLogo extends Component {
  render() {
    return (
      <div className={classNames('siteLogo', {
        light: this.props.light,
      })}>
        <div className="siteLogo__wrap">
          <a href="/">
            <div className="siteLogo__media"><img src={siteLogo} alt="Safe Network Logo" /></div>
            <div className="siteLogo__name">Safe Network</div>
          </a>
        </div>
      </div>
    )
  }
}
