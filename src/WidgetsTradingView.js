import React, {Component} from 'react';
import {Row,Col, Container, ToastBody} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
/*
<div style="text-align:center;padding:1em 0;"> <h2><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/es/country/gb"><span style="color:gray;">Hora actual en</span><br />Reino Unido</a></h2> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=large&timezone=Europe%2FLondon&show=hour_minute" width="100%" height="140" frameborder="0" seamless></iframe> </div>

*/

var tradingvalue1 = 
{
    "width": 1100,
    "height": 512,
    "defaultColumn": "overview",
    "defaultScreen": "general",
    "market": "forex",
    "showToolbar": true,
    "colorTheme": "light",
    "locale": "es"
  }
var tradingvalue2 =
`
new TradingView.MediumWidget(
    {
    "symbols": [
      [
        "Apple",
        "AAPL"
      ],
      [
        "Google",
        "GOOGL"
      ],
      [
        "Microsoft",
        "MSFT"
      ]
    ],
    "chartOnly": false,
    "width": 1000,
    "height": 400,
    "locale": "es",
    "colorTheme": "light",
    "gridLineColor": "#F0F3FA",
    "trendLineColor": "#2196F3",
    "fontColor": "#787B86",
    "underLineColor": "#E3F2FD",
    "isTransparent": false,
    "autosize": false,
    "container_id": "tradingview_2ff7d"
  }
    ); `
var tradingvalue3 =  {
  "width": 1000,
  "height": 490,
  "defaultColumn": "overview",
  "screener_type": "crypto_mkt",
  "displayCurrency": "USD",
  "colorTheme": "light",
  "locale": "es"
}
var tradingvalue4 = {
    "colorTheme": "light",
    "dateRange": "12M",
    "exchange": "US",
    "showChart": true,
    "locale": "es",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": false,
    "width": "400",
    "height": "600",
    "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
    "plotLineColorFalling": "rgba(33, 150, 243, 1)",
    "gridLineColor": "rgba(240, 243, 250, 1)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
    "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
    "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
  }
var tradingvalue5 = {
    "width": 770,
    "height": 450,
    "symbolsGroups": [
      {
        "name": "Índices",
        "originalName": "Indices",
        "symbols": [
          {
            "name": "FOREXCOM:SPXUSD",
            "displayName": "S&P 500"
          },
          {
            "name": "FOREXCOM:NSXUSD",
            "displayName": "Nasdaq 100"
          },
          {
            "name": "FOREXCOM:DJI",
            "displayName": "Dow 30"
          },
          {
            "name": "INDEX:NKY",
            "displayName": "Nikkei 225"
          },
          {
            "name": "INDEX:DEU30",
            "displayName": "DAX Index"
          },
          {
            "name": "FOREXCOM:UKXGBP",
            "displayName": "FTSE 100"
          }
        ]
      },
      {
        "name": "Materias primas",
        "originalName": "Commodities",
        "symbols": [
          {
            "name": "CME_MINI:ES1!",
            "displayName": "S&P 500"
          },
          {
            "name": "CME:6E1!",
            "displayName": "Euro"
          },
          {
            "name": "COMEX:GC1!",
            "displayName": "Gold"
          },
          {
            "name": "NYMEX:CL1!",
            "displayName": "Crude Oil"
          },
          {
            "name": "NYMEX:NG1!",
            "displayName": "Natural Gas"
          },
          {
            "name": "CBOT:ZC1!",
            "displayName": "Corn"
          }
        ]
      },
      {
        "name": "Bonos",
        "originalName": "Bonds",
        "symbols": [
          {
            "name": "CME:GE1!",
            "displayName": "Eurodollar"
          },
          {
            "name": "CBOT:ZB1!",
            "displayName": "T-Bond"
          },
          {
            "name": "CBOT:UB1!",
            "displayName": "Ultra T-Bond"
          },
          {
            "name": "EUREX:FGBL1!",
            "displayName": "Euro Bund"
          },
          {
            "name": "EUREX:FBTP1!",
            "displayName": "Euro BTP"
          },
          {
            "name": "EUREX:FGBM1!",
            "displayName": "Euro BOBL"
          }
        ]
      },
      {
        "name": "Forex",
        "originalName": "Forex",
        "symbols": [
          {
            "name": "FX:EURUSD"
          },
          {
            "name": "FX:GBPUSD"
          },
          {
            "name": "FX:USDJPY"
          },
          {
            "name": "FX:USDCHF"
          },
          {
            "name": "FX:AUDUSD"
          },
          {
            "name": "FX:USDCAD"
          }
        ]
      }
    ],
    "showSymbolLogo": true,
    "colorTheme": "light",
    "isTransparent": false,
    "locale": "es"
  }
