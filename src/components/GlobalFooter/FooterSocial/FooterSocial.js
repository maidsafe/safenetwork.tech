import React from 'react'
import { Link } from 'react-router-dom'

import FooterContainer from '../FooterContainer'
import { genRandomKey } from 'utils'

import './footerSocial.sass'

const FooterSocial = props => {
  const { data, id } = props
  return (
    <FooterContainer id={id} name={data.name}>
      <div className="footerSocial">
        <div className="footerSocial__wrap">
          {
            (data.links && data.links.length !== 0) ? (
              data.links.map(link => (
                <div
                  key={genRandomKey()}
                  className={`footerSocial__item footerSocial__${link.style} navigationText`}
                >
                  <a href={link.url} target="_blank"><span className="name">{link.name}</span></a>
                </div>
            ))) : null
          }
        </div>
      </div>
    </FooterContainer>
  )
}

export default FooterSocial
