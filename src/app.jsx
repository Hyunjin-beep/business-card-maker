import React, { Component } from 'react'
import Login from './components/Login/Login'
import './app.css'
import {
  signInWithGoogle,
  signInWithGitHub,
  userChecked,
} from './Service/Firebase'

class App extends Component {
  state = {
    LogInStatus: false,
  }

  componentDidMount() {
    const status = userChecked()
    console.log(status)
    this.setState({ LogInStatus: true })
  }

  handleLogInGoogle = () => {
    signInWithGoogle()
  }

  handleGitHubLogin = () => {
    signInWithGitHub()
  }
  render() {
    return (
      <>
        <Login
          onGoogleLogin={this.handleLogInGoogle}
          onGitHubLogIn={this.handleGitHubLogin}
        ></Login>
      </>
    )
  }
}

export default App
