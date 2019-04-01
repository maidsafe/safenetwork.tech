import React from 'react'
import classNames from 'classnames'

import NavItem from '../NavItem'
import { genRandomKey } from 'src/utils'

import './mainNav.sass'

const MainNav = props => {
  const {
    activePathname,
    navItems: items,
    navButtons: itemButtons,
  } = props

  const isLightTheme = (activePathname === '/get-involved/')

  return (
    <div className="mainNav">
      <div className="mainNav__wrap">
        <div className="mainNav__items">
          {
            items ? (items.map(data => (
              <NavItem
                key={genRandomKey()}
                lightTheme={isLightTheme}
                data={data}
                currentLocationPath={activePathname}
              />))) : null
          }
        </div>
        <div className="mainNav__btnItems">
          {
            itemButtons ? itemButtons.map(itemButton => (
              <NavItem
                key={genRandomKey()}
                lightTheme={isLightTheme}
                data={itemButton}
                currentLocationPath={activePathname}
                isButton
              />
            )) : null
          }
        </div>
      </div>
    </div>
  )
}

export default MainNav
