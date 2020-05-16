import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDm_FWceBh2GNxWASo7qhzFpmICnqGM_mw",
  authDomain: "maghourtest.firebaseapp.com",
  databaseURL: "https://maghourtest.firebaseio.com",
  projectId: "maghourtest",
  storageBucket: "maghourtest.appspot.com",
  messagingSenderId: "1055600029211",
  appId: "1:1055600029211:web:c091fc81e65b7c15ddd2be",
  measurementId: "G-Y81ZQCTDTC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
