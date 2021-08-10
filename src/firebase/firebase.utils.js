import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAKYgj5V2XsLFXLAPTvI3W7OzxRqp1sECI",
  authDomain: "crwn-db-af252.firebaseapp.com",
  projectId: "crwn-db-af252",
  storageBucket: "crwn-db-af252.appspot.com",
  messagingSenderId: "626881796018",
  appId: "1:626881796018:web:c8f92bdfcda9193cddf6ab",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}

export default firebase
