import React,  {Component} from "react";
import './App.css';
import ComponentPart1 from "./ComponentPart1";
import {Button} from "react-bootstrap";
//import firebase from './firebase';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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
class LoginGoogle extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            user: null
        };

        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount (){
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({
                //Emascript 6 mismo nombre de var y property
                user
            });
        });
    }
    handleAuth(){
        
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
    renderLoginButton(){
        //si el usuario esta logeado
        if(this.state.user){
            return(
            <>
            <div>
            <img src={this.state.user.photoURL} alt={this.state.user.displayName}></img>
            <p>Hola {this.state.user.displayName}</p>
            <Button onClick={this.handleLogout}>Salir</Button>
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