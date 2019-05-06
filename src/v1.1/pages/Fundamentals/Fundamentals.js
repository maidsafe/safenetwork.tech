import React from 'react'
import classNames from 'classnames'

import PageBanner from 'components/PageBanner'
import TextSnippet from 'components/TextSnippet'
import QASection from 'components/QASection'
import { prefixClassName, genRandomKey } from 'src/utils'
import content from './content'

import './fundamentals.sass'

const baseClassName = 'Fundamentals'
const cn = prefixClassName(baseClassName)

const Fundamentals = () => {
  const { title, desc, qa, safecoin } = content
  return (
    <section className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('banner')}>
          <PageBanner title={title} />
        </div>
        <div className={classNames(cn('desc'), 'introText')}>
          <p>{desc}</p>
        </div>
        <div className={cn('qa')}>
          {
            qa.sections.map(section => <QASection key={genRandomKey()} content={section} listType="NUM" />)
          }
        </div>
        <div className={cn('safecoin')}>
          <div className={cn('safecoinWrap')}>
            <h3 className={cn('safecoinTitle')}>{safecoin.title}</h3>
            <div className={cn('safecoinList')}>
              {
                safecoin.lists.map(ls => (
                  <div className={cn('safecoinItem')}>
                    <div className="index"><h3>{ls.name}</h3></div>
                    <p>{ls.para}</p>
                  </div>
                ))
              }
            </div>
            <div className={cn('safecoinNotes')}>
              <h3 className="title">{safecoin.notes.title}</h3>
              <div className="desc"><p>{safecoin.notes.para}</p></div>
              <div className="points">
                {
                  safecoin.notes.points.map(pt => (
                    <div className="point"><p>{pt}</p></div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fundamentals
