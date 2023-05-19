import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBzYzt0bVh4DLRxWdbBTLFgxv-mg9WdFLM",
    authDomain: "linked-clone-yt-8498e.firebaseapp.com",
    projectId: "linked-clone-yt-8498e",
    storageBucket: "linked-clone-yt-8498e.appspot.com",
    messagingSenderId: "1096154453154",
    appId: "1:1096154453154:web:5e639d02f960a7b287b3fb"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };