import React from 'react'
import { withRouter, Router } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import GlobalHeader from 'components/GlobalHeader';
import GlobalFooter from 'components/GlobalFooter';
import { isMenuLight } from 'src/utils'

class Layout extends React.Component {
  state = {
    mobileMenuActive: false,
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () =>  {
        this.toggleBodyOverFlow(false)
        this.setState({ mobileMenuActive: false })
      })
    }
  }

  componentDidUpdate(prev) {
    if (prev.location.pathname !== this.props.location.pathname) {
      this.setState({ mobileMenuActive: false })
      this.toggleBodyOverFlow(false)
    }
  }

  toggleBodyOverFlow(hidden) {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = hidden ? 'hidden' : 'visible'
    }
  }

  onClickMobMenu() {
    const { mobileMenuActive } = this.state
    this.setState({ mobileMenuActive: !mobileMenuActive })
    this.toggleBodyOverFlow(!mobileMenuActive)
  }

  render() {
    const { location } = this.props
    const { mobileMenuActive } = this.state
    const { pathname } = location

    return (
      <main>
        <GlobalHeader
          lightTheme={isMenuLight(pathname)}
          activePathname={pathname}
          mobileMenuActive={mobileMenuActive}
          onClickMobMenu={() => {
            this.onClickMobMenu()
          }}
        />
        <div className="main-container">
          <Routes />
        </div>
        <GlobalFooter />
      </main>
    )
  }
}

const LayoutWithRouter = withRouter(Layout)

class App extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        (function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.body)
      })
    }
  }

  render() {
    return (<Router><LayoutWithRouter /></Router>)
  }
}

export default hot(module)(App)
