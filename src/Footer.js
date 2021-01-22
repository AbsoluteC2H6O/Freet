import React, {Component} from "react";
import { Container, Tabs, Tab, Row, Col} from 'react-bootstrap';
import './App.css';
import FreetCarrousel from './FreetCarrousel';
class Footer extends Component{
      render(){
          return(
              <>
              <Col
                    className="LyricsTextFooter LyricsTextPago"
                    xs={{ span: 10, offset: 1}}
                    lg={{ span: 10, offset: 1}}
                    md={{ span: 10, offset: 1}}
                    sm={{ span: 10, offset: 1}}
                  >
                 <h4 className="text-center ManualLyrics4">METODOS DE PAGO</h4>
               
              
                 </Col>
                 <Col
                    className="justify-content-center text-center"
                    xs={{ span: 10, offset: 1}}
                    lg={{ span: 8, offset: 2}}
                    md={{ span: 8, offset: 2}}
                    sm={{ span: 10, offset: 1}}
                  >

                     
                  </Col>
               <FreetCarrousel/>    
              <Container fluid className="LyricsTextFooter" variant="dark">
              <Row >
                  
                
                 </Row>

               <Row className="justify-content-center">
               <p className="LyricsTextFooter marginIcons"><i className="fa fa-twitter-square" aria-hidden="true"></i></p>
               <p className="LyricsTextFooter marginIcons"> <i className="fa fa-facebook-square" aria-hidden="true"></i></p>
               <p className="LyricsTextFooter marginIcons"> <i className="fa fa-instagram" aria-hidden="true"></i></p>
               
               </Row>
               <Tabs className="justify-content-center" defaultActiveKey="Advertencia de riesgo" id="uncontrolled-tab-example">
                 
               <Tab eventKey="Contacto" title="Contacto"> 
               </Tab>
               <Tab eventKey="Nosotros" title="Nosotros"> 
               </Tab>
               <Tab eventKey="Terminos y condiciones" title="Terminos">
               </Tab>
               <Tab className="text-center" eventKey="Advertencia de riesgo" title="ADVERTENCIA DE RIESGO:">
                 <p>2020-2021 Freet Ltd.Todos los derechos reservados</p>
                 <p>El contenido de este sitio web no debe interpretarse como un objeto de inversión, recuerda que operar con instrumentos CFDs es altamente riesgoso y</p>
                 <p>puede causar la perdida de todo tu capital. Por lo tanto, no debe invertir o arriesgar dinero que no pueda permitirse perder. Debe asegurarse de que</p>
                 <p>comprende todos los riesgos.</p>
                 <p>Las publicaciones en este sitio web están protegidas por derecho de autor, cualquier copia, reproducción, republicación y recursos de cualquier material</p>
                 <p>de la pagina esta totalmente prohibido.</p>
                 <hr className="LyricsTextFooter"/>
               
               </Tab>
               </Tabs>
                
               
              
             
              </Container>
                
              </>
          );
      }
  }
export default Footer;

/**
 * <p>2020-2021 Freet Ltd.Todos los derechos reservados</p>
                  <p>Aviso legal: Las operaciones con instrumentos financieros o criptomonedas implican un elevado riesgo, incluyendo la perdida parcial o total del capital invertido, y pueden no ser adecuadas para todos los inversores. Los preios de las criptomonedas son extremadamente volatiles y pueden verse afectados por factores externos de tipo financiero, regulatorio o politico. Operar sobre margenes aumenta los riesgos financieros.</p>
                  <p>Antes de lanzarse a invertir en un instrumento financiero o criptomonedas, informese debidamente de los riesgos y costes asociados a este tipo de operaciones en los mercados financieros.</p>
                  <p>Fije unos objetivos de inversion adecuados a su nivel de experiencia y su apetito por el riesgo y, siempre que sea necesario, busque asesoramiento profesional.</p>
                  <p>Freet quiere recordarle que la informacion contenida en este sitio web no se ofrece necesariamente ni en tiempo real ni de forma exacta. Los datos y precios de la web no siempre proceden de operadores de mercado o bolsas, por lo que los precios podrian diferir del precio real de cualquier mercado. Son precios orientativos que en ningun caso deben utilizarse con fines bursatiles. Ni Freet ni ninguno de los porveedores de los datos de esta web asumen responsabilidad alguna por las perdidas o resultados perniciosos de sus operaciones basados en su confianza en la informacion contenida en la web.</p>
                  <p>Queda prohibida la total reproduccion,  modificacion, transmision o distribucion de los datos publicados en este sitio web sin la autorizacion previa por escrito de Freet y/o del proveedor de los mismos. Todos los derechos de propiedad intelectual estan reservados a los proveedores y/o bolsa responsable de dichos los datos.</p>
                  <p>Freet puede recibir contraprestacion economica de las empresas que se anuncian en la pagina segun su interaccion con estas o con los anuncios que aqui se publican.</p>
            
 * 
 */