import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

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

const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result
  } catch (error) {
    return console.log(error)
  }
}

export const signInWithGitHub = async () => {
  try {
    const result = await signInWithPopup(auth, gitHubProvider)
    return result
  } catch (error) {
    return console.log(error)
  }
}

export const userChecked = () => {
  if (user) {
    return true
  } else {
    return false
  }
}

export const signOutCheck = () => {
  signOut(auth)
    .then(() => {
      console.log('logged out')
    })
    .catch(error => {
      console.log(error)
    })
}
