import React, { Component } from 'react'
import { Link } from 'react-static'
import classNames from 'classnames'
//
import { genRandomKey } from '../../utils'
//
import content from './content.json'
import './style.sass'

class NavItem extends Component {
  render() {
    const { data, currentLocationPath, isButton } = this.props

    return (
      <div className={classNames(
          {
            mainNav__item: !isButton,
            'mainNav__item-btn': isButton,
            active: (data.link === currentLocationPath),
          }
        )}
      >
        <Link to={data.link.trim() || '#'}>{data.name}</Link>
      </div>
    )
  }
}

export default class MainNav extends Component {
  items = content.navItems
  itemButton = content.navButton

  render() {
    const { location } = this.props
    const { pathname } = location

    const isLightTheme = (pathname === '/get-involved/')

    return (
      <div className={classNames('mainNav', {
        light: isLightTheme,
      })}>
        <div className="mainNav__wrap">
          <div className="mainNav__items">
            {
              this.items.map(data =>
                <NavItem key={genRandomKey()} data={data} currentLocationPath={pathname} />)
            }
          </div>
          <div className="mainNav__btnItems">
            <NavItem data={this.itemButton} currentLocationPath={pathname} isButton />
          </div>
        </div>
      </div>
    )
  }
}
