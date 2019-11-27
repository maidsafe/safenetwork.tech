import React, { useEffect } from 'react'
import { Root, Routes } from 'react-static'
import { withRouter, useHistory } from 'react-router-dom'
import { hot } from 'react-hot-loader'
//
import GlobalHeader from 'components/GlobalHeader';
import GlobalFooter from 'components/GlobalFooter';
import { isMenuLight } from 'utils'

class Layout extends React.Component {
  state = {
    mobileMenuActive: false,
  }
  windowWidth = 0

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', () => {
        if (this.windowWidth !== window.innerWidth) {
          this.toggleBodyOverFlow(false)
          this.setState({ mobileMenuActive: false })
          this.windowWidth = window.innerWidth
        }
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

    const ScrollRestoration = () => {
      const history = useHistory()
      useEffect(() => {
        if (history.action !== 'POP') {
          window.scrollTo(0, 0)
        }
      }, [history.location.pathname])
      return null
    }

    return (
      <React.Suspense fallback={<span>Loading...</span>}>
        <ScrollRestoration />
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
      </React.Suspense>
    )
  }
}

const LayoutWithRouter = withRouter(Layout)

class App extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        (function (H) { H.className = H.className.replace(/\bno-js\b/, 'js') })(document.body)
      })
    }
  }

  render() {
    return (<Root><LayoutWithRouter /></Root>)
  }
}

export default hot(module)(App)
