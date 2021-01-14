import React, {Component} from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import './Content1.css';
import './App.css';
/**
 const chart = createChart(document.body, { width: 400, height: 300 });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
]);
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://es.tradingview.com" rel="noopener" target="_blank"><span class="blue-text">Cotizaciones</span></a> por TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js" async>
  {
  "symbols": [
    {
      "description": "INDICE DEL DOLAR",
      "proName": "INDEX:DXY"
    },
    {
      "description": "NASDAQ 100",
      "proName": "CURRENCYCOM:US100"
    },
    {
      "description": "DOW JONES AVERAGE INDUSTRIAL",
      "proName": "CURRENCYCOM:US30"
    },
    {
      "description": "EURO/DOLAR",
      "proName": "FX:EURUSD"
    },
    {
      "description": "BITCOIN/DOLAR",
      "proName": "BITSTAMP:BTCUSD"
    },
    {
      "description": "ETHEREUM/DOLAR",
      "proName": "BITSTAMP:ETHUSD"
    },
    {
      "description": "ORO/DOLAR",
      "proName": "OANDA:XAUUSD"
    },
    {
      "description": "PLATA/DOLAR",
      "proName": "OANDA:XAGUSD"
    }
  ],
  "colorTheme": "light",
  "isTransparent": false,
  "showSymbolLogo": true,
  "locale": "es"
}
  </script>
</div>
<!-- TradingView Widget END -->
 */
var tradingvalue =
{
  "symbols": [
    {
      "description": "INDICE DEL DOLAR",
      "proName": "INDEX:DXY"
    },
    {
      "description": "NASDAQ 100",
      "proName": "CURRENCYCOM:US100"
    },
    {
      "description": "DOW JONES AVERAGE INDUSTRIAL",
      "proName": "CURRENCYCOM:US30"
    },
    {
      "description": "EURO/DOLAR",
      "proName": "FX:EURUSD"
    },
    {
      "description": "BITCOIN/DOLAR",
      "proName": "BITSTAMP:BTCUSD"
    },
    {
      "description": "ETHEREUM/DOLAR",
      "proName": "BITSTAMP:ETHUSD"
    },
    {
      "description": "ORO/DOLAR",
      "proName": "OANDA:XAUUSD"
    },
    {
      "description": "PLATA/DOLAR",
      "proName": "OANDA:XAGUSD"
    }
  ],
  "colorTheme": "light",
  "isTransparent": false,
  "showSymbolLogo": true,
  "locale": "es"
}
var myJSON = JSON.stringify(tradingvalue);
class TradingMiniApp extends Component{
	constructor(props) {
		super(props);
		this._ref = React.createRef();
}
componentDidMount() {
		const script = document.createElement('script');
		script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js'
		script.async = true;
		script.innerHTML = myJSON/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
		this._ref.current.appendChild(script);
}
  render(){
    return(

      <>
			<Container fluid className="tradingview-widget-container colPadding" ref={this._ref}>
				<Row className="tradingview-widget-container__widget">

				</Row>
			</Container>
			</>

    );
  }
}

export default TradingMiniApp;