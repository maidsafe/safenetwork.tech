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
  const { title, desc, desc_end, qa, SafeNetworkTokens, points } = content
  return (
    <section className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('banner')}>
          <PageBanner title={title} />
        </div>
        <div className={classNames(cn('desc'), 'introText')}>
          <p>{desc}</p>
          <ul className={classNames(cn('points') )}>
            {
              points.map(ls => (
                <li key={genRandomKey()}>
                  <blockquote>{ls.item}</blockquote>
                  </li>

               ) )

            }
          </ul>
          <p>{desc_end}</p>
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
        <div className={cn('SafeNetworkTokens')}>
          <div className={cn('SafeNetworkTokensWrap')}>
            <h3 className={cn('SafeNetworkTokensTitle')}>{SafeNetworkTokens.title}</h3>
            <div className={cn('SafeNetworkTokensList')}>
              {
                SafeNetworkTokens.lists.map(ls => (
                  <div key={genRandomKey()} className={cn('SafeNetworkTokensItem')}>
                    <div className="index"><h3>{ls.name}</h3></div>
                    <p>{ls.para}</p>
                  </div>
                ))
              }
            </div>
            <div className={cn('SafeNetworkTokensNotes')}>
              <h3 className="title">{SafeNetworkTokens.notes.title}</h3>
              <div className="desc"><p>{SafeNetworkTokens.notes.para}</p></div>
              <div className="points">
                {
                  SafeNetworkTokens.notes.points.map(pt => (
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
