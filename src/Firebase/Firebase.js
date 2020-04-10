import firebase from 'firebase/app';//all sdk load
//import 'firebase/app';
import 'firebase/auth';
// import   'firebase/fireStore';


var firebaseConfig = {
    apiKey: "AIzaSyDZlPYs4cGs6rMzR9Zl77o64BfrtuTFXhE",
    authDomain: "myreactjs-db26c.firebaseapp.com",
    databaseURL: "https://myreactjs-db26c.firebaseio.com",
    projectId: "myreactjs-db26c",
    storageBucket: "myreactjs-db26c.appspot.com",
    messagingSenderId: "212224951642",
    appId: "1:212224951642:web:095a80579da92e7d3adf63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;