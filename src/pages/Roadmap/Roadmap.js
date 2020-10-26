import React from 'react'

import Banner from './Banner'
//import Subscribe from './Subscribe'
import Releases from './Releases'
import Apps from './Apps'
import content from './content'

import './roadmap.sass'

const Roadmap = () => {
  return (
    <section className="Roadmap">
      <div className="Roadmap__wrap">
        <Banner content={content.banner} />
        <Releases content={content.releases} />
        <Apps content={content.apps} />
      </div>
    </section>
  )
}

//Removed below from line 16
//<Subscribe content={content.subscribe} />

export default Roadmap
