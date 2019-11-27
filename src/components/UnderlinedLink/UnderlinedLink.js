import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import classNames from 'classnames'

import './underlinedLink.sass'

const THEME = {
  MINOR: 'minor',
}

const UnderlinedLink = props => {
  const { url = '/', children = 'Underlined Link', theme = '' } = props

  return /^https?:\/\//.test(url)
  ? <a className={classNames('underlinedLink', { [THEME.MINOR]: theme === THEME.MINOR })} href={url} target="_blank">{children}</a>
  : <Link smooth className={classNames('underlinedLink', { [THEME.MINOR]: theme === THEME.MINOR })} to={url}>{children}</Link>
}

export default UnderlinedLink
