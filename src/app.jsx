import React, { Component } from 'react'
import Login from './components/Login/Login'
import Headers from './components/Headers/headers'
import Form_header from './components/Form/form_header'
import './app.css'
import Aixos from 'axios'

import Footer from './components/Footer/footer'
import Form from './components/Form/form'
import {
  signInWithGoogle,
  signInWithGitHub,
  signOutCheck,
  db,
  auth,
} from './Service/Firebase'

import { set, ref } from 'firebase/database'

class App extends Component {
  state = {
    LogInStatus: false,
    img: '',
    userDetail: [],
  }

  handleSignOut = () => {
    signOutCheck()

    this.setState({ LogInStatus: false })
  }

  handleLogInGoogle = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
      this.setState({ userDetail: result.user })
      this.setState({ LogInStatus: true })
    })
  }

  handleGitHubLogin = () => {
    signInWithGitHub()
    this.setState({ LogInStatus: true })
  }

  saveInput = (userName, company, theme, position, email, intro) => {
    console.log(userName, company, theme, position, email, intro)
    const userID = this.state.userDetail.uid
    set(ref(db, `users/${userID}`), {
      userName,
      company,
      theme,
      position,
      email,
      intro,
    })

    const formData = new FormData()
    const file = this.state.img
    formData.append('file', file)
    formData.append('upload_preset', 'nq26orwa')

    Aixos.post(
      'https://api.cloudinary.com/v1_1/djhlpuabi/image/upload',
      formData
    ).then(response => {
      console.log(response)
    })
  }

  saveImg = file => {
    this.setState({ img: file })
  }
  render() {
    return (
      <>
        <Headers
          onSignOut={this.handleSignOut}
          display={this.state.LogInStatus ? true : 'false'}
        ></Headers>

        {this.state.LogInStatus ? (
          <>
            <Form_header></Form_header>
            <Form
              userDetail={this.state.userDetail}
              onSaveInput={this.saveInput}
              onImg={this.saveImg}
            ></Form>
          </>
        ) : (
          <Login
            onGoogleLogin={this.handleLogInGoogle}
            onGitHubLogIn={this.handleGitHubLogin}
          ></Login>
        )}

        <Footer display={this.state.LogInStatus ? true : 'false'}></Footer>
      </>
    )
  }
}

export default App
