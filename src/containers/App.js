import React from 'react'
import { withRouter } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import GlobalHeader from '../v1.1/components/global_header/index';
import Footer from './partials/footer';

import '../sass/main.sass'


class App extends React.Component {
  state = {
    headerActive: false,
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        (function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.body)
      })
    }
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
      <div className="root-b">
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
        <Footer />
      </div>
    )
  }
}

const AppWithRouter = withRouter(App)

export default hot(module)(AppWithRouter)
