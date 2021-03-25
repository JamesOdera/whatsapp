import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdYifZvuJisinwE0VNfO91u1qr44m9rMQ",
  authDomain: "whatsapp-58ec6.firebaseapp.com",
  projectId: "whatsapp-58ec6",
  storageBucket: "whatsapp-58ec6.appspot.com",
  messagingSenderId: "721063812486",
  appId: "1:721063812486:web:e296399b6d9bf6a25e6007",
  measurementId: "G-LS437MPKBD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;