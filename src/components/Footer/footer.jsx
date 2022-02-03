import React, { Component } from 'react'
import styles from './footer.module.css'

class Footer extends Component {
  render() {
    return (
      <>
        <footer className={styles.footer}>
          <p className={styles.title}>Code Your Dream</p>
        </footer>
      </>
    )
  }
}

export default Footer
