import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from './Firebase'

class AuthService {
  loginInAuth(providerName) {
    const authProvider = this.getProvider(providerName)
    return signInWithPopup(auth, authProvider)
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return new GoogleAuthProvider()

      case 'GitHub':
        return new GithubAuthProvider()
      default:
        throw new Error(`Unknown provider : ${providerName}`)
    }
  }

  logOutInAuth() {
    signOut(auth)
  }

  onAuthState() {
    onAuthStateChanged(auth, user => {
      user && console.log(user)
    })
  }
}

export default AuthService
