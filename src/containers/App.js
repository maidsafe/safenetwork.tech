import React from 'react'
import { withRouter, Router } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
//
import GlobalHeader from '../v1.1/components/global_header/index';
import GlobalFooter from '../v1.1/components/global_footer/index';
//
import '../sass/main.sass'

class Layout extends React.Component {
  state = {
    headerActive: false,
  }

  componentDidUpdate(prev) {
    if (prev.location.pathname !== this.props.location.pathname) {
      this.setState({ headerActive: false })
    }
  }

  render() {
    const { location } = this.props
    const { headerActive } = this.state

    return (
      <main>
        <GlobalHeader
          location={location}
          active={headerActive}
          onClickMobMenu={() => {
            this.setState({ headerActive: !headerActive })
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
