import React from 'react'
import classNames from 'classnames'
//
import MainNav from '../main_nav/index'
import SiteLogo from '../site_logo/index'
import { isMenuLight } from '../../../utils'
//
import content from './content.json'
import './style.sass'

const GlobalHeader = props => {
  const { location, active, onClickMobMenu } = props
  const headerClasses = classNames('globalHeader', {
    active,
  })
  const isLightTheme = isMenuLight(location.pathname)
  return (
    <header className={headerClasses}>
      <div className="globalHeader__wrap">
        <div className="globalHeader__logo">
          <SiteLogo
            theme={(isLightTheme && !active) ? 'light' : ''}
            name={content.siteName}
          />
        </div>
        <div className="globalHeader__nav">
          <MainNav location={location} />
        </div>
        <div className="mobNav">
          <button className={classNames('mobNav__btn', {
            light: isLightTheme,
          })} onClick={onClickMobMenu} />
        </div>
      </div>
    </header>
  )
}

export default GlobalHeader
