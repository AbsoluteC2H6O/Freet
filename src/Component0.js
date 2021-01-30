import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import './App.css';
  import Logo from './Logo';
import Forex from './Forex';
  class Component0 extends Component{
    render(){
        return(
            <>
            <Router>
             
              <Switch>
              <Route exact default path="/Freet" component={Forex}/>
              </Switch>
                   
                   </Router> 
               </>
           );
       }
   }
   export default Component0;