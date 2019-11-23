import React from 'react'
import classNames from 'classnames'

import MainNav from './MainNav'
import SiteLogo from './SiteLogo'
import { isHowItWorksPage } from 'utils'

import content from './content'
import './globalHeader.sass'

const GlobalHeader = props => {
  const {
    activePathname,
    lightTheme,
    mobileMenuActive,
    onClickMobMenu,
  } = props

  const headerClasses = classNames('globalHeader', {
    active: mobileMenuActive,
  })

  return (
    <header className={headerClasses}>
      <div className="globalHeader__wrap">
        <div className="globalHeader__logo">
          <SiteLogo
            name={content.siteName}
            lightTheme={lightTheme}
          />
        </div>
        <div className="globalHeader__nav">
          <MainNav
            activePathname={activePathname}
            navItems={content.navItems}
            navButtons={content.navButtons}
            lightTheme={lightTheme}
          />
        </div>
        <div className="mobNav">
          <button className={classNames('mobNav__btn', {
            light: lightTheme,
            whiteRed: isHowItWorksPage()
          })} onClick={onClickMobMenu} />
        </div>
      </div>
    </header>
  )
}

export default GlobalHeader
