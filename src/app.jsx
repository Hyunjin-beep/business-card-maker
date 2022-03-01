import React, { Component } from 'react'
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Maker from './components/Maker/maker'
import styles from './app.module.css'

class App extends Component {
  state = {
    LogInStatus: false,
    img: '',
    userDetail: [],
    userData: [],
  }

  render() {
    return (
      <div className={styles.app}>
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
              element={
                <Maker
                  authService={this.props.authService}
                  database={this.props.database}
                  imageInput={this.props.imageInput}
                ></Maker>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
