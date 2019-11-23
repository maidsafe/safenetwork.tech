import React from 'react'
import classNames from 'classnames'

import { prefixClassName, genRandomKey } from 'utils'

import './accordionStatus.sass'

const baseClassName = 'AccordionStatus'
const cn = prefixClassName(baseClassName)

const AccordionStatus = () => {
  const StatusKeys = [
    {
      key: 'concept',
      name: 'Concept',
    },
    {
      key: 'rfc',
      name: 'RFC',
    },
    {
      key: 'design',
      name: 'Design',
    },
    {
      key: 'development',
      name: 'Development',
    },
    {
      key: 'complete',
      name: 'Complete',
    },
  ]
  return (
    <div className={baseClassName}>
      <div className={cn('wrap')}>
        {
          StatusKeys.map(status => (
            <div
              key={genRandomKey()}
              className={classNames(cn('key'), status.key)}
            >
              <span className="caption">{status.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AccordionStatus
