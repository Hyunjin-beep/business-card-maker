import React, { Component } from 'react'
import Login from './components/Login/Login'
import Headers from './components/Headers/headers'

import './app.css'

import Footer from './components/Footer/footer'
import Form from './components/Form/form'
import {
  signInWithGoogle,
  signInWithGitHub,
  signOutCheck,
} from './Service/Firebase'
import Form_header from './components/Form/form_header'

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
          display={this.state.LogInStatus ? true : 'false'}
        ></Headers>

        {this.state.LogInStatus ? (
          <>
            <Form_header></Form_header>
            <Form></Form>
          </>
        ) : (
          <Login
            onGoogleLogin={this.handleLogInGoogle}
            onGitHubLogIn={this.handleGitHubLogin}
          ></Login>
        )}

        <Footer display={this.state.LogInStatus ? true : 'false'}></Footer>
      </>
    )
  }
}

export default App
