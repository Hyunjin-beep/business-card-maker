import React, { Component } from 'react'
import Login from './components/Login/Login'
import Headers from './components/Headers/headers'
import Form_header from './components/Form/form_header'
import styles from './app.module.css'
import Aixos from 'axios'

import Footer from './components/Footer/footer'
import Form from './components/Form/form'
import {
  signInWithGoogle,
  signInWithGitHub,
  signOutCheck,
  db,
} from './Service/Firebase'

import { set, ref, onValue } from 'firebase/database'
import Card from './components/Card/card'
import Card_header from './components/Card/card_header'

class App extends Component {
  state = {
    LogInStatus: false,
    img: '',
    userDetail: [],
    userData: [],
  }

  handleLogin = providerName => {
    this.props.authService.loginInAuth(providerName).then(result => {
      this.setState({ userDetail: result.user })
      this.setState({ LogInStatus: true })
      this.retrieveUserData(result.user.uid)
    })
  }

  handleSignOut = () => {
    this.props.authService.logOutInAuth()

    this.setState({ LogInStatus: false })
  }

  componentDidMount() {
    // when user had logged in, go to maker page
    this.props.authService.onAuthState()
  }

  saveInput = (userName, company, theme, position, email, intro) => {
    const userID = this.state.userDetail.uid
    const formData = new FormData()
    const file = this.state.img
    formData.append('file', file)
    formData.append('upload_preset', 'nq26orwa')

    Aixos.post(
      'https://api.cloudinary.com/v1_1/djhlpuabi/image/upload',
      formData
    ).then(response => {
      set(ref(db, `users/${userID}`), {
        userName,
        company,
        theme,
        position,
        email,
        intro,
        image_url: response.data.secure_url,
      })
    })
  }

  saveImg = file => {
    this.setState({ img: file })
  }

  retrieveUserData = userID => {
    const userDataRef = ref(db, `users/${userID}`)

    onValue(userDataRef, snapshot => {
      const data = snapshot.val()

      this.setState({ userData: data })
    })
  }
  render() {
    return (
      <>
        <Headers
          onSignOut={this.handleSignOut}
          display={this.state.LogInStatus ? true : 'false'}
        ></Headers>

        {this.state.LogInStatus ? (
          <div className={styles.container}>
            <div className={styles.childContainer}>
              <Form_header></Form_header>
              <Form
                userData={this.state.userData}
                userDetail={this.state.userDetail}
                onSaveInput={this.saveInput}
                onImg={this.saveImg}
              ></Form>
            </div>

            <div className={styles.childContainer}>
              <Card_header></Card_header>
              <Card userData={this.state.userData}></Card>
            </div>
          </div>
        ) : (
          <Login
            onHandleLogin={this.handleLogin}
            onHandleLogin={this.handleLogin}
          ></Login>
        )}

        <Footer display={this.state.LogInStatus ? true : 'false'}></Footer>
      </>
    )
  }
}

export default App
