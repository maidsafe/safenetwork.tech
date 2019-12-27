import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import siteLogo from 'assets/images/common/site_logo.svg'

import './siteLogo.sass'

const SiteLogo = props => {
  const { name, lightTheme } = props
  return (
    <div className={classNames('siteLogo', {
      light: lightTheme,
    })}>
      <div className="siteLogo__wrap">
        <div className="siteLogo__media">
          <Link to="/"><img src={siteLogo} alt="SAFE Network Logo" /></Link>
        </div>
        <div className="siteLogo__name"><Link to="/">{name}</Link></div>
      </div>
    </div>
  )
}

export default SiteLogo
