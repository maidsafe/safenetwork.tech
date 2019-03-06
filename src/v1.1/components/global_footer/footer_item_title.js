import React from 'react'
import { Link } from 'react-static'

const FooterItemTitle = props => {
  const { title, to, onClick } = props
  if (!title) {
    return <span>{' '}</span>
  }
  return (
    <div className="footItem__title navigationText" onClick={onClick}>
      {
        to ? (<Link to={to}><h3>{title}</h3></Link>) : (<h3>{title}</h3>)
      }
    </div>
  )
}

export default FooterItemTitle
