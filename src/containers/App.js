import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

// import Header from './partials/header';
import Header from '../v1.1/components/global_header/index';
// import Footer from './partials/footer';
import Footer from '../v1.1/components/global_footer/index';

import '../sass/main.sass'

class App extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        (function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.body)
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="root-b">
          <Header />
          <div className="main-container">
            <Routes />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default hot(module)(App)
