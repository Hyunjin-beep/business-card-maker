import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/footer'
import Headers from '../Headers/headers'
import styles from './login.module.css'

class Login extends Component {
  state = {
    uid: '',
    loginStatus: false,
  }
  // useNagivate를 찾아야함
  handleLogin = event => {
    const providerName = event.currentTarget.textContent

    this.props.authService.loginInAuth(providerName).then(result => {
      // this.setState({ userDetail: result.user })

      // this.retrieveUserData(result.user.uid)
      console.log(result)
      this.setState({ loginStatus: true })
      this.setState({ uid: result.user.uid })
    })
  }

  componentDidMount() {
    // when user had logged in, go to maker page
    this.props.authService.onAuthState()
  }

  goToMaker = userId => {
    // const navigate = useNavigate()
    // navigate('/form', { state: { id: userId } })
    // console.log(this.navigate)
  }

  render() {
    return (
      <section className={styles.container}>
        <Headers loginStatus={this.state.loginStatus}></Headers>
        <div className={styles.login_container}>
          <h2 className={styles.header}>Login</h2>
          <button className={styles.loginbutton} onClick={this.handleLogin}>
            Google
          </button>
          <button className={styles.loginbutton} onClick={this.handleLogin}>
            GitHub
          </button>
        </div>
        <Footer loginStatus={this.state.loginStatus}></Footer>
      </section>
    )
  }
}

export default Login
