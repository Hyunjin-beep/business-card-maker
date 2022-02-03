import React, { Component } from 'react'
import styles from './login.module.css'

class Login extends Component {
  handleGoogleLogin = () => {
    this.props.onGoogleLogin()
  }

  handleGitHubLogin = () => {
    this.props.onGitHubLogIn()
  }
  render() {
    return (
      <div className={styles.login_container}>
        <h2 className={styles.header}>Login</h2>
        <button className={styles.loginbutton} onClick={this.handleGoogleLogin}>
          Google
        </button>
        <button className={styles.loginbutton} onClick={this.handleGitHubLogin}>
          GitHub
        </button>
      </div>
    )
  }
}

export default Login
