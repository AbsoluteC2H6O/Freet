//import * as firebase from "firebase/app";provider
import firebase from "firebase";
import { auth } from "firebase";
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyDgrddccdzsRmCaQLFBC-fu6CECRs0deyg",
    authDomain: "freet-55de4.firebaseapp.com",
    databaseURL: "https://freet-55de4-default-rtdb.firebaseio.com",
    projectId: "freet-55de4",
    storageBucket: "freet-55de4.appspot.com",
    messagingSenderId: "1038787334910",
    appId: "1:1038787334910:web:1fc9cd9ad9d2372be94baf"
};

/**
 * 
 * 
 var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://freet-55de4-default-rtdb.firebaseio.com"
});
 */

// Initialize Firebase
var fireDB=firebase.initializeApp(firebaseConfig);
//const auth = firebase.auth();
//const database = firebase.firestore();

//ReactDOM.render( <FileUpload/>,document.getElementById('root'));
//https://console.cloud.google.com/iam-admin/serviceaccounts?authuser=0&project=freet-55de4&pli=1
export default fireDB.database().ref();
/*
class FileUpload extends Component{
  constructor(props){
    super(props)
    this.state ={
      uploadValue: 0
    }
  }
  handleChange (event){

  }
  render(){
    return(
      <>
      <progress value={this.state.uploadValue} max='100'></progress>
      <br/>
      <input type='file' onChange={this.handleChange.bind(this)}/>
      {this.state.message}
      <br/>
      <img width='100' src={this.state.picture}/>
      </>
    );
  }
}
*/