import React from 'react'
import classNames from 'classnames'

import Accordion from '../Accordion'
import AccordionItem from '../AccordionItem'
import { prefixClassName, genRandomKey } from 'utils'

import './apps.sass'

const baseClassName = 'RoadmapApps'
const cn = prefixClassName(baseClassName)

const Apps = props => {
  const { content } = props
  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <div className={cn('title')}><h1>{content.title}</h1></div>
        <div className={cn('list')}>
          <div className={cn('listWrap')}>
            {
              content.list.map(li => (
                <div key={genRandomKey()} className={cn('listItem')}>
                  <div className={cn('listItemWrap')}>
                    <div className={classNames(cn('listMedia'), li.id)}></div>
                    <div className="container">
                      <div className={classNames(cn('listStatus'), 'overline')} >{li.status}</div>
                      <h3 className={cn('listTitle')}>{li.name}</h3>
                      <p className={cn('listPara')}>{li.para}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className={cn('current')}>
          <div className={cn('currentWrap')}>
            <div className={cn('currentIntro')}>
              <div className={classNames('overline', cn('currentStatus'))}>{content.currentMilestone.status}</div>
              <div className={cn('currentTitle')}>
                <h2>{content.currentMilestone.title}</h2>
              </div>
              <div className={cn('currentDesc')}>
                <p>{content.currentMilestone.para}</p>
              </div>
            </div>
            <Accordion header={content.currentMilestone.accordion.header}>
              {
                content.currentMilestone.accordion.items.map(accord => (
                  <AccordionItem key={genRandomKey()} content={accord} />
                ))
              }
            </Accordion>
          </div>
          <div className="darkBg"></div>
        </div>
        <div className={cn('upcomingBase')}>
          <div className={cn('upcoming')}>
            <div className={cn('upcomingWrap')}>
              <div className={cn('upcomingStatus')}>
                <div className="overline">{content.upcomingMilestones.status}</div>
              </div>
              <div className={cn('upcomingList')}>
                {
                  content.upcomingMilestones.list.map(li => {
                    let accordion = null
                    if (li.accordion) {
                      accordion = (
                        <Accordion key={genRandomKey()} header={li.accordion.header}>
                          {
                            li.accordion.items.map(accord => (
                              <AccordionItem key={genRandomKey()} content={accord} />
                            ))
                          }
                        </Accordion>
                      )
                    }
                    return [
                      <div key={genRandomKey()} className={cn('upcomingListItem')}>
                        <div className="wrap">
                          <h3>{li.title}</h3>
                          <p>{li.para}</p>
                        </div>
                      </div>,
                      accordion
                    ]
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apps
