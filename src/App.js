import React, { Component } from 'react'

import 'bootstrap/scss/bootstrap-reboot.scss'
import 'bootstrap/scss/bootstrap.scss'

import Layout from './containers/Layout/Layout'
import Login from './containers/Login/Login'

class App extends Component {
  state = { isLoggedIn: true }

  render() { 
    return this.state.isLoggedIn
      ? <Layout />
      : <Login />
  }
}

export default App
