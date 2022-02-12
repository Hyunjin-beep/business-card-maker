import React, { Component } from 'react'
import Login from './components/Login/Login'
import Headers from './components/Headers/headers'
import Form_header from './components/Form/form_header'
import styles from './app.module.css'
import Aixos from 'axios'

import Footer from './components/Footer/footer'
import Form from './components/Form/form'

import { set, ref, onValue } from 'firebase/database'
import Card from './components/Card/card'
import Card_header from './components/Card/card_header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import maker from './components/Maker/maker'
import Maker from './components/Maker/maker'

class App extends Component {
  state = {
    LogInStatus: false,
    img: '',
    userDetail: [],
    userData: [],
  }

  // saveInput = (userName, company, theme, position, email, intro) => {
  //   const userID = this.state.userDetail.uid
  //   const formData = new FormData()
  //   const file = this.state.img
  //   formData.append('file', file)
  //   formData.append('upload_preset', 'nq26orwa')

  //   Aixos.post(
  //     'https://api.cloudinary.com/v1_1/djhlpuabi/image/upload',
  //     formData
  //   ).then(response => {
  //     set(ref(db, `users/${userID}`), {
  //       userName,
  //       company,
  //       theme,
  //       position,
  //       email,
  //       intro,
  //       image_url: response.data.secure_url,
  //     })
  //   })
  // }

  // saveImg = file => {
  //   this.setState({ img: file })
  // }

  // retrieveUserData = userID => {
  //   const userDataRef = ref(db, `users/${userID}`)

  //   onValue(userDataRef, snapshot => {
  //     const data = snapshot.val()

  //     this.setState({ userData: data })
  //   })
  // }
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              exact
              element={<Login authService={this.props.authService}></Login>}
            ></Route>
            <Route
              path="/maker"
              exact
              element={<Maker authService={this.props.authService}></Maker>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App
