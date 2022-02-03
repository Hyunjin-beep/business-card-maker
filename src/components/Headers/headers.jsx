import React, { Component } from 'react'
import styles from './header.module.css'

class Headers extends Component {
  handleSignOut = () => {
    this.props.onSignOut()
  }
  render() {
    const style = this.props.display === 'none' ? 'none' : 'inline'
    return (
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <img src="../public/logo.png" alt="" className={styles.header_img} />
          <h2 className={styles.header_title}>Business Card Maker</h2>
        </div>

        <button
          className={`${styles.logoutButton}`}
          onClick={this.handleSignOut}
          style={{ display: style }}
        >
          Log Out
        </button>
      </div>
    )
  }
}

export default Headers
