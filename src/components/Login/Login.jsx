import React, { Component } from 'react'

class Login extends Component {
  handleGoogleLogin = () => {
    this.props.onGoogleLogin()
  }

  handleGitHubLogin = () => {
    this.props.onGitHubLogIn()
  }
  render() {
    return (
      <>
        <button onClick={this.handleGoogleLogin}>Google</button>
        <button onClick={this.handleGitHubLogin}>GitHub</button>
      </>
    )
  }
}

export default Login
