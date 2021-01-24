import React,  {Component} from "react";
import './App.css';
import ComponentPart1 from "./ComponentPart1";
import {Button, Row} from "react-bootstrap";
//import firebase from './firebase';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import { FileUploadNew } from "FileUploadNew";
//import { auth } from "firebase";
//import "firebase/auth";
//import  from './firebase';
//import { auth, database,firebase} from './firebase';
/**
 * 
 * 
 * https://stackoverflow.com/questions/48592656/firebase-auth-is-not-a-function
 * const auth = firebase.auth();
const database = firebase.firestore();

export { auth, database } 
import { auth, database} from '@/firebase.js';
This was my mistake:

export default { auth, database }
import auth from '@/firebase.js';


// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
console.log(firebase.auth);
These also seem to work if you only want auth:

import { auth } from "firebase/app";
import "firebase/auth";
console.log(auth);
or

import { auth } from "firebase";
console.log(auth);


 */

  //aqui va
         //@type {firebase.auth.OAuthCredential} 
        /**
         * 
         *
 var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
       //aqui va
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
         */

        //const auth = firebase.auth();
        //const database = firebase.firestore();
class FileUploadNew extends Component{
    constructor(props){
      super(props)
      this.state ={
        uploadValue: 0,
       
      };
    }
    render(){
      return(
        <>
        <Row>
           <progress value={this.state.uploadValue} max="100">
          {this.state.uploadValue} %
        </progress>
        </Row>
        <Row>
          <br/>
        <input type='file' onChange={this.props.onUpload}/>
        </Row>
        <Row>
        <img width="520" src={this.state.picture} alt=""/>    
        </Row>     
        </>
      );
    }
  }
class LoginGoogle extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            user: [],
            pictures: []
        };

        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    componentWillMount (){
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({
                //Emascript 6 mismo nombre de var y property
                user
            });
        });

        firebase.database().ref('pictures').on('child_added', snapshot => {
            this.setState({
              pictures: this.state.pictures.concat(snapshot.val())
            });
          });
    }
    handleAuth(){
        
       
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
       .then(result => console.log(`${result.user.email} ha iniciado sesion`))
       .catch(error => console.log(`Error ${error.code}: ${error.message}`));
       
       
    }

    handleLogout (){
         firebase.auth().signOut()
        .then(result => console.log(`${result.user.email} ha cerrado sesion`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
        
    }
    handleUpload (event) {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`IdeaImagenes/${file.name}`);
        const task = storageRef.put(file);
    
        // Listener que se ocupa del estado de la carga del fichero
        task.on('state_changed', snapshot => {
          // Calculamos el porcentaje de tamaño transferido y actualizamos
          // el estado del componente con el valor
          let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.setState({
            uploadValue: percentage
          })
        }, error => {
          // Ocurre un error
          console.error(error.message);
        }, () => {
          // Subida completada
          // Obtenemos la URL del fichero almacenado en Firebase storage
          // Obtenemos la referencia a nuestra base de datos 'pictures'
          // Creamos un nuevo registro en ella
          // Guardamos la URL del enlace en la DB
          const record = {
            
            displayName: this.state.user.displayName,
            image: task.snapshot.downloadURL,
            photoURL: this.state.user.photoURL
          };
          const dbRef = firebase.database().ref('pictures');
          const newPicture = dbRef.push();
          newPicture.set(record);
        });
      }
    renderLoginButton(){
        //si el usuario esta logeado
        if(this.state.user){
            return(
            <>
            <div>
            <img src={this.state.user.photoURL} alt={this.state.user.displayName}></img>
            <p>Hola {this.state.user.displayName}</p>
            <Button onClick={this.handleLogout}>Salir</Button>
            <FileUploadNew onUpload={this.handleUpload}/>

            {
            this.state.pictures.map(picture => (
              <div className="App-card">
                <figure className="App-card-image">
                  <img width="320" src={picture.image} />
                  <figCaption className="App-card-footer">
                    <img className="App-card-avatar" src={picture.photoURL} alt={picture.displayName} />
                    <span className="App-card-name">{picture.displayName}</span>
                  </figCaption>
                </figure>
              </div>
            )).reverse()
          }
            </div>
            </>
            );
        }else{
            return(
                <>
            
            <Button onClick={this.handleAuth}>
            Iniciar sesion con Google
            </Button>
            </>
            );
        }
    }
    

    
    render(){
        return(
            <>
            {this.renderLoginButton()}
            </>
        );
    }
}

export default LoginGoogle;