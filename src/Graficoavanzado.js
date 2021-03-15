import React, {Component} from "react";
import axios from "axios";
import './App.css';
import './NavBar2.css'
import { Container, Row, Col, Dropdown} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
class Grafico7 extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  } 

  componentDidMount() {
    const script = document.createElement("script");
    script.async = false;
    script.innerHTML = `new window.TradingView.widget({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "es",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_523c3",
    })`;
    script.id = "myShit";

    const script2 = document.createElement("script");

    script2.src = "https://s3.tradingview.com/tv.js";
    script2.async = true;

    this.myRef.current.appendChild(script2);

    this.myRef.current.appendChild(script);

    console.log("Print my shit", this.myRef.current);
  }

  render() {
    return (
      <div className="tradingview-widget-container graficoAvanzado" ref={this.myRef}>
        <div id="tradingview_523c3"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://es.tradingview.com/symbols/NASDAQ-AAPL/"
            rel="noopener"
            target="_blank"
          >
            <span className="blue-text">AAPL Gráfico</span>
          </a>{" "}
          por TradingView
        </div>
      </div>
    );
  }
}
class GraficoAvanzado00 extends Component{

    render(){
      
        return(
            <>
          <Container fluid>
            <Row>
              <Col
             
               xs={12}
               sm={12}
               md={12}
               lg={12}
              >
              
               <Grafico7/>
              </Col>
              
            </Row>
           
          </Container>
           
            </>
        );
    }
}
class GraficoAvanzado1 extends Component{
  

    
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = false;
    script.innerHTML = `new TradingView.widget(
      {
      "container_id": "technical-analysis",
      autosize: true,
      "symbol": "AAPL",
      "interval": "D",
      "timezone": "exchange",
      "theme": "light",
      "style": "1",
      "toolbar_bg": "#f1f3f6",
      "withdateranges": true,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "save_image": false,
      "studies": [
        "ROC@tv-basicstudies",
        "StochasticRSI@tv-basicstudies",
        "MASimple@tv-basicstudies"
      ],
      "show_popup_button": true,
      "popup_width": "1000",
      "popup_height": "650",
      "locale": "es"
    }
      );`;
    script.id = "myShit";

    const script2 = document.createElement("script");
    
    script2.src = "https://s3.tradingview.com/tv.js";
    script2.async = true;

    this.myRef.current.appendChild(script2);

    this.myRef.current.appendChild(script);

    console.log("Print my shit", this.myRef.current);
  }
	
  render() {
    return (
      <div className="tradingview-widget-container graficoAvanzado" ref={this.myRef}>
         <div id="technical-analysis graficoAvanzado"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://es.tradingview.com/symbols/AAPL/"
            rel="noopener"
            target="_blank" 
          >
            <span className="blue-text">AAPL Gráfico</span>
          </a>{" "}
          por TradingView
        </div>
      </div>
    );
  }
}
class GraficoAvanzado2 extends Component{
  

    
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = false;
    script.innerHTML = `new TradingView.widget(
      {
      "container_id": "basic-area-chart",
      autosize: true,
      "symbol": "AAPL",
      "interval": "D",
      "timezone": "exchange",
      "theme": "light",
      "style": "3",
      "toolbar_bg": "#f1f3f6",
      "hide_top_toolbar": true,
      "save_image": false,
      "locale": "es"
    }
      );`;
    script.id = "myShit";

    const script2 = document.createElement("script");
    
    script2.src = "https://s3.tradingview.com/tv.js";
    script2.async = true;

    this.myRef.current.appendChild(script2);

    this.myRef.current.appendChild(script);

    console.log("Print my shit", this.myRef.current);
  }
	
  render() {
    return (
      <div className="tradingview-widget-container graficoAvanzado" ref={this.myRef}>
        <div id="basic-area-chart"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://es.tradingview.com/symbols/AAPL/"
            rel="noopener"
            target="_blank"
          >
            <span className="blue-text">AAPL Gráfico</span>
          </a>{" "}
          por TradingView
        </div>
      </div>
    );
  }
}
class GraficoAvanzado3 extends Component{
  

    
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = false;
    script.innerHTML = `new TradingView.widget(
      {
      "container_id": "watchlist",
      autosize: true,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "exchange",
      "theme": "light",
      "style": "1",
      "toolbar_bg": "#f1f3f6",
      "withdateranges": true,
      "allow_symbol_change": true,
      "save_image": false,
      "watchlist": [
        "AAPL",
        "IBM",
        "TSLA",
        "AMD",
        "MSFT",
        "GOOG"
      ],
      "locale": "es"
    }
      );`;
    script.id = "myShit";