var myJSON1 = JSON.stringify(tradingvalue1);
var myJSON2 = JSON.stringify(tradingvalue2);
var myJSON3 = JSON.stringify(tradingvalue3);
var myJSON4 = JSON.stringify(tradingvalue4);
var myJSON5 = JSON.stringify(tradingvalue5);

class Grafico1 extends Component{
    constructor(props) {
          super(props);
          this._ref = React.createRef();
  }
  componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
      script.async = true;
      script.innerHTML = myJSON1/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
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
  class Grafico2 extends Component{
    constructor(props) {
          super(props);
          this._ref = React.createRef();
  }
  componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js'
      script.async = true;
      script.innerHTML = myJSON2/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
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
  class Grafico3 extends Component{
    constructor(props) {
          super(props);
          this._ref = React.createRef();
  }
  componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
      script.async = true;
      script.innerHTML = myJSON3/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
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
  class Grafico4 extends Component{
    constructor(props) {
          super(props);
          this._ref = React.createRef();
  }
  componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js'
      script.async = true;
      script.innerHTML = myJSON4/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
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
  class Grafico5 extends Component{
    constructor(props) {
          super(props);
          this._ref = React.createRef();
  }
  componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'
      script.async = true;
      script.innerHTML = myJSON5/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
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
  class Grafico6 extends Component{
    constructor(props){
        super(props);
        this.state ={
            myHtml: ''
        };
    }
    getHtml() {
        axios.get('https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=large&timezone=Europe%2FLondon&show=hour_minute').then(response => {
          const extractScriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gmi;
          let scriptsExtracted;
          let innerHtml = response.data;
          while(scriptsExtracted = extractScriptRegex.exec(response.data)) {
            innerHtml = innerHtml.replace(scriptsExtracted[0], '');
            window.eval(scriptsExtracted[1]);
          }
          this.setState({ myHtml: innerHtml });
        }).catch(error => {
          this.setState({ myHtml: '<h1>Error</h1>' });
        });
      }
    
    componentDidMount() {
        this.getHtml();
      }
  
  render(){
    const { myHtml } = this.state;
    return(
    <>
    <Container fluid> 
      <Row>
      <Col dangerouslySetInnerHTML={{ __html: myHtml }}>

      </Col>
      </Row>
    </Container>
    </>
    );
  }
  }

  class Grafico7 extends Component{
    constructor(props){
        super(props);
        this.state ={
            myHtml: ''
        };
    }
    getHtml() {
        axios.get('https://s3.tradingview.com/tv.js').then(response => {
          const extractScriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gmi;
          let scriptsExtracted;
          let innerHtml = response.data;
          while(scriptsExtracted = extractScriptRegex.exec(response.data)) {
            innerHtml = innerHtml.replace(scriptsExtracted[0], '');
            window.eval(scriptsExtracted[1]);
          }
          this.setState({ myHtml: innerHtml });
        }).catch(error => {
          this.setState({ myHtml: '<h1>Error</h1>' });
        });
      }
    
    componentDidMount() {
        this.getHtml();
      }
  
  render(){
    const { myHtml } = this.state;
    return(
    <>
    <Container fluid> 
      <Row>
      <Col dangerouslySetInnerHTML={{ __html: myHtml }}>

      </Col>
      </Row>
    </Container>
    </>
    );
  }
  }
  
class WidgetsTradingView extends Component{

    
    render(){
       
        return(
            <>
            <Row  class="tradingview-widget-copyright"
            id="tradingview_2ff7d">
                <Grafico6/>
            </Row>
        </>
        );
    }
}

export default WidgetsTradingView;



//component carro
// arrancar ("llave");

