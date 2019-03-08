import React from 'react'
import { Link } from 'react-static'

import FooterContainer from '../FooterContainer'
import { genRandomKey } from 'src/utils'

import './footerList.sass'

const FooterListContainer = props =>  {
  const { data, id } = props
  return (
    <FooterContainer id={id} name={data.name} to={data.to}>
      <div className="footerList">
        {
          (data.links && data.links.length !== 0) ? (
            data.links.map(link => (
              <div
                key={genRandomKey()}
                className="footerList__item navigationText"
              >
                <Link to={link.to}>{link.name}</Link>
              </div>
          ))) : null
        }
      </div>
    </FooterContainer>
  )
}

export default FooterListContainer
