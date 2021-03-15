import React, {Component} from "react";
import './App.css';
import './Manuales.css';
import criptomonedas from './BANNERMERCADO/Slide2.PNG';
import {Container, Row, Col} from 'react-bootstrap';
let tradingTecnico = {
  "width": "100%",
  "height": 600,
  "defaultColumn": "overview",
  "screener_type": "crypto_mkt",
  "displayCurrency": "USD",
  "colorTheme": "light",
  "locale": "es"
}
let tradingvalue1 = {
  "symbol": "​BITSTAMP:BTCUSD​",
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

let tradingvalue2 = {
  "symbol": "​KRAKEN:USDTUSD",
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
let tradingvalue3 = {
  "symbol": "COINBASE:LINKUSD",
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
let tradingvalue4 = {
  "symbol": "​COINBASE:ZRXUSD​",
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
let tradingvalue5 = {
  "symbol": "KRAKEN:OMGUSD",
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
let tradingvalue6 = {
  "symbol": "​FTX:MKRUSD",
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
let tradingvalue7 = {
  "symbol": "​BINANCE:BNBUSD",
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
let tradingvalue8 = {
  "symbol": "​KRAKEN:USDCUSD​",
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
let tradingvalue9 = {
  "symbol": "​KRAKEN:DAIUSD​",
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
let tradingvalue10 = {
  "symbol": "​KRAKEN:BATUSD",
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
let tradingvalue11 = {
  "symbol": "​BITSTAMP:ETHEUR​",
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
let tradingvalue12 = {
  "symbol": "​BITSTAMP:XRPUSD",
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
let tradingvalue13 = {
  "symbol": "​BITSTAMP:LTCUSD",
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
let tradingvalue14 = {
  "symbol": "​​​BITSTAMP:BCHUSD",
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
let tradingvalue15 = {
  "symbol": "COINBASE:DASHUSD",
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
let tradingvalue16 = {
  "symbol": "​BITFINEX:TRXUSD",
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
let tradingvalue17 = {
  "symbol": "​COINBASE:XTZUSDUSD​",
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
let tradingvalue18 = {
  "symbol": "​KRAKEN:XMRUSD",
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
let tradingvalue19 = {
  "symbol": "​KRAKEN:ADAUSD",
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

let tradingvalue20 = {
  "symbol": "​KRAKEN:XLMUSD",
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
let tradingvalue21 = {
  "symbol": "​BITFINEX:EOSUSD",
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
let tradingvalue22 = {
  "symbol": "BITFINEX:IOTUSD​",
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
var myJSONT = JSON.stringify(tradingTecnico);
var myJSON1 = JSON.stringify(tradingvalue1);

var myJSON2 = JSON.stringify(tradingvalue2);
var myJSON3 = JSON.stringify(tradingvalue3);
var myJSON4 = JSON.stringify(tradingvalue4);
var myJSON5 = JSON.stringify(tradingvalue5);
var myJSON6 = JSON.stringify(tradingvalue6);
var myJSON7 = JSON.stringify(tradingvalue7);
var myJSON8 = JSON.stringify(tradingvalue8);
var myJSON9 = JSON.stringify(tradingvalue9);
var myJSON10 = JSON.stringify(tradingvalue10);
var myJSON11 = JSON.stringify(tradingvalue11);
var myJSON12 = JSON.stringify(tradingvalue12);
var myJSON13 = JSON.stringify(tradingvalue13);

var myJSON14 = JSON.stringify(tradingvalue14);
var myJSON15 = JSON.stringify(tradingvalue15);
var myJSON16 = JSON.stringify(tradingvalue16);
var myJSON17 = JSON.stringify(tradingvalue17);
var myJSON18 = JSON.stringify(tradingvalue18);
var myJSON19 = JSON.stringify(tradingvalue19);
var myJSON20 = JSON.stringify(tradingvalue20);
var myJSON21 = JSON.stringify(tradingvalue21);
var myJSON22 = JSON.stringify(tradingvalue22);
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
	script.innerHTML = myJSON2;
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
	script.innerHTML = myJSON3;
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
	script.innerHTML = myJSON4;
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
	script.innerHTML = myJSON5;
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
	script.innerHTML = myJSON6;
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
class Grafico7 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON7;
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
	script.innerHTML = myJSON8;
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
	script.innerHTML = myJSON9;
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
	script.innerHTML = myJSON10;
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
	script.innerHTML = myJSON11;
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
	script.innerHTML = myJSON12;
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
class Grafico13 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON13;
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
	script.innerHTML = myJSON14;
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
	script.innerHTML = myJSON15;
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
	script.innerHTML = myJSON16;
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
	script.innerHTML = myJSON17;
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
	script.innerHTML = myJSON18;
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
class Grafico19 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON19;
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
class Grafico20 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON20;
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
class Grafico21 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON21;
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
class Grafico22 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON22;
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

class GraficoBase extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://files.coinmarketcap.com/static/widget/coinPriceBlock.js'
	script.async = true;
	script.innerHTML = `{id="coinmarketcap-widget-coin-price-block" coins="1,1027,825,52,1839,131,2,1831,1975" currency="USD" theme="dark" transparent="false" show-symbol-logo="true"}`
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <div ref={this._ref} id="coinmarketcap-widget-coin-price-block" coins="1,1027,825,52,1839,131,2,1831,1975" currency="USD" theme="dark" transparent="false" show-symbol-logo="true"></div> 
  </>
  );
}
}class GraficoTecnico extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
	script.async = true;
	script.innerHTML = myJSONT;
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
function Tokens(props) {
  if(!props.warn2) {
    return null;
  }

  return(
    <>  
    <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
    >
     <Grafico2/> 
     <br/>
     <Grafico5/>
     <br/> 
     <Grafico7/>
     <br/> 
    </Col>
    
    <Col md={{ span: 3, offset: 0}}
    sm={{ span: 2, offset: 1}}
    >
     <Grafico3/> 
     <br/>
     <Grafico17/>
     <br/>
     <Grafico8/>
     <br/> 
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
    <Grafico4/>
    <br/>
    <Grafico6/>
    <br/>
     <Grafico9/>
     <br/> 
    </Col>
    </> 
  );
  
}
function Altcoin(props) {
  if(!props.warn1) {
    return null;
  }

  return(
    <> 
    <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
    >
     <Grafico11/> 
     <br/>
     <Grafico13/>
     <br/>
     <Grafico15/>
     <br/>
     <Grafico17/>
     <br/> 
    </Col>
    
    <Col md={{ span: 3, offset: 0}}
    sm={{ span: 2, offset: 1}}
    >
     <Grafico12/> 
     <br/>
     <Grafico14/>
     <br/>
     <Grafico16/>
     <br/>
     <Grafico18/>
     <br/>
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
    <Grafico19/>
    <br/>
    <Grafico20/>
    <br/>
    <Grafico21/>
     <br/>
     <Grafico22/>
     <br/>
    </Col>
    </> 
  );
  
}
function Bitcoin(props) {
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
    </Col>
    
    <Col md={{ span: 3, offset: 0}}
    sm={{ span: 2, offset: 1}}
    >
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
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
        <h1 className="text-center"><a onClick={this.handleToggleClick1} className="text-center LyricsText ManualLyrics6">BITOCOIN</a></h1>
        </Col>
        <Col md={{ span: 3, offset: 0}}
          sm={{ span: 2, offset: 1}}
        >
        <pre> </pre>   
        <h1 className="text-center"><a onClick={this.handleToggleClick2} className="text-center LyricsText ManualLyrics6">TOKENS</a></h1>
        </Col>
        <Col md={{ span: 3, offset: 0}}
          sm={{ span: 3, offset: 1}}
        >
        <pre> </pre>
        <h1 className="text-center" ><a onClick={this.handleToggleClick3} className="text-center LyricsText ManualLyrics6">ALTCOINS</a></h1>
        </Col>
      </Row>
      <Row>
      <Tokens warn2={this.state.warn2}/>
      <Bitcoin warn3={this.state.warn1}/>
      <Altcoin warn1={this.state.warn3}/>
      </Row>
      </Container>
    </>
  );
}
}
}
  class Criptomonedas extends Component{
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
                src={criptomonedas} 
                className="img-fluid" 
                alt="criptomonedas" 
                style={{width: '100%', display: 'block',
                margin: '0 auto'}}>
                </img>
                <Row>
                <Col md={{ span: 10, offset: 1}}
                  sm={{ span: 10, offset: 1}}
                  lg={{ span: 10, offset: 1}}
                  xl={{ span: 10, offset: 1}}
                  >
                  <GraficoBase/>
                </Col> 
                </Row>
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
  export default Criptomonedas;