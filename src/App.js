import React, { Component } from 'react'

import 'bootstrap/scss/bootstrap-reboot.scss'
import 'bootstrap/scss/bootstrap.scss'

import Layout from './containers/Layout/Layout'
import Login from './containers/Login/Login'
import Home from './containers/Home/Home'
import Setting from './containers/Setting/Setting'

class App extends Component {
  state = { isLoggedIn: true }

  render() { 
    return this.state.isLoggedIn
      ? <Layout>
          {/* <Home /> */}
          <Setting />
        </Layout>
      : <Login />
  }
}

export default App
