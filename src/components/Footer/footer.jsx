import React, { Component } from 'react'
import styles from './footer.module.css'

class Footer extends Component {
  render() {
    return (
      <footer
        className={
          this.props.loginStatus === true
            ? styles.container_loggedin
            : styles.container
        }
      >
        <p className={styles.title}>Code Your Dream</p>
      </footer>
    )
  }
}

export default Footer
