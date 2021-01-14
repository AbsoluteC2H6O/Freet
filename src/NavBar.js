import React, {Component} from 'react';
import './NavBar1.css';
import './App.css';
import Forex from "./indiceFotografico/Forex.png";
import Criptomonedas from "./indiceFotografico/Criptomonedas.png";
import Valores from "./indiceFotografico/Valores.png";
import Commodities from "./indiceFotografico/Commodities.png";
import Trading from "./indiceFotografico/Trading.png";
import {Container,Row,Col, Navbar,Nav,NavDropdown, Badge} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
class NavBar extends Component{
    constructor(props){
        super(props);
       // this.handleClick = this.handleClick.bind(this);

        this.state ={
            show: 'true'
        };
    }
	render(){

  //  handleClick(e) {
  //      this.setState({show: e.target.value});
        
   // }
    
		return(
			<>
            
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                         
                            <a className="nav-link dropdown-toggle LyricsTitleNav1 text-uppercase " href="#forex" id="navbarDropdown" role="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                forex
                            </a>        
                       
                        <div className="dropdown-menu navDcont" aria-labelledby="navbarDropdown">
                        <NavLink to="/AnalisisGeneral" activeclassName="active">
                            <a className="dropdown-item LyricsText" href="#AnalisisGeneral">Analisis General</a>
                        </NavLink>
                        <NavLink to="/datosTecnicos" activeclassName="active">
                            <a className="dropdown-item LyricsText" href="#DatosTecnicos">Datos Tecnicos</a>
                        </NavLink>
                        <NavLink to="/GraficosTr" activeclassName="active">
                            <a className="dropdown-item LyricsText" href="#GraficosTR">Graficos TR</a>
                        </NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink to="/otros" activeclassName="active">
                            <a className="dropdown-item LyricsText" href="#Otros">Otros</a>
                        </NavLink>
                        </div>
                    </li>     
                    <li className="nav-item">
                    <NavLink to="/criptomonedas" activeclassName="active">
                        <a className="nav-link text-uppercase LyricsTitleNav1 " href="#criptomonedas">criptomonedas</a>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/valores" activeclassName="active">
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#valores">valores</a>
                    </NavLink>
                    </li>  
                    <li>
                    <NavLink to="/commodities" activeclassName="active">
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#commodities">commodities</a>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/calendarioeconomico" activeclassName="active">
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#calendarioeconomico">calendario economico</a>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <div className="navbar22">
                        <div className="subnav">
                        <button className="subnavbtn text-uppercase LyricsTitleNav1">Educacion <i class="fa fa-caret-down"></i></button>
                            <div className="subnav-content">z
                            <li className="nav-item">
                        <NavLink to="/ForexManual" activeclassName="active">
                            <a href="#ForexManual"><img 
                            src={Forex} 
                            className="img-fluid img1" 
                            alt="ForexManual" 
                            style={{width: '96.5%'}}
                            onClick={this.handleClick}
                            >
                            
                        </img></a>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/CriptomonedasManual" activeclassName="active">
                            <a href="#CriptomonedasManual"><img 
                            src={Criptomonedas} 
                            className="img-fluid img1" 
                            alt="CriptomonedasManual" 
                            style={{width: '96.5%'}}>
                        </img></a>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/ValoresManual" activeclassName="active">
                            <a href="#package"><img 
                            src={Valores} 
                            className="img-fluid img1" 
                            alt="ValoresManual" 
                            style={{width: '96.5%'}}>
                        </img></a>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/CommoditiesManual" activeclassName="active">
                            <a href="#CommoditiesManual"><img 
                            src={Commodities} 
                            className="img-fluid img1" 
                            alt="CommoditiesManual" 
                            style={{width: '100%'}}>
                        </img></a>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/TradingManual" activeclassName="active">
                        <a href="#TradingManual">
                        <img 
                            src={Trading} 
                            className="img-fluid img1" 
                            alt="TradingManual" 
                            style={{width: '100%'}}>
                        </img>
                        </a>
                        </NavLink>
                        </li>
                            </div>
                        </div>    
                    </div>
                    </li>
                    <li>
                    <NavLink to="/planes" activeclassName="active">
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#planes">planes</a>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/sobrenosotros" activeclassName="active">
                        <a className="nav-link text-uppercase LyricsTitleNav1" href="#sobrenosotros">sobre nosotros</a>
                    </NavLink>
                    </li>
                    </ul>
                </div>
                </nav>
            </>
		);
	}
}
export default NavBar;

/**
 

<li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle LyricsTitleNav1 text-uppercase" href="#forex" id="navbarDropdown" role="button" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Educacion
                    </a>
                  
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink to="/ForexManual" activeclassName="active">
                        <a className="dropdown-item LyricsText" href="#ForexManual">
                        <img 
                            src={Forex} 
                            className="img-fluid" 
                            alt="LogoFreet" 
                            style={{width: '15%'}}>
                        </img></a>
                    </NavLink>
                    <NavLink to="/CriptomonedasManual" activeclassName="active">
                        <a className="dropdown-item LyricsText" href="#CriptomonedasManual">
                        <img 
                            src={Criptomonedas} 
                            className="img-fluid" 
                            alt="LogoFreet" 
                            style={{width: '15%'}}>
                        </img></a>
                    </NavLink>
                    <NavLink to="/ValoresManual" activeclassName="active">
                        <a className="dropdown-item LyricsText" href="#ValoresManual">
                        <img 
                            src={Valores} 
                            className="img-fluid" 
                            alt="LogoFreet" 
                            style={{width: '15%'}}>
                        </img>
                        </a>
                    </NavLink>
                    <NavLink to="/CommoditiesManual" activeclassName="active">
                        <a className="dropdown-item LyricsText" href="#CommoditiesManual">
                        <img 
                            src={Commodities} 
                            className="img-fluid" 
                            alt="LogoFreet" 
                            style={{width: '15%'}}>
                        </img>
                        </a>
                    </NavLink>
                    <NavLink to="/TradingManual" activeclassName="active">
                        <a className="dropdown-item LyricsText" href="#TradingManual">
                        <img 
                            src={Trading} 
                            className="img-fluid" 
                            alt="LogoFreet" 
                            style={{width: '15%'}}>
                        </img>
                        </a>
                    </NavLink>
                    </div>
                    </li>


 * 
 */