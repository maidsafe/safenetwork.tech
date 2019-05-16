import React from 'react'

import Banner from './Banner'
import Subscribe from './Subscribe'
import Releases from './Releases'
import Apps from './Apps'
import content from './content'

import './roadmap.sass'

const Roadmap = () => {
  return (
    <section className="Roadmap">
      <div className="Roadmap__wrap">
        <Banner content={content.banner} />
        <Subscribe content={content.subscribe} />
        <Releases content={content.releases} />
        <Apps content={content.apps} />
      </div>
    </section>
  )
}

export default Roadmap
