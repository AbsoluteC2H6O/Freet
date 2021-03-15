import React, {Component} from "react";
import './App.css';
import './Manuales.css';
import valores from './BANNERMERCADO/Slide3.PNG';
import {Container, Row, Col} from 'react-bootstrap';


/**<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div id="tradingview_23de8"></div>
  <div class="tradingview-widget-copyright"><a href="https://es.tradingview.com/symbols/AAPL/" rel="noopener" target="_blank"><span class="blue-text">Apple</span></a> por TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  
  </script>
</div>
<!-- TradingView Widget END --> */
var tradingvalue1 = `new TradingView.MediumWidget(
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
    "width": "100%",
    "height": "100%",
    "locale": "es",
    "colorTheme": "light",
    "gridLineColor": "#F0F3FA",
    "trendLineColor": "#2196F3",
    "fontColor": "#787B86",
    "underLineColor": "#E3F2FD",
    "isTransparent": false,
    "autosize": true,
    "container_id": "tradingview_23de8"
  }
    );`
class ForexMercado extends Component{

    render(){
        return(
            <>
            </>
        );
    }
}