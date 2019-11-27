import React from 'react'
import classNames from 'classnames'

import PageBanner from 'components/PageBanner'
import TextSnippet from 'components/TextSnippet'
import Accordion from 'components/Accordion'
import { prefixClassName, genRandomKey } from 'utils'
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
        <div className={cn('accord')}>
          <div className={cn('accordTitle')}><h2>{qa.section.title}</h2></div>
          <div className={cn('accordContainer')}>
            {
              qa.section.items.map((item, i) => {
                const key = genRandomKey()
                return (
                  <Accordion key={key} id={key} header={(
                    <div className={cn('accordHeader')}>
                      <div className="index">{`${i+1}.`}</div>
                      <div className="title"><h4>{item.question}</h4></div>
                    </div>
                  )}>
                    <TextSnippet text={item.answer} />
                  </Accordion>
                )
              })
            }
          </div>
        </div>
        <div className={cn('safecoin')}>
          <div className={cn('safecoinWrap')}>
            <h3 className={cn('safecoinTitle')}>{safecoin.title}</h3>
            <div className={cn('safecoinList')}>
              {
                safecoin.lists.map(ls => (
                  <div key={genRandomKey()} className={cn('safecoinItem')}>
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
                    <div key={genRandomKey()} className="point"><p>{pt}</p></div>
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
