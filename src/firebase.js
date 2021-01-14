//import * as firebase from "firebase/app";
import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDgrddccdzsRmCaQLFBC-fu6CECRs0deyg",
    authDomain: "freet-55de4.firebaseapp.com",
    databaseURL: "https://freet-55de4-default-rtdb.firebaseio.com",
    projectId: "freet-55de4",
    storageBucket: "freet-55de4.appspot.com",
    messagingSenderId: "1038787334910",
    appId: "1:1038787334910:web:1fc9cd9ad9d2372be94baf"
};
// Initialize Firebase
var fireDB=firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();