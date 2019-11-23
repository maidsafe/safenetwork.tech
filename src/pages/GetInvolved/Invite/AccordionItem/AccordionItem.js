import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import UnderlinedLink from 'components/UnderlinedLink'
import { prefixClassName } from 'utils'

import './accordionItem.sass'

const baseClassName = 'AccordionItem'
const cn = prefixClassName(baseClassName)

const AccordionItem = props => {
  const {
    id,
    active = false,
    overline,
    title,
    text,
    ctaButton,
    ctaButtonType,
    ctaLink = null,
    onClick,
    onClickPrimaryButton,
  } = props

  return (
    <div className={classNames(baseClassName, id, {
      active
    })}>
      <div className={cn('wrap')}>
        <div className="overline">{overline}</div>
        <div className={cn('title')}>
          <h3 onClick={onClick}>{title}</h3>
        </div>
        <div className={cn('content')}>
          <div><p>{text}</p></div>
          <div className={cn('cta')}>
            {
              ctaButton && ctaButton.name ? (
                <div className={cn('ctaButton')}>
                  <Button className={ctaButtonType} onClick={onClickPrimaryButton}>{ctaButton.name}</Button>
                </div>
              ) : null
            }
            {
              ctaLink ? (
                <div className={cn('ctaLink')}>
                  <UnderlinedLink url={ctaLink.url} theme="minor">{ctaLink.name}</UnderlinedLink>
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}


export default AccordionItem
