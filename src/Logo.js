import React, {Component} from 'react';
import Logo1 from "./LogoFreet.png"
import {Container,Row,Col} from 'react-bootstrap';
import './App.css';
import FreetMiniGrafico from './FreetMiniGrafico';
import WidgetsTradingView from './WidgetsTradingView';
import ComponentPart2 from "./ComponentPart2";
import Content1 from './Content1';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
class Logo extends Component{
  render(){
    return(
      <>
      <Container style={{margin:0}} className="container-fluid">
        <Row>
        <Col md={{ span: 12, offset: 0 }}>
          {/**   <NavLink to="/Freet" activeclassName="active"> */}
     
        <a href="Freet">
          <img 
            src={Logo1} 
            className="img-fluid" 
            alt="LogoFreet" 
            style={{width: '35%'}}>
          </img>
          </a>
         
        </Col>  
        </Row>
      </Container>
      {/**
       * 
       * <Container fluid className="PaddingNav">
      <Content1/>
      <FreetMiniGrafico/>
      <Row >
    <Col md={{ span: 10, offset: 1}}
                sm={{ span: 10, offset: 1}}>
      <ComponentPart2/>	
    </Col>
    </Row>
    </Container>
       */}
      </>

    );
  }
}
export default Logo;