import React from 'react'
import styles from './header.module.css'
import logo from '../public/logo.png'
import { useNavigate } from 'react-router-dom'

const Headers = props => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    props.authService.logOutInAuth()
    props.changeLoginStatus(false)
    navigate('/')
  }

  return (
    <div
      className={
        props.loginStatus === true
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
          props.loginStatus === true ? styles.logoutButton : styles.hiddenButton
        }
        onClick={handleSignOut}
      >
        Log Out
      </button>
    </div>
  )
}

export default Headers
