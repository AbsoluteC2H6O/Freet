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
                        <NavLink  className="dropdown-item LyricsText" href="#AnalisisGeneral" to="/AnalisisGeneral" activeclassname="active">
                            Analisis General
                        </NavLink>
                        <NavLink className="dropdown-item LyricsText" href="#DatosTecnicos" to="/datosTecnicos" activeclassname="active">
                           Datos Tecnicos
                        </NavLink>
                        <NavLink className="dropdown-item LyricsText" href="#GraficosTR" to="/GraficosTr" activeclassname="active">
                            Graficos TR
                        </NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item LyricsText" href="#Otros" to="/otros" activeclassname="active">
                           Otros
                        </NavLink>
                        </div>
                    </li>   

                        
                    <li className="nav-item">
                    <NavLink className="nav-link text-uppercase LyricsTitleNav1 " href="#criptomonedas" to="/criptomonedas" activeclassname="active">
                        criptomonedas
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className="nav-link text-uppercase LyricsTitleNav1" href="#valores" to="/valores" activeclassname="active">
                        valores
                    </NavLink>
                    </li>  

                   { /**  <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle LyricsTitleNav1 text-uppercase " href="#Commodities" id="navbarDropdown" role="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <NavLink className="nav-link text-uppercase LyricsTitleNav1" href="#commodities" to="/commodities" activeclassname="active">
                            commodities
                            </NavLink>
                            </a>  
                        <div className="dropdown-menu navDcont" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item LyricsText" href="#DatosTecnicosC" activeclassname="active">
                           Datos Tecnicos
                        </NavLink>
                        <NavLink  className="dropdown-item LyricsText" href="#GraficosC"  activeclassname="active">
                           Graficos
                        </NavLink>
                        </div>
                    </li> */}
                    <li>
                    <NavLink className="nav-link text-uppercase LyricsTitleNav1" href="#commodities" to="/commodities" activeclassname="active">
                       commodities
                    </NavLink>
                    </li> 
                    <li>
                    <NavLink className="nav-link text-uppercase LyricsTitleNav1" href="#calendarioeconomico" to="/calendarioeconomico" activeclassname="active">
                       calendario economico
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <div className="navbar22">
                        <div className="subnav">
                        <button className="subnavbtn text-uppercase LyricsTitleNav1">Educacion <i className="fa fa-caret-down"></i></button>
                            <div className="subnav-content">
                            <li className="nav-item img4">
                        <NavLink href="#ForexManual" to="/ForexManual" activeclassname="active">
                            <img 
                            src={Forex} 
                            className="img-fluid img1 imgIndice " 
                            alt="ForexManual" 
                            style={{width: '96.5%'}}
                            onClick={this.handleClick}
                            >
                            
                        </img>
                        </NavLink>
                        </li>
                        <li className="nav-item img4">
                        <NavLink href="#CriptomonedasManual" to="/CriptomonedasManual" activeclassname="active">
                            <img 
                            src={Criptomonedas} 
                            className="img-fluid img1 imgIndice " 
                            alt="CriptomonedasManual" 
                            style={{width: '96.5%'}}>
                        </img>
                        </NavLink>
                        </li>
                        <li className="nav-item img4">
                        <NavLink href="#package" to="/ValoresManual" activeclassname="active">
                            <img 
                            src={Valores} 
                            className="img-fluid img1 imgIndice " 
                            alt="ValoresManual" 
                            style={{width: '96.5%'}}>
                        </img>
                        </NavLink>
                        </li>
                        <li className="nav-item img4">
                        <NavLink href="#CommoditiesManual" to="/CommoditiesManual" activeclassname="active">
                            <img 
                            src={Commodities} 
                            className="img-fluid img1 imgIndice" 
                            alt="CommoditiesManual" 
                            style={{width: '100%'}}>
                        </img>
                        </NavLink>
                        </li>
                        <li className="nav-item img4">
                        <NavLink href="#TradingManual" to="/TradingManual" activeclassname="active">
                       
                        <img 
                            src={Trading} 
                            className="img-fluid img1 imgIndice " 
                            alt="TradingManual" 
                            style={{width: '100%'}}>
                        </img>
                        
                        </NavLink>
                        </li>
                            </div>
                        </div>    
                    </div>
                    </li>
                    <li>
                    <NavLink className="nav-link text-uppercase LyricsTitleNav1" href="#planes" to="/planes" activeclassname="active">
                        planes
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className="nav-link text-uppercase LyricsTitleNav1" href="#sobrenosotros" to="/sobrenosotros" activeclassname="active">
                        sobre nosotros
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