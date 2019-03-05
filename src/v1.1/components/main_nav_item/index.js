import React from 'react'
import { Link } from 'react-static'
import classNames from 'classnames'
//
import Button from '~components/button/index'
//
import './style.sass'
//
const MainNavItem = props => {
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

export default MainNavItem
