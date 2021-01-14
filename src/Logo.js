import React, {Component} from 'react';
import Logo1 from "./LogoFreet.png"
import {Container,Row,Col} from 'react-bootstrap';
import './App.css';
class Logo extends Component{
  render(){
    return(
      <>
      <Container style={{margin:0}} className="container-fluid">
        <Row>
        <Col md={{ span: 12, offset: 0 }}>
          <img 
            src={Logo1} 
            className="img-fluid" 
            alt="LogoFreet" 
            style={{width: '35%'}}>
          </img>
        </Col>  
        </Row>
      </Container>
      </>

    );
  }
}
export default Logo;