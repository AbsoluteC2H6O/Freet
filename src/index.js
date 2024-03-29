import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import {Helmet} from "react-helmet";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //archivo de CSS de bootstrap
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';//archivo de JS de bootstrap
import firebase from './firebase';
import {
  FirebaseAppProvider
} from "reactfire";
//import { Suspense } from 'react';
//  <Suspense fallback={"Conectando a la App..."} >
//firebase={firebase} DENTOR DE fIREBASEaPP
//<FirebaseAppProvider>
ReactDOM.render(
  
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
