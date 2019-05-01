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
  const { alpha2, fleming, maxwell } = content
  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        <Intro
          overline={alpha2.overline}
          title={alpha2.title}
          text={alpha2.para}
          videoUrl={alpha2.videoUrl}
          videoCaption={alpha2.videoCaption}
        />
        <AccordionStatus />
        <Accordion header={alpha2.accordion.header}>
          {
            alpha2.accordion.items.map(accord => (
              <AccordionItem key={genRandomKey()} content={accord} />
            ))
          }
        </Accordion>
        <Intro
          overline={fleming.overline}
          title={fleming.title}
          text={fleming.para}
          videoUrl={fleming.videoUrl}
          videoCaption={fleming.videoCaption}
        />
        <Accordion header={fleming.accordion.header}>
          {
            fleming.accordion.items.map(accord => (
              <AccordionItem key={genRandomKey()} content={accord} />
            ))
          }
        </Accordion>
        <div className={cn('darkBg')}>
          <Intro
            overline={maxwell.overline}
            title={maxwell.title}
            text={maxwell.para}
            videoUrl={maxwell.videoUrl}
            videoCaption={maxwell.videoCaption}
          />
          <Accordion header={maxwell.accordion.header}>
            {
              maxwell.accordion.items.map(accord => (
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
