import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBK4uQrAYefKFLWtBwelLvE1vI29Mzby3w',
  authDomain: 'business-card-44edd.firebaseapp.com',
  projectId: 'business-card-44edd',
  storageBucket: 'business-card-44edd.appspot.com',
  messagingSenderId: '407502117264',
  appId: '1:407502117264:web:44334cadc0c9758bd33b15',
  measurementId: 'G-68GD3DKK74',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)
export const user = auth.currentUser

export const userChecked = () => {
  if (user) {
    return true
  } else {
    return false
  }
}
