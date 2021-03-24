import firebase from 'firebase/app'
import 'firebase/auth'
// import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/analytics'

 var firebaseConfig = {
   apiKey: "AIzaSyA_SuPywmvekXR2bwdBcUuEnxZr_UTlFXY",
   authDomain: "ems-portlal.firebaseapp.com",
   projectId: "ems-portlal",
   storageBucket: "ems-portlal.appspot.com",
   messagingSenderId: "533829865742",
   appId: "1:533829865742:web:e677fa6246b9e1d503075f",
 };
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()
firebase.storage()
export { firebase }
