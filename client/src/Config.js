import firebase from 'firebase/app'
import 'firebase/auth'
// import firebase from 'firebase/app'
// import 'firebase/storage'
import 'firebase/analytics'

var firebaseConfig = {
  apiKey: 'AIzaSyD2FKnXzf86bJ54ga_cv7sxfmYCQUZPh4I',
  authDomain: 'ems-portal-eb788.firebaseapp.com',
  projectId: 'ems-portal-eb788',
  storageBucket: 'ems-portal-eb788.appspot.com',
  messagingSenderId: '1048802296593',
  appId: '1:1048802296593:web:c3257d426a4cb3b6eec2b0',
  measurementId: 'G-MZJHMYGNE4',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()
export { firebase }
