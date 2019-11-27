import React from 'react'
import classNames from 'classnames'

import PageBanner from 'components/PageBanner'
import Topic from '../Cookies/Topic'
import { prefixClassName, genRandomKey, parseMDText } from 'utils'
import content from './content'

import '../Cookies/cookies.sass'

const baseClassName = 'Cookies'
const cn = prefixClassName(baseClassName)

const Privacy = () => {
  const { title, desc, topics = [] } = content

  return (
    <section className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('banner')}>
          <div className={cn('bannerWrap')}><PageBanner title={title} /></div>
        </div>
        <div className={classNames(cn('topics'), 'topSpace')}>
          {topics.map(t => {
            const isNumberedPara = [].indexOf(t.title) !== -1
            return <Topic key={genRandomKey()} content={t} numberedPara={isNumberedPara} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Privacy
