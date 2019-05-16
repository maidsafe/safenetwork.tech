import React from 'react'

import FooterList from './FooterList'
import FooterSubscribe from './FooterSubscribe'
import FooterSocial from './FooterSocial'
import content from './content'

import './globalFooter.sass'

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
        <FooterList id="safeNetwork" data={safeNetwork} />
        <FooterList id="community" data={community} />
        <FooterList id="developers" data={developers} />
        <FooterList id="company" data={company} />
        <FooterList id="legal" data={legal} />
        <FooterSubscribe id="newsletter" data={newsletter} />
        <FooterSocial id="social" data={social} />
      </div>
    </footer>
  )
}

export default GlobalFooter
