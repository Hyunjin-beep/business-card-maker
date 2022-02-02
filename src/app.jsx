import React, { Component } from 'react'
import Login from './components/Login/Login'
import Headers from './components/Headers/headers'

import './app.css'
import {
  signInWithGoogle,
  signInWithGitHub,
  signOutCheck,
} from './Service/Firebase'

class App extends Component {
  state = {
    LogInStatus: false,
  }

  handleSignOut = () => {
    signOutCheck()
    this.setState({ LogInStatus: false })
  }

  handleLogInGoogle = () => {
    signInWithGoogle().then(() => {
      this.setState({ LogInStatus: true })
    })
  }

  handleGitHubLogin = () => {
    signInWithGitHub()
    this.setState({ LogInStatus: true })
  }
  render() {
    return (
      <>
        <Headers onSignOut={this.handleSignOut}></Headers>
        <Login
          onGoogleLogin={this.handleLogInGoogle}
          onGitHubLogIn={this.handleGitHubLogin}
        ></Login>
      </>
    )
  }
}

export default App
