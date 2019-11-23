import React from 'react'

import FooterContainer from '../FooterContainer'
import Subscribe from 'components/Subscribe'
import CONST from 'constant'

const FooterSubscribeContainer = props => {
  const { data, id } = props
  return (
    <FooterContainer id={id} name={data.name}>
      <Subscribe url={CONST.subscribeUrl.mailSubscription} />
    </FooterContainer>
  )
}

export default FooterSubscribeContainer
