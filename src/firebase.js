// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCUZ6rKA1XP3KYDRpV7g-t2-GGJo-9rMZ8',
  authDomain: 'react-chat-78414.firebaseapp.com',
  projectId: 'react-chat-78414',
  storageBucket: 'react-chat-78414.appspot.com',
  messagingSenderId: '761253152091',
  appId: '1:761253152091:web:de644679fcbf8568a0067e',
  measurementId: 'G-LCPVSMBYGK',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export const db = getFirestore(app)
