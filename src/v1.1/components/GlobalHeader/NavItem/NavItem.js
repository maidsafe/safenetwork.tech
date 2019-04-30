import React from 'react'
import { Link } from 'react-static'
import classNames from 'classnames'

import Button from 'components/Button'

import './navItem.sass'

const MainNavItem = props => {
  const {
    data,
    lightTheme,
    currentLocationPath,
    isButton,
  } = props

  const linkEle = (children) => (<Link to={data.link.trim() || '#'}>{children}</Link>)
  const isActive = (data.link === currentLocationPath)

  return (
    <div className={classNames(
        {
          mainNavItem: !isButton,
          'mainNavItem-btn': isButton,
          active: isActive,
          light: lightTheme
        }
      )}
    >
      {
        isButton ? linkEle(<Button className="primary" active={isActive}>{data.name}</Button>) : linkEle(data.name)
      }
    </div>
  )
}

export default MainNavItem
