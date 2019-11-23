import React from 'react'

import Banner from './Banner'
import Topic from './Topic'
import content from './content'
import { prefixClassName, genRandomKey } from 'utils'

import './howItWorks.sass'

const baseClassName = 'HowItWorks'
const cn = prefixClassName(baseClassName)

const HowItWorks = () => {
  const { banner, topics } = content

  return (
    <section className={baseClassName}>
      <div className={cn('wrap')}>
        <Banner content={banner} topics={topics.map(t => t.name)} />
        <div className={cn('topics')}>
          {
            topics.map(topic => <Topic key={genRandomKey()} content={topic} />)
          }
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
