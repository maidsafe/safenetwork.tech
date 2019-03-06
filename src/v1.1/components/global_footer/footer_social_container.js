import React from 'react'
import { Link } from 'react-static'

import FootContainer from './footer_container'
import { genRandomKey } from '~src/utils'

const FooterSocialContainer = props => {
  const { data, id } = props
  return (
    <FootContainer id={id} name={data.name}>
      <div className="footItem__social">
        <div className="footSocial">
          <div className="footSocial__wrap">
            {
              (data.links && data.links.length !== 0) ? (
                data.links.map(link => (
                  <div
                    key={genRandomKey()}
                    className={`footSocial__item navigationText footSocial__${link.style}`}
                  >
                    <Link to={link.to}><span className="name">{link.name}</span></Link>
                  </div>
              ))) : null
            }
          </div>
        </div>
      </div>
    </FootContainer>
  )
}

export default FooterSocialContainer
