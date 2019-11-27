import React from 'react'
import classNames from 'classnames'

import PageBanner from 'components/PageBanner'
import { prefixClassName, parseMDText } from 'utils'
import content from './content'

import './notFound.sass'

const baseClassName = 'NotFound'
const cn = prefixClassName(baseClassName)

const NotFound = () => {
  const { title, desc } = content
  return (
    <section className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('banner')}>
          <PageBanner title={title} />
        </div>
        <div className={classNames(cn('desc'), 'introText')}>
          <p>{parseMDText(desc)}</p>
        </div>
      </div>
    </section>
  )
}

export default NotFound
