import React, { Component } from 'react'

import 'bootstrap/scss/bootstrap-reboot.scss'
import 'bootstrap/scss/bootstrap.scss'

import Layout from './containers/Layout/Layout'
import Login from './containers/Login/Login'
import Home from './containers/Home/Home'
import Profile from './containers/Profile/Profile'
import Notifications from './containers/Notifications/Notifications'

class App extends Component {
  state = {
    isLoggedIn: true,
    token: 'token'
  }

  render() { 
    return this.state.isLoggedIn
      ? <Layout>
          <Notifications />
        </Layout>
      : <Login />
  }
}

export default App
