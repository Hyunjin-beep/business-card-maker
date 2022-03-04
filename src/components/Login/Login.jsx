import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/footer'
import Headers from '../Headers/headers'
import styles from './login.module.css'

const Login = ({ authService }) => {
  const [loginStatus, setLogin] = useState({})
  const navigate = useNavigate()

  // useNagivate를 찾아야함
  const handleLogin = event => {
    const providerName = event.currentTarget.textContent

    authService
      .loginInAuth(providerName) //
      .then(result => {
        setLogin(true)
        goToMaker(result)
      })
  }

  const goToMaker = () => {
    navigate('/maker')
  }

  // user가 바뀌었다면
  useEffect(() => {
    authService.onAuthState(user => {
      user && goToMaker(user)
    })
  }, [])

  return (
    <section className={styles.container}>
      <Headers loginStatus={loginStatus}></Headers>
      <div className={styles.login_container}>
        <h2 className={styles.header}>Login</h2>
        <button className={styles.loginbutton} onClick={handleLogin}>
          Google
        </button>
        <button className={styles.loginbutton} onClick={handleLogin}>
          GitHub
        </button>
      </div>
      <Footer loginStatus={loginStatus}></Footer>
    </section>
  )
}

export default Login
