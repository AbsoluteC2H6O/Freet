import React, {Component} from 'react';
import './NavBar2.css'
import {Container,Row,Col, Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { createChart} from 'lightweight-charts';
import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Link
} from "react-router-dom";

class NavBar2 extends Component{
  render(){
    return(
      <>
      <nav className="navbar navBarFreet2 navbar-expand-lg justify-content-between navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-left" id="navbarSupportedContent2">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item marginEspecial">
                        <NavLink className="nav-link text-uppercase LyricsTitleNav1" href="#ideas" to="/ideas" activeclassname="active">
                          ideas
                        </NavLink>
                      </li>
                      <li className="nav-item marginEspecial">
                      <NavLink className="nav-link text-uppercase LyricsTitleNav1" href="#resultados" to="/resultados" activeclassname="active">
                          resultados
                      </NavLink>
                      </li> 
                      <li className="nav-item marginEspecial">
                      <NavLink className="nav-link text-uppercase LyricsTitleNav1" href="#ratio" to="/ratio" activeclassname="active">
                          ratio
                      </NavLink>
                      </li>
                      <li className="nav-item marginEspecial">
                      <NavLink className="nav-link text-uppercase LyricsTitleNav1" href="#calculadoraderiesgo" to="/calculadoraderiesgo" activeclassname="active">
                          calculadora de riesgo
                      </NavLink>
                      </li>
                      <li className="nav-item marginEspecial">
                      <NavLink className="nav-link text-uppercase LyricsTitleNav1" href="#graficoavanzado" to="/graficoavanzado" activeclassname="active">
                          grafico avanzado
                      </NavLink>
                      </li>
                     
                    </ul>
                </div>
                </nav>    
			</>
    );
  }
}
  export default NavBar2;