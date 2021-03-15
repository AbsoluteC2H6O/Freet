import React, {Component} from "react";
import './App.css';
import './Manuales.css';
import valores from './BANNERMERCADO/Slide3.PNG';
import {Container, Row, Col} from 'react-bootstrap';

var tradingTecnico1 = 
{
  "width": "100%",
  "height": 600,
  "symbolsGroups": [
    {
      "name": "AMERICA",
      "symbols": [
        {
          "name": "FOREXCOM:SPXUSD",
          "displayName": "S&P 500"
        },
        {
          "name": "FOREXCOM:NSXUSD",
          "displayName": "NASDAQ 100"
        },
        {
          "name": "FOREXCOM:DJI",
          "displayName": "DOW JONES INDUSTRIAL AVERAGE"
        }
      ]
    },
    {
      "name": "EUROPA",
      "symbols": [
        {
          "name": "INDEX:SX5E",
          "displayName": "EURO STOXX 50"
        },
        {
          "name": "INDEX:DEU30",
          "displayName": "DAX 30"
        },
        {
          "name": "INDEX:CAC40",
          "displayName": "​CAC 40"
        },
        {
          "name": "FOREXCOM:UKXGBP",
          "displayName": "​FTSE 100"
        },
        {
          "name": "CURRENCYCOM:SP35",
          "displayName": "IBEX 35"
        },
        {
          "name": "INDEX:FTSEMIB",
          "displayName": "​FTSE MIB"
        }
      ]
    },
    {
      "name": "ASIA",
      "symbols": [
        {
          "name": "INDEX:NKY",
          "displayName": "NIKKEI 225"
        },
        {
          "name": "INDEX:HSI",
          "displayName": "HANG SENG"
        },
        {
          "name": "INDEX:KSIC",
          "displayName": "KOSPI​"
        }
      ]
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": false,
  "locale": "es"
}
var tradingTecnico2 = 
{
  "width": "100%",
  "height": "600",
  "defaultColumn": "overview",
  "defaultScreen": "most_capitalized",
  "showToolbar": true,
  "locale": "es",
  "market": "us",
  "colorTheme": "light"
}
var tradingvalue1 = 
{
  "symbol": "FOREXCOM:SPXUSD",
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
  "symbol": "FOREXCOM:NSXUSD",
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
  "symbol": "FOREXCOM:DJI",
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
  "symbol": "INDEX:SX5E",
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
  "symbol": "​​INDEX:DEU30",
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
  "symbol": "INDEX:DEU30",
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
var tradingvalue7 = 
{
  "symbol": "FOREXCOM:UKXGBP​",
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
var tradingvalue8 = 
{
  "symbol": "CURRENCYCOM:SP35",
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
var tradingvalue9 = 
{
  "symbol": "INDEX:FTSEMIB",
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
var tradingvalue10 = 
{
  "symbol": "INDEX:NKY",
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
var tradingvalue11 = 
{
  "symbol": "INDEX:HSI",
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
var tradingvalue12 = 
{
  "symbol": "INDEX:KSIC",
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
var tradingvalue13 = 
{
  "symbol": "NASDAQ:AMZN",
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
var tradingvalue14 = 
{
  "symbol": "NASDAQ:FB",
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
var tradingvalue15 = 
{
  "symbol": "NASDAQ:GOOGL",
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
var tradingvalue16 = 
{
  "symbol": "NASDAQ:GOOGL",
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
var tradingvalue17 = 
{
  "symbol": "NASDAQ:NFLX",
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
var tradingvalue18 = 
{
  "symbol": "​​NASDAQ:MSFT",
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
var tradingvalue19 = 
{
  "symbol": "NASDAQ:AAPL",
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
var tradingvalue20 = 
{
  "symbol": "NASDAQ:SBUX",
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
var tradingvalue21 = 
{
  "symbol": "NYSE:MCD​",
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
var tradingvalue22 = 
{
  "symbol": "NYSE:KO",
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
var tradingvalue23 = 
{
  "symbol": "NYSE:NKE​",
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
var tradingvalue24 = 
{
  "symbol": "NYSE:JPM",
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
var tradingvalue25 = 
{
  "symbol": "MIL:SANT",
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
var tradingvalue26 = 
{
  "symbol": "MIL:BBVA​",
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
var tradingvalue27 = 
{
  "symbol": "MIL:REP",
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
var tradingvalue28 = 
{
  "symbol": "MIL:IBE​",
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
var tradingvalue29 = 
{
  "symbol": "LSE:HSBA",
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
var tradingvalue30 = 
{
  "symbol": "ETR:R6C​",
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
var tradingvalue31 = 
{
  "symbol": "MIL:ENEL​",
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
var tradingvalue32 = 
{
  "symbol": "MIL:UCG​",
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
var tradingvalue33 = 
{
  "symbol": "XETR:ADS",
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
var tradingvalue34 = 
{
  "symbol": "XETR:VOW3​",
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
var tradingvalue35 = 
{
  "symbol": "MIL:CRR​",
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
var tradingvalue36 = 
{
  "symbol": "MIL:DG​",
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
var tradingvalue37 = 
{
  "symbol": "OTC:TOSBF",
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
var tradingvalue38 = 
{
  "symbol": "OTC:SNEJF",
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
var tradingvalue39 = 
{
  "symbol": "OTC:TOYOF",
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
var tradingvalue40 = 
{
  "symbol": "NYSE:HMC",
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
var tradingvalue41 = 
{
  "symbol": "OTC:BRDCF",
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
var tradingvalue42 = 
{
  "symbol": "NYSE:MUFG",
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
var tradingvalue43 = 
{
  "symbol": "​NYSE:BABA",
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
var tradingvalue44 = 
{
  "symbol": "OTC:PCCYF​",
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
var tradingvalue45 = 
{
  "symbol": "OTC:BACHF​",
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
var tradingvalue46 = 
{
  "symbol": "OTC:SSNLF​",
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
var tradingvalue47 = 
{
  "symbol": "NYSE:LPL",
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
var tradingvalue48 = 
{
  "symbol": "OTC:HYMTF",
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
var myJSONT1 = JSON.stringify(tradingTecnico1);
var myJSONT2 = JSON.stringify(tradingTecnico2);

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
var myJSON23 = JSON.stringify(tradingvalue23);
var myJSON24 = JSON.stringify(tradingvalue24);

var myJSON25 = JSON.stringify(tradingvalue25);
var myJSON26 = JSON.stringify(tradingvalue26);
var myJSON27 = JSON.stringify(tradingvalue27);
var myJSON28 = JSON.stringify(tradingvalue28);
var myJSON29 = JSON.stringify(tradingvalue29);
var myJSON30 = JSON.stringify(tradingvalue30);
var myJSON31 = JSON.stringify(tradingvalue31);
var myJSON32 = JSON.stringify(tradingvalue32);
var myJSON33 = JSON.stringify(tradingvalue33);
var myJSON34 = JSON.stringify(tradingvalue34);
var myJSON35 = JSON.stringify(tradingvalue35);
var myJSON36 = JSON.stringify(tradingvalue36);

var myJSON37 = JSON.stringify(tradingvalue37);
var myJSON38 = JSON.stringify(tradingvalue38);
var myJSON39 = JSON.stringify(tradingvalue39);
var myJSON40 = JSON.stringify(tradingvalue40);
var myJSON41 = JSON.stringify(tradingvalue41);
var myJSON42 = JSON.stringify(tradingvalue42);
var myJSON43 = JSON.stringify(tradingvalue43);
var myJSON44 = JSON.stringify(tradingvalue44);
var myJSON45 = JSON.stringify(tradingvalue45);
var myJSON46 = JSON.stringify(tradingvalue46);
var myJSON47 = JSON.stringify(tradingvalue47);
var myJSON48 = JSON.stringify(tradingvalue48);

class GraficoTecnico1 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'
	script.async = true;
	script.innerHTML = myJSONT1;
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
class GraficoTecnico2 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
	script.async = true;
	script.innerHTML = myJSONT2;
	this._ref.current.appendChild(script);
}

render(){
  return(
  <>
  <Container fluid className="tradingview-widget-container" ref={this._ref}> 
    <Row className="tradingview-widget-container__widget">
    <div class="tradingview-widget-copyright"><a href="https://es.tradingview.com/screener/" rel="noopener" target="_blank"><span class="blue-text">Analizador de acciones</span></a> por TradingView</div>
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
	script.innerHTML = myJSON1;
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
}class Grafico17 extends Component{
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
class Grafico23 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON23;
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
class Grafico24 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON24;
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
class Grafico25 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON25;
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
class Grafico26 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON26;
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
class Grafico27 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON27;
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
class Grafico28 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON28;
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
class Grafico29 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON29;
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
class Grafico30 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON30;
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
class Grafico31 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON31;
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
class Grafico32 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON32;
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
class Grafico33 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON33;
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
class Grafico34 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON34;
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
class Grafico35 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON35;
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
class Grafico36 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON36;
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
class Grafico37 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON37;
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
class Grafico38 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON38;
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
class Grafico39 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON39;
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
class Grafico40 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON40;
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
class Grafico41 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON41;
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
class Grafico42 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON42;
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
class Grafico43 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON43;
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
class Grafico44 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON44;
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
class Grafico45 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON45;
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
class Grafico46 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON46;
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
class Grafico47 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON47;
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
class Grafico48 extends Component{
  constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
	const script = document.createElement('script');
	script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
	script.async = true;
	script.innerHTML = myJSON48;
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
function America(props) {
  if(!props.warn1) {
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
     <Grafico2/>
     <br/>
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
    <Grafico3/>
    <br/>
    </Col>
    </> 
  );
  
}
function Europa(props) {
  if(!props.warn2) {
    return null;
  }

  return(
    <> 
    
    <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
    >
     <Grafico4/>
     <br/>
     <Grafico7/>
     <br/>
    </Col>
    
    <Col md={{ span: 3, offset: 0}}
    sm={{ span: 2, offset: 1}}
    >
     <Grafico5/>
     <br/>
     <Grafico8/>
     <br/>
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
    <Grafico6/>
    <br/>
    <Grafico9/>
    <br/>
    </Col>
    </> 
  );
  
}
function Asia(props) {
  if(!props.warn3) {
    return null;
  }

  return(
    <> 
    
    <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
    >
     <Grafico10/>
     <br/>
    </Col>
    
    <Col md={{ span: 3, offset: 0}}
    sm={{ span: 2, offset: 1}}
    >
     <Grafico11/>
     <br/>
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
    <Grafico12/>
    <br/>
    </Col>
    </> 
  );
  
}
function America1(props) {
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
     <Grafico19/>
     <br/>
     <Grafico22/>
     <br/>
    </Col>
    
    <Col md={{ span: 3, offset: 0}}
    sm={{ span: 2, offset: 1}}
    >
     <Grafico14/>
     <br/>
     <Grafico17/>
     <br/>
     <Grafico20/>
     <br/>
     <Grafico23/>
     <br/>
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
    <Grafico15/>
    <br/>
    <Grafico18/>
    <br/>
    <Grafico21/>
     <br/>
     <Grafico24/>
     <br/>
    </Col>
    </> 
  );
  
}
function Europa1(props) {
  if(!props.warn2) {
    return null;
  }

  return(
    <> 
    
    <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
    >
     <Grafico25/>
     <br/>
     <Grafico28/>
     <br/>
     <Grafico31/>
     <br/>
     <Grafico34/>
     <br/>
    </Col>
    
    <Col md={{ span: 3, offset: 0}}
    sm={{ span: 2, offset: 1}}
    >
     <Grafico26/>
     <br/>
     <Grafico29/>
     <br/>
     <Grafico32/>
     <br/>
     <Grafico35/>
     <br/>
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
    <Grafico27/>
    <br/>
    <Grafico30/>
    <br/>
    <Grafico33/>
     <br/>
     <Grafico36/>
     <br/>
    </Col>
    </> 
  );
  
}
function Asia1(props) {
  if(!props.warn3) {
    return null;
  }

  return(
    <> 
    
   <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
    >
     <Grafico37/>
     <br/>
     <Grafico40/>
     <br/>
     <Grafico43/>
     <br/>
     <Grafico46/>
     <br/>
    </Col>
    
    <Col md={{ span: 3, offset: 0}}
    sm={{ span: 2, offset: 1}}
    >
     <Grafico38/>
     <br/>
     <Grafico41/>
     <br/>
     <Grafico44/>
     <br/>
     <Grafico47/>
     <br/>
    </Col>
   
    <Col md={{ span: 3, offset: 0}}
      sm={{ span: 3, offset: 1}}
    >
    <Grafico39/>
    <br/>
    <Grafico42/>
    <br/>
    <Grafico45/>
     <br/>
     <Grafico48/>
     <br/>
    </Col>
    </> 
  );
  
}
class WarningBanner3 extends Component{
  constructor(props){
    super(props);
    this.state = {
     
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
  if(!this.props.warn3) {
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
          
        <h3 className="text-center"><a className="LyricsTimelineSubs3"><strong>PRINCIPALES INDICES</strong></a></h3>
            </Col></Row>
      <Row>
        <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
        >
        <pre> </pre>
        <h1 className="text-center"><a onClick={this.handleToggleClick1} className="text-center LyricsText ManualLyrics6">AMERICA</a></h1>
        </Col>
        <Col md={{ span: 3, offset: 0}}
          sm={{ span: 2, offset: 1}}
        >
        <pre> </pre>   
        <h1 className="text-center"><a onClick={this.handleToggleClick2} className="text-center LyricsText ManualLyrics6">EUROPA</a></h1>
        </Col>
        <Col md={{ span: 3, offset: 0}}
          sm={{ span: 3, offset: 1}}
        >
        <pre> </pre>
        <h1 className="text-center" ><a onClick={this.handleToggleClick3} className="text-center LyricsText ManualLyrics6">ASIA</a></h1>
        </Col>
      </Row>
      <Row>
        <America warn1={this.state.warn1}/>
        <Europa warn2={this.state.warn2}/>
        <Asia warn3={this.state.warn3}/>
      </Row>
      </Container>
    </>
  );
}
}
}
class WarningBanner4 extends Component{
  constructor(props){
    super(props);
    this.state = {
      
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
  if(!this.props.warn4) {
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
          
        <h3 className="text-center"><a className="LyricsTimelineSubs3"><strong>PRINCIPALES ACCIONES</strong></a></h3>
            </Col></Row>
      <Row>
        <Col md={{ span: 3, offset: 1}}
          sm={{ span: 2, offset: 1}}
        >
        <pre> </pre>
        <h1 className="text-center"><a onClick={this.handleToggleClick1} className="text-center LyricsText ManualLyrics6">AMERICA</a></h1>
        </Col>
        <Col md={{ span: 3, offset: 0}}
          sm={{ span: 2, offset: 1}}
        >
        <pre> </pre>   
        <h1 className="text-center"><a onClick={this.handleToggleClick2} className="text-center LyricsText ManualLyrics6">EUROPA</a></h1>
        </Col>
        <Col md={{ span: 3, offset: 0}}
          sm={{ span: 3, offset: 1}}
        >
        <pre> </pre>
        <h1 className="text-center" ><a onClick={this.handleToggleClick3} className="text-center LyricsText ManualLyrics6">ASIA</a></h1>
        </Col>
      </Row>
      <Row>
        <America1 warn1={this.state.warn1}/>
        <Europa1 warn2={this.state.warn2}/>
        <Asia1 warn3={this.state.warn3}/>
      </Row>
      </Container>
    </>
  );
}
}
}
function WarningBanner5(props) {
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
         {/** <GraficoTecnico1/> */}
      </Col>
    </Row>
    </>
  );
}
function WarningBanner1(props) {
  if (!props.warn1) {
    return null;
  }

  return (
    <>
      <Row>
      <Col  
      className="marginLyrcisS"
        md={{ span: 9, offset: 1}} 
        sm={{ span: 11, offset: 1}}>
          <GraficoTecnico1/>
      </Col>
    </Row>
    </>
  );
}
function WarningBanner2(props) {
  if (!props.warn2) {
    return null;
  }

  return (
    <>
      <Row>
      <Col  
      className="marginLyrcisS"
        md={{ span: 9, offset: 1}} 
        sm={{ span: 11, offset: 1}}>
         <GraficoTecnico2/>
      </Col>
    </Row>
    </>
  );
}
class Indices extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showWarning1: true,
      showWarning3: false,
    }
    this.handleToggleClick1 = this.handleToggleClick1.bind(this);
    this.handleToggleClick3 = this.handleToggleClick3.bind(this);
   
  }
  handleToggleClick1() {
    this.setState(prevState => ({
      showWarning1: !prevState.showWarning1,
      showWarning3: false
    }));
  }
  handleToggleClick3() {
    this.setState(prevState => ({
      showWarning3: !prevState.showWarning3,
      showWarning1: false
    }));
  }
  render(){
    if (!this.props.warn5) {
      return null;
    }
    return(
      <>
      <Row>
        <Col>
          <div className="ManualLyrics7Font">
            <h6 className="text-center LyricsText ManualLyrics7">DATOS TECNICOS <a onClick={this.handleToggleClick1}><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></a></h6>
          </div>
        </Col>
        <Col>
          <div className="ManualLyrics7Font">
          <h6 className="text-center LyricsText ManualLyrics7">GRAFICOS <a onClick={this.handleToggleClick3}><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></a></h6>
          </div>
        </Col>
      </Row>
        <WarningBanner1 warn1={this.state.showWarning1} />
        <WarningBanner3 warn3={this.state.showWarning3} />
      </>
    );
  }
}
class Acciones extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showWarning2: true,
      showWarning4: false,
      
    }
      this.handleToggleClick2 = this.handleToggleClick2.bind(this);
      this.handleToggleClick4 = this.handleToggleClick4.bind(this);
   
  }
  handleToggleClick2() {
    this.setState(prevState => ({
      showWarning2: !prevState.showWarning2,
      showWarning4: false
    }));
  }
  handleToggleClick4() {
    this.setState(prevState => ({
      showWarning4: !prevState.showWarning4,
      showWarning2: false,
    }));
  }
  render(){
    if (!this.props.warn6) {
      return null;
    }
    return(
      <>
       <Row>
        <Col>
        <div className="ManualLyrics7Font">
            <h6 className="text-center LyricsText ManualLyrics7">DATOS TECNICOS <a onClick={this.handleToggleClick2}><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></a></h6>
        </div>
        </Col>
        <Col>
        <div className="ManualLyrics7Font">
          <h6 className="text-center LyricsText ManualLyrics7">GRAFICOS <a  onClick={this.handleToggleClick4}><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></a></h6>
        </div>
        </Col>
      </Row>
      <WarningBanner2 warn2={this.state.showWarning2} />
      <WarningBanner4 warn4={this.state.showWarning4} />
     </>
    );
  }
}
  class Valores extends Component{
    constructor(props) {
      super(props);
      this.state = {
        showWarning: true,
        showWarning5: false,
        showWarning6: false,
      }
      this.handleToggleClick = this.handleToggleClick.bind(this);
     
      
      this.handleToggleClick5 = this.handleToggleClick5.bind(this);
      this.handleToggleClick6 = this.handleToggleClick6.bind(this);
    }

    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }

    handleToggleClick5() {
      this.setState(prevState => ({
        showWarning5: !prevState.showWarning5
      }));
    }
    handleToggleClick6() {
      this.setState(prevState => ({
        showWarning6: !prevState.showWarning6
      }));
    }
      render(){
      
          return(
              <>
             <img 
                src={valores} 
                className="img-fluid" 
                alt="valores" 
                style={{width: '100%', display: 'block',
                margin: '0 auto'}}>
                </img>
                <div className="ManualLyrics4Font">
                      <h6 className="text-left LyricsText ManualLyrics4">HORARIOS DE APERTURA <a onClick={this.handleToggleClick}><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></a></h6>
                  </div>
                  <WarningBanner5 warn={this.state.showWarning} />

                  <div className="ManualLyrics4Font">
                      <h6 className="text-left LyricsText ManualLyrics4">INDICES BURSATILES <a onClick={this.handleToggleClick5}><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></a></h6>
                  </div>
                  <Indices warn5={this.state.showWarning5}/>
                 
                <div className="ManualLyrics4Font">
                      <h6 className="text-left LyricsText ManualLyrics4">ACCIONES<a onClick={this.handleToggleClick6}><i className="fa fa-chevron-circle-down" aria-hidden="true"></i></a></h6>
                  </div>
                <Acciones warn6={this.state.showWarning6}/>
               
              </>
          );
      }
  }
  export default Valores;