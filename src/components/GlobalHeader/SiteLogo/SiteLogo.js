import React from 'react'
import { Link } from 'react-static'
import classNames from 'classnames'

import siteLogo from 'images/common/site_logo.svg'

import './siteLogo.sass'

const SiteLogo = props => {
  const { name, lightTheme } = props
  return (
    <div className={classNames('siteLogo', {
      light: lightTheme,
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

export default SiteLogo
