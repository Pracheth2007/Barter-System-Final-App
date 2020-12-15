import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCzlPjTmoZd-gYmfMfgUbXA8a1IiZdU9ak",
  authDomain: "barter-system-38969.firebaseapp.com",
  databaseURL: "https://barter-system-38969.firebaseio.com",
  projectId: "barter-system-38969",
  storageBucket: "barter-system-38969.appspot.com",
  messagingSenderId: "950409703532",
  appId: "1:950409703532:web:62aad9db1880262905e849",
  measurementId: "G-PVD6SMM8RF"
};


  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
