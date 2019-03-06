import React from 'react'

import FooterListContainer from './footer_list_container'
import FooterSubscribeContainer from './footer_subscribe_container'
import FooterSocialContainer from './footer_social_container'

import content from './content.json'
import './style.sass'

const GlobalFooter = () => {
  const {
    safeNetwork,
    community,
    developers,
    company,
    legal,
    newsletter,
    social,
  } = content

  return (
    <footer className="globalFooter">
      <div className="globalFooter__wrap">
        <FooterListContainer id="safeNetwork" data={safeNetwork} />
        <FooterListContainer id="community" data={community} />
        <FooterListContainer id="developers" data={developers} />
        <FooterListContainer id="company" data={company} />
        <FooterListContainer id="legal" data={legal} />
        <FooterSubscribeContainer id="newsletter" data={newsletter} />
        <FooterSocialContainer id="social" data={social} />
      </div>
    </footer>
  )
}

export default GlobalFooter
