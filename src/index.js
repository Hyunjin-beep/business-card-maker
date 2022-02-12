import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './app'
import AuthService from './Service/auth_service'
import { app } from './Service/Firebase'

const authService = new AuthService(app)

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
)
