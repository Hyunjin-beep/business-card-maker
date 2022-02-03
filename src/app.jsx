import React, { Component } from 'react'
import Login from './components/Login/Login'
import Headers from './components/Headers/headers'

import './app.css'
import {
  signInWithGoogle,
  signInWithGitHub,
  signOutCheck,
} from './Service/Firebase'
import Footer from './components/Footer/footer'

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
        <Headers
          onSignOut={this.handleSignOut}
          display={this.state.LogInStatus ? 'block' : 'none'}
        ></Headers>
        <Login
          onGoogleLogin={this.handleLogInGoogle}
          onGitHubLogIn={this.handleGitHubLogin}
        ></Login>
        <Footer></Footer>
      </>
    )
  }
}

export default App
