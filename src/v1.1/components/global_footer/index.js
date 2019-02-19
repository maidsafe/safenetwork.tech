import React from 'react'
import { Link } from 'react-static'
import classNames from 'classnames'
//
import Subscribe from '../subscribe'
import { genRandomKey } from '../../utils'
import content from './content.json'
import './style.sass'
//
const ItemTitle = props => {
  const { title, to, onClick } = props
  if (!title) {
    return <span>{' '}</span>
  }
  return (
    <div className="footItem__title navigationText" onClick={onClick}>
      {
        to ? (<Link to={to}><h3>{title}</h3></Link>) : (<h3>{title}</h3>)
      }
    </div>
  )
}

class FootContainer extends React.Component {
  state = {
    active: false,
  }

  onClickTitle() {
    this.setState({ active: !this.state.active })
  }

  render() {
    const {
      id,
      name,
      to,
      children,
    } = this.props
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

const FootContainerList = props =>  {
  const { data, id } = props
  return (
    <FootContainer id={id} name={data.name} to={data.to}>
      <div className="footItem__list">
        {
          (data.links && data.links.length !== 0) ? (
            data.links.map(link => (
              <div
                key={genRandomKey()}
                className="footItem__listItem navigationText"
              >
                <Link to={link.to}>{link.name}</Link>
              </div>
          ))) : null
        }
      </div>
    </FootContainer>
  )
}

const FootContainerSubscribe = props => {
  const { data, id } = props
  return (
    <FootContainer id={id} name={data.name}>
      <Subscribe />
    </FootContainer>
  )
}

const FootContainerSocial = props => {
  const { data, id } = props
  return (
    <FootContainer id={id} name={data.name}>
      <div className="footItem__social">
        <div className="footSocial">
          <div className="footSocial__wrap">
            {
              (data.links && data.links.length !== 0) ? (
                data.links.map(link => (
                  <div
                    key={genRandomKey()}
                    className={`footSocial__item navigationText ${link.style}`}
                  >
                    <Link to={link.to}><span className="name">{link.name}</span></Link>
                  </div>
              ))) : null
            }
          </div>
        </div>
      </div>
    </FootContainer>
  )
}

const GlobalFooter = () => {
  const {
    safeNetwork,
    community,
    developers,
    company,
    legal,
    newsletter,
    social,
  } = content

  return (
    <footer className="gFooter">
      <div className="gFooter__wrap">
        <FootContainerList id="safeNetwork" data={safeNetwork} />
        <FootContainerList id="community" data={community} />
        <FootContainerList id="developers" data={developers} />
        <FootContainerList id="company" data={company} />
        <FootContainerList id="legal" data={legal} />
        <FootContainerSubscribe id="newsletter" data={newsletter} />
        <FootContainerSocial id="social" data={social} />
      </div>
    </footer>
  )
}

export default GlobalFooter
