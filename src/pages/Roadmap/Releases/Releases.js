import React from 'react'

import Intro from './Intro'
import Accordion from '../Accordion'
import AccordionStatus from '../AccordionStatus'
import AccordionItem from '../AccordionItem'
import { prefixClassName, genRandomKey } from 'src/utils'

import './releases.sass'

const baseClassName = 'RoadmapReleases'
const cn = prefixClassName(baseClassName)

const Releases = props => {
  const { content } = props
  const { release1, release2, release3 } = content
  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <Intro
          overline={release1.overline}
          title={release1.title}
          text={release1.para}
          videoUrl={release1.videoUrl}
          videoCaption={release1.videoCaption}
        />
        <AccordionStatus />
        <Accordion header={release1.accordion.header}>
          {
            release1.accordion.items.map(accord => (
              <AccordionItem key={genRandomKey()} content={accord} />
            ))
          }
        </Accordion>
        <Intro
          overline={release2.overline}
          title={release2.title}
          text={release2.para}
          videoUrl={release2.videoUrl}
          videoCaption={release2.videoCaption}
        />
        <Accordion header={release2.accordion.header}>
          {
            release2.accordion.items.map(accord => (
              <AccordionItem key={genRandomKey()} content={accord} />
            ))
          }
        </Accordion>
        <div className={cn('darkBg')}>
          <Intro
            overline={release3.overline}
            title={release3.title}
            text={release3.para}
            videoUrl={release3.videoUrl}
            videoCaption={release3.videoCaption}
          />
          <Accordion header={release3.accordion.header}>
            {
              release3.accordion.items.map(accord => (
                <AccordionItem key={genRandomKey()} content={accord} />
              ))
            }
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Releases
