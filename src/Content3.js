import React, {Component} from 'react';
import './Content3.css';
import IqOption from "./iq-option-logo1.png";
import Etoro from "./1200px-Etoro_logo.svg.png";
import Xm from "./logo_principal_xm.jpg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Content3 extends Component{
    render(){
        return(

            <div className="container-fluid">
                <div className="content3-container">
                <h2 className="content3 tex-center LyricsTitleBroker">PRINCIPALES BROKERS REGULADOS</h2>
                </div>

                <div className="row brokers">
                <div className="col-sm-4">
                    <img src={IqOption} class="img-rounded img responsive" alt="broker" width="180px" height="150px">

                    </img>
                </div>
                <div className="col-sm-4">
                <img src={Etoro} class="img-rounded img responsive" alt="broker" width="180px" height="150px">
                </img>
                </div>
                <div className="col-sm-4">
                <img src={Xm} class="img-rounded img responsive" alt="broker" width="180px" height="150px">

                </img>
                </div>
                </div>
            </div>
        );
    }
}

export default Content3;
