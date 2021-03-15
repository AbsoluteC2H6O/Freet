import React, {Component} from "react";
import './App.css';
import './Manuales.css';
import commodities from './BANNERMERCADO/Slide4.PNG';
import {Container, Row, Col} from 'react-bootstrap';
var tradingvalue1 = 
{
  "symbol": "COMEX:GC1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue2 = 
{
  "symbol": "COMEX:SI1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue3 = 
{
  "symbol": "COMEX_MINI:QC1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue4 = 
{
  "symbol": "COMEX:ZNC1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue5 = 
{
  "symbol": "NYMEX:PL1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue6 = 
{
  "symbol": "NYMEX:PA1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
//ENERGIA
var tradingvalue1e = 
{
  "symbol": "NYMEX:CL1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue2e = 
{
  "symbol": "TVC:UKOIL",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue3e = 
{
  "symbol": "NYMEX:NG1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue4e = 
{
  "symbol": "NYMEX:RB1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue5e = 
{
  "symbol": "NYMEX:HO1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue6e = 
{
  "symbol": "NYMEX:AEZ1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}

//AGRICOLAS
var tradingvalue1a = 
{
  "symbol": "NYMEX:KT1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue2a = 
{
  "symbol": "NYMEX:YO1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue3a = 
{
  "symbol": "CBOT:ZC1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue4a = 
{
  "symbol": "CBOT:ZW1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue5a = 
{
  "symbol": "CBOT:ZS1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue6a = 
{
  "symbol": "​​NYMEX:TT1!",
  "width": "100%",
  "height": 200,
  "locale": "es",
  "dateRange": "ALL",
  "colorTheme": "light",
  "trendLineColor": "#37a6ef",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingTecnico =
{
  "title": "Materias primas",
  "width":"100%",
  "height": 600,
  "locale": "es",
  "showSymbolLogo": true,
  "symbolsGroups": [
    {
      "name": "Energía",
      "symbols": [
        {
          "name": "NYMEX:CL1!",
          "displayName": "Petróleo"
        },
        {
          "name": "NYMEX:NG1!",
          "displayName": "Gas natural"
        },
        {
          "name": "TVC:UKOIL",
          "displayName": "Petróleo Brent"
        },
        {
          "name": "NYMEX:RB1!",
          "displayName": "Gasolina"
        },
        {
          "name": "NYMEX:HO1!",
          "displayName": "Combustible para calefacción"
        },
        {
          "name": "NYMEX:AEZ1!",
          "displayName": "Etanol"
        }
      ]
    },
    {
      "name": "Metales",
      "symbols": [
        {
          "name": "COMEX:GC1!",
          "displayName": "Oro"
        },
        {
          "name": "COMEX:SI1!",
          "displayName": "Plata"
        },
        {
          "name": "NYMEX:PL1!",
          "displayName": "Platino"
        },
        {
          "name": "COMEX_MINI:QC1!",
          "displayName": "Cobre"
        },
        {
          "name": "COMEX:ZNC1!",
          "displayName": "Zinc"
        }
      ]
    },
    {
      "name": "Agricultura",
      "symbols": [
        {
          "name": "NYMEX:KT1!",
          "displayName": "Café"
        },
        {
          "name": "NYMEX:TT1!",
          "displayName": "Algodón"
        },
        {
          "name": "CBOT:ZS1!",
          "displayName": "Soja"
        },
        {
          "name": "CBOT:ZW1!",
          "displayName": "Trigo"
        },
        {
          "name": "NYMEX:YO1!",
          "displayName": "Azúcar"
        },
        {
          "name": "CBOT:ZC1!",
          "displayName": "Maíz"
        }
      ]
    },
    {
      "name": "Divisas",
      "symbols": [
        {
          "name": "CME:6E1!",
          "displayName": "Euro"
        },
        {
          "name": "CME:6B1!",
          "displayName": "Libra esterlina"
        },
        {
          "name": "CME:6J1!",
          "displayName": "Yen japonés"
        },
        {
          "name": "CME:6S1!",
          "displayName": "Franco suizo"
        },
        {
          "name": "CME:6A1!",
          "displayName": "Dólar australiano"
        },
        {
          "name": "CME:6C1!",
          "displayName": "Dólar canadiense"
        }
      ]
    },
    {
      "name": "Índices",
      "symbols": [
        {
          "name": "CME:SP1!",
          "displayName": "S&P 500"
        },
        {
          "name": "CME_MINI:NQ1!",
          "displayName": "Nasdaq 100"
        },
        {
          "name": "CBOT_MINI:YM1!",
          "displayName": "Dow 30"
        },
        {
          "name": "CME:NKD1!",
          "displayName": "Nikkei 225"
        },
        {
          "name": "EUREX:FDAX1!",
          "displayName": "DAX"
        },
        {
          "name": "CME:IBV1!",
          "displayName": "IBovespa"
        }
      ]
    },
    {
      "name": "Tipos de interés",
      "symbols": [
        {
          "name": "CBOT:ZN1!",
          "displayName": "Pagaré del tesoro a 10 años"
        },
        {
          "name": "CBOT:ZF1!",
          "displayName": "Pagaré del tesoro a 5 años"
        },
        {
          "name": "CBOT:Z3N1!",
          "displayName": "Pagaré del tesoro a 3 años"
        },
        {
          "name": "CBOT:ZT1!",
          "displayName": "Pagaré del tesoro a 2 años"
        },
        {
          "name": "CBOT:ZQ1!",
          "displayName": "Tipo de interés de los fondos de la reserva federal a 30 días"
        },
        {
          "name": "CBOT:ZB1!",
          "displayName": "T-Bond"
        }
      ]
    }
  ],
  "colorTheme": "light"
}
var myJSON1 = JSON.stringify(tradingvalue1);
var myJSON2 = JSON.stringify(tradingvalue2);
var myJSON3 = JSON.stringify(tradingvalue3);
var myJSON4 = JSON.stringify(tradingvalue4);
var myJSON5 = JSON.stringify(tradingvalue5);
var myJSON6 = JSON.stringify(tradingvalue6);

var myJSON1e = JSON.stringify(tradingvalue1e);
var myJSON2e = JSON.stringify(tradingvalue2e);
var myJSON3e = JSON.stringify(tradingvalue3e);
var myJSON4e = JSON.stringify(tradingvalue4e);
var myJSON5e = JSON.stringify(tradingvalue5e);
var myJSON6e = JSON.stringify(tradingvalue6e);

var myJSON1a = JSON.stringify(tradingvalue1a);
var myJSON2a = JSON.stringify(tradingvalue2a);
var myJSON3a = JSON.stringify(tradingvalue3a);
var myJSON4a = JSON.stringify(tradingvalue4a);
var myJSON5a = JSON.stringify(tradingvalue5a);
var myJSON6a = JSON.stringify(tradingvalue6a);
var myJSONT = JSON.stringify(tradingTecnico);
//metales
class Grafico1 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON1
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico2 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON2
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico3 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON3
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico4 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON4
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico5 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON5
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico6 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON6
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
//energia
class Grafico7 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON1e
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico8 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON2e
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico9 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON3e
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico10 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON4e
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico11 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON5e
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico12 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON6e
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
//agricolas
class Grafico13 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON1a
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico14 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON2a
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico15 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON3a
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico16 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON4a
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico17 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON5a
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class Grafico18 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON6a
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class GraficoTecnico extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'
	script.async = true;
	script.innerHTML = myJSONT
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <>
      <Row>
      <Col  
      className="marginLyrcisS"
        md={{ span: 9, offset: 1}} 
        sm={{ span: 11, offset: 1}}>
          <GraficoTecnico/>
      </Col>
    </Row>
    </>
  );
}
function Agricolas(props) {
  if(!props.warn1) {
    return null;
  }

  return(
    <>  
    <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
    >
     <Grafico13/> 
     <br/>
     <Grafico16/>
     <br/> 
    </Col>
    
    <Col md={{ span: 3, offset: 0}}
    sm={{ span: 2, offset: 1}}
    >
     <Grafico14/> 
     <br/>
     <Grafico17/>
     <br/>
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
    <Grafico15/>
    <br/>
    <Grafico18/>
    <br/>
    </Col>
    </> 
  );
  
}
function Energia(props) {
  if(!props.warn2) {
    return null;
  }

  return(
    <> 
    <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
    >
     <Grafico7/> 
     <br/>
     <Grafico10/>
     <br/> 
    </Col>
    
    <Col md={{ span: 3, offset: 0}}
    sm={{ span: 2, offset: 1}}
    >
     <Grafico8/> 
     <br/>
     <Grafico11/>
     <br/>
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
    <Grafico9/>
    <br/>
    <Grafico12/>
    <br/>
    </Col>
    </> 
  );
  
}
function Metales(props) {
  if(!props.warn3) {
    return null;
  }

  return(
    <> 
    
    <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
    >
     <Grafico1/>
     <br/>
     <Grafico4/>
     <br/>
    </Col>
    
    <Col md={{ span: 3, offset: 0}}
    sm={{ span: 2, offset: 1}}
    >
     <Grafico2/>
     <br/>
     <Grafico5/>
     <br/>
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
    <Grafico3/>
    <br/>
    <Grafico6/>
    <br/>
    </Col>
    </> 
  );
  
}
class WarningBanner2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      warn: this.props.warn2,
      warn1: true, 
      warn2: false,
      warn3: false
    };
    this.handleToggleClick1 = this.handleToggleClick1.bind(this);
    this.handleToggleClick2 = this.handleToggleClick2.bind(this);
    this.handleToggleClick3 = this.handleToggleClick3.bind(this);
  }
 
  handleToggleClick1() {
    this.setState(prevState => ({
      warn1: !prevState.warn1,
      warn2: false,
      warn3: false
    }));
  }
  handleToggleClick2() {
    this.setState(prevState => ({
      warn2: !prevState.warn2,
      warn1:  false,
      warn3: false
    }));
  }
  handleToggleClick3() {
    this.setState(prevState => ({
      warn3: !prevState.warn3,
      warn2:  false,
      warn1:  false
    }));
  }
  render(){
  if(!this.props.warn2) {
    return null;
  }
  else{
  return (
    <>
      <Container fluid>
      <Row >
      <Col  
        md={{ span: 9, offset: 1}} 
        sm={{ span: 11, offset: 1}}>
          
        <h3 className="text-center"><a className="LyricsTimelineSubs3"><strong>PRINCIPALES MATERIAS PRIMAS</strong></a></h3>
            </Col></Row>
      <Row>
        <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
        >
        <pre> </pre>
        <h1 className="text-center"><a onClick={this.handleToggleClick1} className="text-center LyricsText ManualLyrics6">METALES</a></h1>
        </Col>
        <Col md={{ span: 3, offset: 0}}
          sm={{ span: 2, offset: 1}}
        >
        <pre> </pre>   
        <h1 className="text-center"><a onClick={this.handleToggleClick2} className="text-center LyricsText ManualLyrics6">ENERGIA</a></h1>
        </Col>
        <Col md={{ span: 3, offset: 0}}
          sm={{ span: 3, offset: 1}}
        >
        <pre> </pre>
        <h1 className="text-center" ><a onClick={this.handleToggleClick3} className="text-center LyricsText ManualLyrics6">AGRICOLAS</a></h1>
        </Col>
      </Row>
      <Row>
        <Energia warn2={this.state.warn2}/>
        <Metales warn3={this.state.warn1}/>
        <Agricolas warn1={this.state.warn3}/>
      </Row>
      </Container>
    </>
  );
}
}
}
  class Commodities extends Component{
    constructor(props) {
      super(props);
      this.state = {
        showWarning: true,
        showWarning2: false,
      }
      this.handleToggleClick = this.handleToggleClick.bind(this);
      this.handleToggleClick2 = this.handleToggleClick2.bind(this);
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }
    handleToggleClick2() {
      this.setState(prevState => ({
        showWarning2: !prevState.showWarning2
      }));
    }
      render(){
      
          return(
              <>
              <img 
                src={commodities} 
                className="img-fluid" 
                alt="commodities" 
                style={{width: '100%', display: 'block',
                margin: '0 auto'}}>
                </img>
                  <div className="ManualLyrics4Font">
                      <h6 className="text-left LyricsText ManualLyrics4">DATOS TECNICOS <a onClick={this.handleToggleClick}><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></a></h6>
                  </div>
                  <WarningBanner warn={this.state.showWarning} />
                <div className="ManualLyrics4Font">
                  <h6 className="text-left LyricsText ManualLyrics4">GRAFICOS <a  onClick={this.handleToggleClick2}><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></a></h6>
                </div>
                <WarningBanner2 warn2={this.state.showWarning2} />
              </>
          );
      }
  }
  export default Commodities;