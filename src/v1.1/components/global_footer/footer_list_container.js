import React from 'react'
import { Link } from 'react-static'

import FootContainer from './footer_container'
import { genRandomKey } from '~src/utils'

const FooterListContainer = props =>  {
  const { data, id } = props
  return (
    <FootContainer id={id} name={data.name} to={data.to}>
      <div className="footItem__list">
        {
          (data.links && data.links.length !== 0) ? (
            data.links.map(link => (
              <div
                key={genRandomKey()}
                className="footItem__listItem navigationText"
              >
                <Link to={link.to}>{link.name}</Link>
              </div>
          ))) : null
        }
      </div>
    </FootContainer>
  )
}

export default FooterListContainer
