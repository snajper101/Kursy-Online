import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"


const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
})

export const auth = app.auth()
export const firestore = app.firestore()
export default app

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({ prompt: "select_account"})


export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return
  const { uid } = userAuth

  const userRef = firestore.doc(`users/${uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdData: timestamp,
        ...additionalData
      })
    } catch(error) {
      console.log(error);
    }
  } 
  return userRef
}

