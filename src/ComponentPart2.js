import React, {Component} from "react";
import './NavBar2.css'
import {Container,Row,Col, Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { createChart} from 'lightweight-charts';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ideas from './ideas';
import resultados from './resultados';
import ratio from './ratio';
import calculadoraderiesgo from './calculadoraderiesgo';
import Graficoavanzado from './Graficoavanzado';
import NavBar2 from './NavBar2';
import Footer from  './Footer';
/*

<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div id="tradingview_336d7"></div>
  <div class="tradingview-widget-copyright"><a href="https://es.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Gráfico</span></a> por TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.widget(
  {
  "width": 980,
  "height": 610,
  "symbol": "NASDAQ:AAPL",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "light",
  "style": "1",
  "locale": "es",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "container_id": "tradingview_336d7"
}
  );
  </script>
</div>
<!-- TradingView Widget END -->
*/
var AdvancedGraphic =

  {
  "width": 980,
  "height": 610,
  "symbol": "NASDAQ:AAPL",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "light",
  "style": "1",
  "locale": "es",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "container_id": "tradingview_336d7"
}
var Tickertape=
{
  "symbols": [
    {
      "description": "PETROLEO BRENT",
      "proName": "TVC:UKOIL"
    },
    {
      "description": "CHAINLINK/DOLAR",
      "proName": "COINBASE:LINKUSD"
    },
    {
      "description": "TESLA",
      "proName": "NASDAQ:TSLA"
    },
    {
      "description": "IBEX 35",
      "proName": "CURRENCYCOM:SP35"
    },
    {
      "description": "LIBRA ESTERLINA/DOLAR",
      "proName": "FX:GBPUSD"
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": false,
  "displayMode": "adaptive",
  "locale": "es"
}
var myJSON8 = JSON.stringify(Tickertape); 
var myJSON9 = JSON.stringify(AdvancedGraphic);

class GraphicAdvanced extends Component{
	constructor(props) {
		  super(props);
		  this._ref = React.createRef();
  }
  componentDidMount() {
    const script = document.createElement('script');
   // const scriptSrc = document.createElement('script');
	  script.src = 'https://s3.tradingview.com/tv.js'
	  script.async = true;
	  script.innerHTML = `new TradingView.widget({
      "width": 980,
      "height": 610,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "es",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_336d7"
    })`;/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
    //this.myRef.current.appendChild(scriptSrc);
	  this._ref.current.appendChild(script);
  }
  
  render(){
	return(
	<>
	<Container fluid class="tradingview-widget-container" ref={this._ref}> 
	  <Row class="tradingview-widget-container__widget">
	  </Row>
	</Container>
	</>
	);
  }
  }
class TickerTape extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
	script.async = true;
	script.innerHTML = myJSON8/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container PaddingNav" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}

class ComponentPart2 extends Component{
    render(){
        return(
            <>
                <Router>
                  <pre> </pre>
                <NavBar2/>
                <TickerTape/>
                <Switch>
                      <Route default exact path="/ideas" component={ideas}/>
                      <Route exact path="/resultados" component={resultados}/>
                      <Route exact path="/ratio" component={ratio}/>
                      <Route exact path="/calculadoraderiesgo" component={calculadoraderiesgo}/>
                      <Route exact path="/graficoavanzado" component={Graficoavanzado}/>
                   </Switch>
                <Row>
                
              </Row>
            
            	</Router> 
             
            </>
        );
    }
}


export default ComponentPart2;