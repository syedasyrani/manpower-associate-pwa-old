import React, { Component } from 'react'

import 'bootstrap/scss/bootstrap-reboot.scss'
import 'bootstrap/scss/bootstrap.scss'

import Layout from './containers/Layout/Layout'
import Login from './containers/Login/Login'
import Home from './containers/Home/Home'
import Profile from './containers/Profile/Profile'
import Notifications from './containers/Notifications/Notifications'
import SmartScheduler from './containers/SmartScheduler/SmartScheduler'

class App extends Component {
  state = {
    isLoggedIn: true,
    token: 'token'
  }

  render() { 
    return this.state.isLoggedIn
      ? <Layout>
          <SmartScheduler />
        </Layout>
      : <Login />
  }
}

export default App
