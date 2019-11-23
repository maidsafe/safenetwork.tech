
import React from 'react'

import SubscribeForm from 'components/SubscribeForm'
import content from './content'
import { prefixClassName } from 'utils'

import './subscribe.sass'

const baseClassName = 'Subscribe'
const cn = prefixClassName(baseClassName)

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.userDesc = React.createRef();
    this.emailSubUrl = props.url
  }

  componentDidMount() {
    this.userDesc.current.innerHTML = content.initState.desc
  }

  render() {
    return (
      <div className={baseClassName}>
        <div className={cn('wrap')}>
          <p ref={this.userDesc} className={cn('desc')}>{''}</p>
          <SubscribeForm
            url={this.emailSubUrl}
            getStatus={(status) => {
              if (this.userDesc.current) {
                this.userDesc.current.innerHTML = (status === SubscribeForm.STATUS.SUCCESS) ? content.successState.desc : content.initState.desc
              }
            }}
          />
        </div>
      </div>
    )
  }
}
