import React, {Component} from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import './Navtest.css';
class Navtest extends Component{
    render(){
        return(
            <>
            <nav sticky={'top'} className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle LyricsTitleNav1 text-uppercase" href="#forex" id="navbarDropdown" role="button" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Forex
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item LyricsText" href="#AnalisisGeneral">Analisis General</a>
                        <a className="dropdown-item LyricsText" href="#DatosTecnicos">Datos Tecnicos</a>
                        <a className="dropdown-item LyricsText" href="#GraficosTR">Graficos TR</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item LyricsText" href="#Otros">Otros</a>
                        </div>
                    </li>
                   
                    <li className="nav-item">
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#criptomonedas">criptomonedas</a>
                    </li>
                    <li>
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#valores">valores</a>
                    </li>  
                    <li>
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#commodities">commodities</a>
                    </li>
                    <li>
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#calendarioeconomico">calendario economico</a>
                    </li>
                    <li>
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#Educacion">Educacion</a>
                    </li>
                    <li>
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#planes">planes</a>
                    </li>
                    <li>
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#sobrenosotros">sobre nosotros</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </>
        );
    }
}
export default Navtest;