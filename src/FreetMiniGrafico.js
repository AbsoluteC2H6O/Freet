import React, {Component} from 'react';
import {Container,Row, Col, Jumbotron} from 'react-bootstrap';
import './FreetMiniGrafico.css';
import './App.css';
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
var Tragindmercado =
{
  "colorTheme": "light",
  "dateRange": "12M",
  "showChart": true,
  "locale": "es",
  "width": "100%",
  "height": "675",
  "largeChartUrl": "",
  "isTransparent": false,
  "showSymbolLogo": true,
  "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
  "plotLineColorFalling": "rgba(33, 150, 243, 1)",
  "gridLineColor": "rgba(240, 243, 250, 1)",
  "scaleFontColor": "rgba(120, 123, 134, 1)",
  "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
  "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
  "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
  "tabs": [
    {
      "title": "Índices",
      "symbols": [
        {
          "s": "CURRENCYCOM:US100",
          "d": "NASDAQ 100"
        },
        {
          "s": "CURRENCYCOM:SP35",
          "d": "IBEX 35"
        },
        {
          "s": "INDEX:FTSEMIB",
          "d": "FTSE MIB"
        },
        {
          "s": "CURRENCYCOM:UK100",
          "d": "FTSE 100"
        },
        {
          "s": "CURRENCYCOM:DE30",
          "d": "DAX 30"
        },
        {
          "s": "CURRENCYCOM:FR40",
          "d": "CAC 40"
        },
        {
          "s": "INDEX:NKY",
          "d": "NIKKEI 225"
        }
      ],
      "originalTitle": "Indices"
    },
    {
      "title": "Criptomonedas",
      "symbols": [
        {
          "s": "BITSTAMP:BTCUSD",
          "d": "BITCOIN/DOLAR"
        },
        {
          "s": "BITSTAMP:ETHEUR",
          "d": "ETHEREUM/DOLAR"
        },
        {
          "s": "BITSTAMP:XRPUSD",
          "d": "RIPPLE/DOLAR"
        },
        {
          "s": "BITSTAMP:LTCUSD",
          "d": "LITECOIN/DOLAR"
        },
        {
          "s": "BITSTAMP:BCHUSD",
          "d": "BITCOIN CASH/DOLAR"
        },
        {
          "s": "COINBASE:DASHUSD",
          "d": "DASHCOIN/DOLAR"
        },
        {
          "s": "COINBASE:LINKUSD",
          "d": "CHAINLINK/DOLAR"
        }
      ],
      "originalTitle": "Commodities"
    },
    {
      "title": "Acciones",
      "symbols": [
        {
          "s": "NASDAQ:AMZN",
          "d": "AMAZON"
        },
        {
          "s": "NASDAQ:FB",
          "d": "FACEBOOK"
        },
        {
          "s": "NASDAQ:GOOGL",
          "d": "GOOGLE"
        },
        {
          "s": "NASDAQ:NFLX",
          "d": "NETFLIX"
        },
        {
          "s": "NASDAQ:TSLA",
          "d": "TESLA"
        },
        {
          "s": "NASDAQ:MSFT",
          "d": "MICROSOFT"
        },
        {
          "s": "NASDAQ:AAPL",
          "d": "APPLE"
        }
      ],
      "originalTitle": "Bonds"
    },
    {
      "title": "Forex",
      "symbols": [
        {
          "s": "FX:EURUSD",
          "d": "EURO/DOLAR"
        },
        {
          "s": "FX:GBPUSD",
          "d": "LIBRA ESTERLINA/DOLAR"
        },
        {
          "s": "FX:USDJPY",
          "d": "DOLAR/YEN JAPONES"
        },
        {
          "s": "FX:USDCHF",
          "d": "DOLAR/FRANCO SUIZO"
        },
        {
          "s": "FX:AUDUSD",
          "d": "DOLAR AUSTRALIANO/DOLAR"
        },
        {
          "s": "FX:NZDUSD",
          "d": "DÓLAR NEOZELANDES/DOLAR"
        },
        {
          "s": "FX:USDCAD",
          "d": "DOLAR/DOLAR CANADIENSE"
        }
      ],
      "originalTitle": "Forex"
    },
    {
      "title": "Commodities",
      "symbols": [
        {
          "s": "OANDA:XAUUSD",
          "d": "ORO/DOLAR"
        },
        {
          "s": "OANDA:XAGUSD",
          "d": "PLATA/DOLAR"
        },
        {
          "s": "TVC:UKOIL",
          "d": "PETROLEO BRENT"
        },
        {
          "s": "TVC:USOIL",
          "d": "PETROLEO WTI"
        },
        {
          "s": "NYMEX:NG1!",
          "d": "FUTUROS DEL GAS NATURAL"
        },
        {
          "s": "COMEX:HG1!",
          "d": "FUTUROS DEL COBRE"
        },
        {
          "s": "CBOT:ZC1!",
          "d": "FUTUROS DEL MAIZ"
        }
      ]
    }
  ]
}
var tradingvalue1 =
{
  "symbol": "FX:EURUSD",
  "width": "100%",
  //"height": "100%",
  "height": "220",
  "locale": "es",
  "dateRange": "12M",
  "colorTheme": "light",
  "trendLineColor": "rgba(101, 101, 101, 1)",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue2 =
{
  "symbol": "BITSTAMP:BTCUSD",
  "width": "100%",
  //"height": "100%",
  "height": "220",
  "locale": "es",
  "dateRange": "12M",
  "colorTheme": "light",
  "trendLineColor": "rgba(101, 101, 101, 1)",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue3=
{
	"symbol": "OANDA:XAUUSD",
  "width": "100%",
  //"height": "100%",
  "height": "220",
  "locale": "es",
  "dateRange": "12M",
  "colorTheme": "light",
  "trendLineColor": "rgba(101, 101, 101, 1)",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue4 = 
{
  "symbol": "NASDAQ:TSLA",
  "width": "100%",
  //"height": "100%",
  "height": "220",
  "locale": "es",
  "dateRange": "12M",
  "colorTheme": "light",
  "trendLineColor": "rgba(101, 101, 101, 1)",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue5 = 
{
  "symbol": "CURRENCYCOM:US500",
  "width": "100%",
  //"height": "100%",
  "height": "220",
  "locale": "es",
  "dateRange": "12M",
  "colorTheme": "light",
  "trendLineColor": "rgba(101, 101, 101, 1)",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var tradingvalue6 = 
{
  "symbol": "CURRENCYCOM:EU50",
  "width": "100%",
  //"height": "100%",
  "height": "220",
  "locale": "es",
  "dateRange": "12M",
  "colorTheme": "light",
  "trendLineColor": "rgba(101, 101, 101, 1)",
  "underLineColor": "#E3F2FD",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": ""
}
var myJSON1 = JSON.stringify(tradingvalue1);
var myJSON2 = JSON.stringify(tradingvalue2);
var myJSON3 = JSON.stringify(tradingvalue3);
var myJSON4 = JSON.stringify(tradingvalue4);
var myJSON5 = JSON.stringify(tradingvalue5);
var myJSON6 = JSON.stringify(tradingvalue6);
var myJSON7 = JSON.stringify(Tragindmercado);
var myJSON8 = JSON.stringify(Tickertape); 
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
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    </Row>
  </Container>
  </>
  );
}
}
class TradingMercado extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
	script.async = true;
	script.innerHTML = myJSON7/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
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
class Grafico1 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON1/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container FreetGrafico2" ref={this._ref}> 
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
	script.innerHTML = myJSON3/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container FreetGrafico2" ref={this._ref}> 
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
	script.innerHTML = myJSON4/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container FreetGrafico2" ref={this._ref}> 
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
	script.innerHTML = myJSON5/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container FreetGrafico2" ref={this._ref}> 
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
	script.innerHTML = myJSON6/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container FreetGrafico2" ref={this._ref}> 
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
	script.innerHTML = myJSON2/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container FreetGrafico2" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget ">
    </Row>
  </Container>
  </>
  );
}
}
class FreetMiniGrafico extends Component{
	constructor(props) {
		super(props);
		this._ref = React.createRef();
}

	render(){
			return(
			<>
			<Container fluid>
        <Row className="fontMiniWidget">
          
        </Row>		
				<Row>
          
					<Col className="fontMiniWidget" md={{ span: 3, offset: 1}} 
              sm={{ span: 2, offset: 1}}
              > 
          <pre> </pre>
					 <Grafico1 className="FreetGrafico FreetGrafico2"/>
           <Grafico3 className="FreetGrafico2"/>
           <Grafico5 className="FreetGrafico2"/>
					</Col>
          <Col className="fontMiniWidget" md={{ span: 3, offset: 0}}
            sm={{ span: 2, offset: 1}}
          >
          <pre> </pre>
					 <Grafico2 className="FreetGrafico"/>
           <Grafico4 className="FreetGrafico2"/>
           <Grafico6 className="FreetGrafico2"/>
					</Col>
          <Col className="fontMiniWidget" md={{ span: 4, offset: 0}}
            sm={{ span: 3, offset: 1}}
          >
          <pre> </pre>
          <TradingMercado/> 
					</Col >
          
            
				</Row>
			</Container>
			</>
			);
	}
}
export default FreetMiniGrafico;