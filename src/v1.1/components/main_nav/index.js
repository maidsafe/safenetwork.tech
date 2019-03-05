import React from 'react'
import classNames from 'classnames'
//
import NavItem from '~components/main_nav_item/index'
import { genRandomKey } from '~src/utils'
//
import content from './content.json'
import './style.sass'

const MainNav = props => {
  const { location } = props
  const { pathname } = location
  const { navItems: items, navButton: itemButton } = content

  const isLightTheme = (pathname === '/get-involved/')

  return (
    <div className={classNames('mainNav', {
      light: isLightTheme,
    })}>
      <div className="mainNav__wrap">
        <div className="mainNav__items">
          {
            (items && items.length > 0) ? (items.map(data => (
              <NavItem
                key={genRandomKey()}
                data={data}
                currentLocationPath={pathname}
              />))) : null
          }
        </div>
        <div className="mainNav__btnItems">
          <NavItem data={itemButton} currentLocationPath={pathname} isButton />
        </div>
      </div>
    </div>
  )
}

export default MainNav
