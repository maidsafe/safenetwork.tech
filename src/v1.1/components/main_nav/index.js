import React from 'react'
import { Link } from 'react-static'
import classNames from 'classnames'
//
import Button from '../button/index'
import { genRandomKey } from '../../utils'
//
import content from './content.json'
import './style.sass'

const NavItem = props => {
  const { data, currentLocationPath, isButton } = props

  const linkEle = <Link to={data.link.trim() || '#'}>{data.name}</Link>

  return (
    <div className={classNames(
        {
          mainNav__item: !isButton,
          'mainNav__item-btn': isButton,
          active: (data.link === currentLocationPath),
        }
      )}
    >
      {
        isButton ? <Button className="primary">{linkEle}</Button> : linkEle
      }
    </div>
  )
}

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
