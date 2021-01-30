import React, {Component} from "react";
import axios from "axios";
import './App.css';
import './NavBar2.css'
import { Container, Row, Col } from "react-bootstrap";

class Grafico7 extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = false;
    script.innerHTML = `new window.TradingView.widget({
      width: 980,
      height: 610,
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
      <div className="tradingview-widget-container" ref={this.myRef}>
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
  class Graficoavanzado extends Component{
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
 export default Graficoavanzado;

