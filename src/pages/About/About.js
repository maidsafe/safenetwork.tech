import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import TextSnippet from 'components/TextSnippet'
import { prefixClassName, openLink } from 'utils'
import MaidSafeLogo from 'assets/images/maidSafe_logo.svg'
import content from './content'

import './about.sass'

const baseClassName = 'About'
const cn = prefixClassName(baseClassName)

const About = () => {
  const { desc, CTA, para } = content
  return (
    <section className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('banner')}>
          <div className={cn('bannerWrap')}>
            <div className={cn('logo')}>
              <figure><img src={MaidSafeLogo} alt={'MaidSafe logo'} /></figure>
            </div>
            <div className={classNames(cn('desc'), 'introText')}>
              <p>{desc}</p>
            </div>
            <div className={cn('cta')}>
              <Button className="hollow icon external" onClick={() => {
                openLink(CTA.url, true)
              }}>{CTA.name}</Button>
            </div>
          </div>
        </div>
        <div className={cn('texts')}>
          <TextSnippet text={para} />
        </div>
      </div>
    </section>
  )
}

export default About
