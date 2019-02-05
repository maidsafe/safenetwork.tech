import React, { Component } from 'react'
import { withRouter } from 'react-static'
import classNames from 'classnames'
//
import MainNav from '../main_nav/index'
import SiteLogo from '../site_logo/index'
import { isMenuLight } from '../../utils'
//
import './style.sass'
//
class GlobalHeader extends Component {
  state = {
    active: false,
  }

  componentDidUpdate(prev) {
    if (prev.location.pathname !== this.props.location.pathname) {
      this.setState({ active: false })
    }
  }

  render() {
    const { location } = this.props
    const { active } = this.state
    const headerClasses = classNames('gHeader', {
      active,
    })

    const isLightTheme = isMenuLight(location.pathname)
    return (
      <header className={headerClasses}>
        <div className="gHeader__wrap">
          <div className="gHeader__lsec">
            <SiteLogo light={(
              isLightTheme && !active
            )} />
          </div>
          <div className="gHeader__rsec">
            <MainNav location={location} />
          </div>
          <div className="mobNav">
            <button className={classNames('mobNav__btn', {
              light: isLightTheme,
            })} onClick={() => { this.setState({ active: !active }) }} />
          </div>
        </div>
      </header>
    )
  }
}

const GlobalHeaderWithRouter = withRouter(GlobalHeader)
export default GlobalHeaderWithRouter
