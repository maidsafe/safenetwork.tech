import React from 'react'
import { Link } from 'react-router-dom'

import FooterContainer from '../FooterContainer'
import { genRandomKey } from 'utils'

import './footerList.sass'

const FooterList = props =>  {
  const { data, id } = props
  return (
    <FooterContainer id={id} name={data.name} titleLink={data.url}>
      <div className="footerList">
        {
          (data.links && data.links.length !== 0) ? (
            data.links.map(link => (
              <div
                key={genRandomKey()}
                className="footerList__item navigationText"
              >
                {
                  /^https?:\/\//.test(link.url) ? <a href={link.url} target="_blank">{link.name}</a> : <Link to={link.url}>{link.name}</Link>
                }
              </div>
          ))) : null
        }
      </div>
    </FooterContainer>
  )
}

export default FooterList
