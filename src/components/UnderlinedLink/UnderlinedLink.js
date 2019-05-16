import React from 'react'
import { Link } from 'react-static'
import classNames from 'classnames'

import './underlinedLink.sass'

const THEME = {
  MINOR: 'minor',
}

const UnderlinedLink = props => {
  const { url = '/', children = 'Underlined Link', theme = '' } = props

  return (
    <Link className={classNames('underlinedLink', {
      [THEME.MINOR]: theme === THEME.MINOR,
    })} to={url}>{children}</Link>
  )
}

export default UnderlinedLink
