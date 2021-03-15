import React, {Component} from "react";
import './NavBar1.css'
import {Container,Row,Col, Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { createChart} from 'lightweight-charts';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Forex from './Forex';
import AnalisisGeneral from './AnalisisGeneral';
import DatosTecnicos from './DatosTecnicos';
import GraficosTr from './GraficosTr';
import Otros from './Otros';
import Criptomonedas from './Criptomonedas';
import Valores from './Valores';
import Commodities from './Commodities'
import CalendarioEconomico from './CalendarioEconomico';
import Educacion from './Educacion';
import Planes from './Planes';
import SobreNosotros from './SobreNosotros';
import NavBar from './NavBar';
import TradingManual from './TradingManual';
import CriptomonedasManual from './CriptomonedasManual';
import ForexManual from './ForexManual';
import CommoditiesManual from './CommoditiesManual.js';
import ValoresManual from './ValoresManual';
import TradingMiniApp from './TradingMiniApp';
import Pdf1 from './pages/Pdf1';
import Pdf2 from './pages/Pdf2';
import Pdf3 from './pages/Pdf3';
import Pdf4 from './pages/Pdf4';
//import Forex from './Forex';
/*
 <Route path="/AnalisisGeneral" component={AnalisisGeneral}/>
  <Route path="/" component={Forex}/>
*/
//botonts con imagenes clickeables con zoom
class ComponentPart1 extends Component{
    render(){
        return(
            <>
                <Router>
              
                <TradingMiniApp/>   
                <NavBar/>
                <Switch>
                <Route exact path="/AnalisisGeneral" component={AnalisisGeneral}/>
                      <Route exact path="/DatosTecnicos" component={DatosTecnicos}/>
                      <Route exact path="/GraficosTr" component={GraficosTr}/>
                      <Route exact path="/Otros" component={Otros}/>
                      <Route exact path="/Criptomonedas" component={Criptomonedas}/>
                      <Route exact path="/Valores" component={Valores}/>
                      <Route exact path="/Commodities" component={Commodities}/>
                      <Route exact path="/CalendarioEconomico" component={CalendarioEconomico}/>
                      <Route exact path="/Educacion" component={Educacion}/>
                      <Route exact path="/TradingManual" component={TradingManual}/>
                      <Route exact path="/CriptomonedasManual" component={CriptomonedasManual}/>
                      <Route exact path="/CommoditiesManual" component={CommoditiesManual}/>
                      <Route exact path="/ForexManual" component={ForexManual}/>
                      <Route exact path="/ValoresManual" component={ValoresManual}/>
                      <Route exact path="/Planes" component={Planes}/>
                      <Route exact path="/SobreNosotros" component={SobreNosotros}/>
                      <Route default exact path="/Freet" component={Forex}/>
                      <Route exact path="/Pdf1" component={Pdf1}/>
                      <Route exact path="/Pdf2" component={Pdf2}/>
                      <Route exact path="/Pdf3" component={Pdf3}/>
                      <Route exact path="/Pdf4" component={Pdf4}/>
                   </Switch>
                   
            	</Router> 
            </>
        );
    }
}
export default ComponentPart1;