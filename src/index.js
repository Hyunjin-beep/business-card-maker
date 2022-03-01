import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './app'
import AuthService from './Service/auth_service'
import { app } from './Service/Firebase'
import Card_Data from './Service/Card_Data'
import ImageInput from './Service/image_input'

const authService = new AuthService(app)
const database = new Card_Data()
const imageInput = new ImageInput()

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      database={database}
      imageInput={imageInput}
    />
  </React.StrictMode>,
  document.getElementById('root')
)
