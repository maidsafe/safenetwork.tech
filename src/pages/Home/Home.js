import React from 'react'

import Banner from './Banner'
import Freedom from './Freedom'
import Privacy from './Privacy'
import Data from './Data'
import Economy from './Economy'
import { prefixClassName } from 'utils'
import content from './content'

import './home.sass'

const baseClassName = 'Home'
const cn = prefixClassName(baseClassName)

const Home = () => {
  return (
    <section className={baseClassName}>
      <div className={cn('wrap')}>
        <Banner content={content.banner} />
        <Freedom content={content.freedom} />
        <Privacy content={content.privacy} />
        <Data content={content.data} />
        <Economy content={content.economy} />
      </div>
    </section>
  )
}

export default Home
