import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import Header from './partials/header';
import Footer from './partials/footer';

import '../sass/main.sass'

class App extends React.Component {
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
