import React from 'react'
import { Link } from 'react-static'
import classNames from 'classnames'

import './underlinedLink.sass'

const THEME = {
  RED: 'red',
  YELLOW: 'yellow',
}

const UnderlinedLink = props => {
  const { url = '/', children = 'Underlined Link', theme = '' } = props

  return (
    <Link className={classNames('underlinedLink', {
      [THEME.RED]: theme === THEME.RED,
      [THEME.YELLOW]: theme === THEME.YELLOW
    })} to={url}>{children}</Link>
  )
}

export default UnderlinedLink
