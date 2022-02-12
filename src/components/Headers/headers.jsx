import React, { Component } from 'react'
import styles from './header.module.css'
import logo from '../public/logo.png'

class Headers extends Component {
  handleSignOut = () => {
    this.props.onSignOut()
  }

  render() {
    return (
      <div
        className={
          this.props.display === true
            ? styles.container_loggedin
            : styles.container
        }
      >
        <div className={styles.logo}>
          <img src={logo} alt="" className={styles.img} />
          <h2 className={styles.title}>Business Card Maker</h2>
        </div>

        <button
          className={
            this.props.display === true
              ? styles.logoutButton
              : styles.hiddenButton
          }
          onClick={this.handleSignOut}
        >
          Log Out
        </button>
      </div>
    )
  }
}

export default Headers
