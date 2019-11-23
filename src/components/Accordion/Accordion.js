import React from 'react'
import classNames from 'classnames'

import { prefixClassName, spinalCase } from 'utils'

import './accordion.sass'

const baseClassName = 'Accordion'
const cn = prefixClassName(baseClassName)

export default class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.id = spinalCase(props.id)
    this.state = {
      active: false
    }
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      const hash = decodeURIComponent(window.location.hash.substr(1))
      if (hash === this.id) {
        this.setState({ active: !this.state.active })
      }
    }
  }

  pushHistory(hash = '') {
    if (typeof window !== 'undefined') {
      window.history.pushState('', window.document.title, window.location.pathname + `#${hash}`)
    }
  }

  onClickItem  = () => {
    const  { active } = this.state
    if (!active) {
      this.pushHistory(this.id)
    }
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const { header, children } = this.props
    return (
      <div className={classNames(baseClassName, {
        active: this.state.active
      })}>
        <div className={cn('wrap')}>
          <div id={this.id} className={cn('row')} onClick={this.onClickItem}>{header}</div>
          <div className={cn('container')}>{children}</div>
        </div>
      </div>
    )
  }
}
