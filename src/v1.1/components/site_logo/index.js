import React, { Component } from 'react'
import { Link } from 'react-static'
import classNames from 'classnames'
//
import siteLogo from '~images/common/site_logo.svg'
//
import './style.sass'

export default class SiteLogo extends Component {
  render() {
    const { theme, name } = this.props

    return (
      <div className={classNames('siteLogo', {
        light: theme === 'light',
      })}>
        <div className="siteLogo__wrap">
          <div className="siteLogo__media">
            <Link to="/"><img src={siteLogo} alt="Safe Network Logo" /></Link>
          </div>
          <div className="siteLogo__name"><Link to="/">{name}</Link></div>
        </div>
      </div>
    )
  }
}
