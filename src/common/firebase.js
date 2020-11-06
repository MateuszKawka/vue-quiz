import firebase from 'firebase/app'

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDdUj2meDHEMLxz9abOXUZTJWPSuRsX_Aw",
    authDomain: "quiz-v2-9f472.firebaseapp.com",
    databaseURL: "https://quiz-v2-9f472.firebaseio.com",
    projectId: "quiz-v2-9f472",
    storageBucket: "quiz-v2-9f472.appspot.com",
    messagingSenderId: "242662816243",
    appId: "1:242662816243:web:d63c573e8624cfbc347a86"

}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()


// collection references
const highscoresCollection = db.collection('highscores')

// export utils/refs
export {
  db,
  highscoresCollection
}