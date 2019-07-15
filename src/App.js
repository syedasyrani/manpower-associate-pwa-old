import React, { Component } from 'react'
import './App.css'

import Layout from 'Layout'
import Login from 'Login'


class App extends Component {
  state = {
    isLoggedIn: false
  }
  render() { 
    return this.state.sLoggedIn
      ? <Layout />
      : <Login />
  }
}

export default App
