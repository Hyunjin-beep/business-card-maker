import React, { Component } from 'react'
import styles from './login.module.css'

class Login extends Component {
  handleLogin = event => {
    console.log(event.currentTarget.textContent)
    this.props.onHandleLogin(event.currentTarget.textContent)
  }

  render() {
    return (
      <div className={styles.login_container}>
        <h2 className={styles.header}>Login</h2>
        <button className={styles.loginbutton} onClick={this.handleLogin}>
          Google
        </button>
        <button className={styles.loginbutton} onClick={this.handleLogin}>
          GitHub
        </button>
      </div>
    )
  }
}

export default Login