    const script2 = document.createElement("script");

    script2.src = "https://s3.tradingview.com/tv.js";
    script2.async = true;

    this.myRef.current.appendChild(script2);

    this.myRef.current.appendChild(script);

    console.log("Print my shit", this.myRef.current);
  }

  render() {
    return (
      <div className="tradingview-widget-container graficoAvanzado" ref={this.myRef}>
      <div id="watchlist"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://es.tradingview.com/symbols/NASDAQ-AAPL/"
            rel="noopener"
            target="_blank"
          >
            <span className="blue-text">AAPL Gráfico</span>
          </a>{" "}
          por TradingView
        </div>
      </div>
    );
  }
}
class GraficoAvanzado4 extends Component{
  

    
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = false;
    script.innerHTML = `new TradingView.widget(
      {
      "container_id": "analytics-platform",
      autosize: true,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "exchange",
      "theme": "light",
      "style": "0",
      "toolbar_bg": "#f1f3f6",
      "withdateranges": true,
      "allow_symbol_change": true,
      "save_image": false,
      "details": true,
      "hotlist": true,
      "calendar": true,
      "locale": "es"
    }
      );`;
    script.id = "myShit";
    const script2 = document.createElement("script");
    script2.src = "https://s3.tradingview.com/tv.js";
    script2.async = true;

    this.myRef.current.appendChild(script2);

    this.myRef.current.appendChild(script);

    console.log("Print my shit", this.myRef.current);
  }

  render() {
    return (
      <div className="tradingview-widget-container graficoAvanzado" ref={this.myRef}>
        <div id="analytics-platform"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://es.tradingview.com/symbols/NASDAQ-AAPL/"
            rel="noopener"
            target="_blank"
          >
            <span className="blue-text">AAPL Gráfico</span>
          </a>{" "}
          por TradingView
        </div>
      </div>
    );
  }
}
class NavegationGrafico extends Component{
   
 
  render(){
    return(
      <>
      <Container fluid className="graficoAvanzado">

     <Row
      className="justify-content-center text center"
     >
     <Dropdown
     
     >
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  Seleccionar Grafico
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <NavLink to="/GraficoAvanzado00" activeclassName="active">
                  <Dropdown.Item href="#action-00">Predeterminado</Dropdown.Item>
                </NavLink>
                <NavLink to="/GraficoAvanzado1" activeclassName="active">
                  <Dropdown.Item href="#action-0">Analisis Tecnico</Dropdown.Item>
                </NavLink>
                <NavLink to="/GraficoAvanzado2" activeclassName="active">
                  <Dropdown.Item href="#action-1">Area Básico</Dropdown.Item>
                </NavLink>
                <NavLink to="/GraficoAvanzado3" activeclassName="active">
                  <Dropdown.Item href="#action-2">Lista de seguimiento</Dropdown.Item>
                </NavLink>
                <NavLink to="/GraficoAvanzado4" activeclassName="active">
                  <Dropdown.Item href="#action-3">Plataforma analítica</Dropdown.Item>
                </NavLink>
                </Dropdown.Menu>
        </Dropdown>
     </Row>
      
        </Container>
      </>
    );
  }
}
class Graficoavanzado extends Component{
  render(){
    return(<>
    <Router>
      <NavegationGrafico/>
    <Switch>
    <Route exact path="/GraficoAvanzado00" component={GraficoAvanzado00}/>
    <Route exact path="/GraficoAvanzado1" component={GraficoAvanzado1}/>
    <Route exact path="/GraficoAvanzado2" component={GraficoAvanzado2}/>
    <Route exact path="/GraficoAvanzado3" component={GraficoAvanzado3}/>
    <Route exact path="/GraficoAvanzado4" component={GraficoAvanzado4}/>
    </Switch>
    </Router>
    </>
    );
  }
}

 export default Graficoavanzado;

