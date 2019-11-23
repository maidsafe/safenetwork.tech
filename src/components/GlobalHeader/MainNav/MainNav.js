import React from 'react'

import NavItem from '../NavItem'
import { genRandomKey } from 'utils'

import './mainNav.sass'

const MainNav = props => {
  const {
    activePathname,
    navItems: items,
    navButtons: itemButtons,
    lightTheme,
  } = props

  return (
    <div className="mainNav">
      <div className="mainNav__wrap">
        <div className="mainNav__items">
          {
            items ? (items.map(data => (
              <NavItem
                key={genRandomKey()}
                lightTheme={lightTheme}
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
                lightTheme={lightTheme}
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
