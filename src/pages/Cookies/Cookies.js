import React from 'react'

import PageBanner from 'components/PageBanner'
import Topic from './Topic'
import { prefixClassName, genRandomKey, parseMDText } from 'src/utils'
import content from './content'

import './cookies.sass'

const baseClassName = 'Cookies'
const cn = prefixClassName(baseClassName)

const Cookies = () => {
  const { title, desc, topics = [] } = content

  return (
    <section className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('banner')}>
          <PageBanner title={title} />
        </div>
        <div className={cn('desc')}>
          <p>{parseMDText(desc, true)}</p>
        </div>
        <div className={cn('topics')}>
          {topics.map(t => {
            const isNumberedPara = [
              'Information About Us',
              'How Does Our Site Use Cookies?'
            ].indexOf(t.title) !== -1
            return <Topic key={genRandomKey()} content={t} numberedPara={isNumberedPara} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Cookies
