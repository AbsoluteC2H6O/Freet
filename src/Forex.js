import React, {Component} from "react";
import FreetMiniGrafico from './FreetMiniGrafico';
import WidgetsTradingView from './WidgetsTradingView';
import ComponentPart2 from "./ComponentPart2";
import Content1 from './Content1';
import FreetCarrousel from './FreetCarrousel';
import ComponentPart1 from './ComponentPart1';
import Header from './App';
import Footer from './Footer';
import WhatsappWidget from './WhatsappWidget';
//caja de comentarios anonimos con alias default o alias o nombre cualquiera y abajo la reputacion o calificacion
//calificacion estrelas para calificar
import './App.css';
import { Container, Row, Col} from "react-bootstrap";
import TelegramWidget from "./TelegramWidget";
import Logo from './Logo';
  class Forex extends Component{
      render(){
    //NOTA arreglar para dropdaown
          return(
              <>
             
		
             <Container fluid className="PaddingNav">
               {/**<Logo/>
               <Header/>
			          <ComponentPart1/> */}
               
                  <Content1/>
                  <FreetMiniGrafico/>
                  <Row >
                <Col md={{ span: 10, offset: 1}}
                            sm={{ span: 10, offset: 1}}>
                  <ComponentPart2/>	
                  
                  {/** <Footer/><TelegramWidget/>
			        <WhatsappWidget/> */}
                 
                </Col>
                </Row>
                </Container>
              </>
          );
      }
  }
  export default Forex;