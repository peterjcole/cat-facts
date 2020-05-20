import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

const config = {
  apiKey: "AIzaSyCfZ-N-8ebVnR9SHfJshzRbPEuwevZHhXQ",
  authDomain: "cat-facts-21b86.firebaseapp.com",
  databaseURL: "https://cat-facts-21b86.firebaseio.com",
  projectId: "cat-facts-21b86",
  storageBucket: "cat-facts-21b86.appspot.com",
  messagingSenderId: "220683165393",
  appId: "1:220683165393:web:66b96c300acb1b30a02ff0",
  measurementId: "G-L7CPJV7VXH"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
  firebase.analytics()
  const firestore = firebase.firestore()

  if (typeof window !== 'undefined') {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  }
}

export default firebase
