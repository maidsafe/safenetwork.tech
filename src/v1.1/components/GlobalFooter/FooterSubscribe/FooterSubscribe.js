import React from 'react'

import FooterContainer from '../FooterContainer'
import Subscribe from 'components/Subscribe'
import CONST from 'src/v1.1/constant'

const FooterSubscribeContainer = props => {
  const { data, id } = props
  return (
    <FooterContainer id={id} name={data.name}>
      <Subscribe url={CONST.subscribeUrl.mailSubscription} />
    </FooterContainer>
  )
}

export default FooterSubscribeContainer
