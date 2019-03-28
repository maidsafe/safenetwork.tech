import React from 'react'
import { Link } from 'react-static'

import FooterContainer from '../FooterContainer'
import { genRandomKey } from 'src/utils'

import './footerSocial.sass'

const FooterSocialContainer = props => {
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
                  <Link to={link.to}><span className="name">{link.name}</span></Link>
                </div>
            ))) : null
          }
        </div>
      </div>
    </FooterContainer>
  )
}

export default FooterSocialContainer
