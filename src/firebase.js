import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_i1V-Jm7xl4oL5j4ksjM6a736ePW5JsY",

  authDomain: "pherico-4a1e4.firebaseapp.com",

  projectId: "pherico-4a1e4",

  storageBucket: "pherico-4a1e4.appspot.com",

  messagingSenderId: "315583696265",

  appId: "1:315583696265:web:58860563e9dcb443902558",

  measurementId: "G-D36QJXK4DD",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default db;
