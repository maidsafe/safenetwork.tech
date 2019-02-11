import React, { Component } from 'react'
import { Link } from 'react-static'
import classNames from 'classnames'
//
import Subscribe from '../subscribe'
import { genRandomKey } from '../../utils'
import content from './content.json'
import './style.sass'
//
class ItemTitle extends Component {
  render() {
    const { title, to } = this.props
    if (!title) {
      return <span>{' '}</span>
    }

    return (
      <div className="footItem__title" onClick={this.props.onClick}>
        {
          to ? (<Link to={to}><h3>{title}</h3></Link>) : (<h3>{title}</h3>)
        }
      </div>
    )
  }
}

class FootContainer extends Component {
  state = {
    active: false,
  }

  onClickTitle() {
    this.setState({ active: !this.state.active })
  }

  render() {
    const { id, name, to, children } = this.props
    const { active } = this.state
    return (
      <div className={classNames(`footItem ${id}`, {
        active,
      })}>
        <div className="footItem__wrap">
          <ItemTitle title={name} to={to} onClick={() => { this.onClickTitle() }} />
          <div className="footItem__context">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

class FootContainerList extends Component {
  render() {
    const { data, id } = this.props
    return (
      <FootContainer id={id} name={data.name} to={data.to}>
        <div className="footItem__list">
          {data.links.length !== 0 ? (data.links.map(link => (
            <div key={genRandomKey()} className="footItem__listItem"><Link to={link.to}>{link.name}</Link></div>
          ))) : null }
        </div>
      </FootContainer>
    );
  }
}

class FootContainerSubscribe extends Component {
  render() {
    const { data, id } = this.props

    return (
      <FootContainer id={id} name={data.name}>
        <Subscribe />
      </FootContainer>
    )
  }
}

class FootContainerSocial extends Component {
  render() {
    const { data, id } = this.props

    return (
      <FootContainer id={id} name={data.name}>
        <div className="footItem__social">
          <div className="footSocial">
            <div className="footSocial__wrap">
              {
                data.links.length !== 0 ? (data.links.map(link => (
                  <div key={genRandomKey()} className={`footSocial__item ${link.style}`}><Link to={link.to}><span className="name">{link.name}</span></Link></div>
                ))) : null
              }
            </div>
          </div>
        </div>
      </FootContainer>
    )
  }
}

export default class GlobalFooter extends Component {
  render() {
    return (
      <footer className="gFooter">
        <div className="gFooter__wrap">
          <FootContainerList id="safeNetwork" data={content.safeNetwork} />
          <FootContainerList id="community" data={content.community} />
          <FootContainerList id="developers" data={content.developers} />
          <FootContainerList id="company" data={content.company} />
          <FootContainerList id="legal" data={content.legal} />
          <FootContainerSubscribe id="newsletter" data={content.newsletter} />
          <FootContainerSocial id="social" data={content.social} />
        </div>
      </footer>
    )
  }
}
