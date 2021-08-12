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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef
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
