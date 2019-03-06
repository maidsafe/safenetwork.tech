import React from 'react'

import FootContainer from './footer_container'
import Subscribe from '~components/subscribe'

const FooterSubscribeContainer = props => {
  const { data, id } = props
  return (
    <FootContainer id={id} name={data.name}>
      <Subscribe />
    </FootContainer>
  )
}

export default FooterSubscribeContainer
