// import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app'
// import 'firebase/storage';
// import 'firebase/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyA9B4qcco7UFunzFJ076lws6y3niT15fJ0",
  // authDomain: "firegram-app-8baef.firebaseapp.com",
  // projectId: "gallery-8374f",
  // storageBucket: "firegram-app-8baef.appspot.com",
  // messagingSenderId: "69510423482",
  // appId: "1:69510423482:web:5b181126478f10b2edb383"

  apiKey: "AIzaSyAkzYrr3d6TWO0i8qQAdAZ2Yzmm1sEZ-lU",
  authDomain: "gallery-8374f.firebaseapp.com",
  projectId: "gallery-8374f",
  storageBucket: "gallery-8374f.appspot.com",
  messagingSenderId: "885135525131",
  appId: "1:885135525131:web:beca089c3c73f191b8ce0e",
  measurementId: "G-1M2YFM1DG4"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebase;

export { projectStorage , projectFirestore, timestamp}