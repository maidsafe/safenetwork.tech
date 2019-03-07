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

  const linkEle = <Link to={data.link.trim() || '#'}>{data.name}</Link>

  return (
    <div className={classNames(
        {
          mainNavItem: !isButton,
          'mainNavItem-btn': isButton,
          active: (data.link === currentLocationPath),
          light: lightTheme
        }
      )}
    >
      {
        isButton ? <Button className="primary">{linkEle}</Button> : linkEle
      }
    </div>
  )
}

export default MainNavItem
