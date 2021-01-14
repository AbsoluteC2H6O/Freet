import React, {Component} from "react";
import { Container, Tabs, Tab} from 'react-bootstrap';
import './App.css';
class Footer extends Component{
      render(){
          return(
              <>
              
              <Container fluid className="LyricsTextFooter" variant="dark">
              <Tabs defaultActiveKey="Advertencia de riesgo" id="uncontrolled-tab-example">
                <Tab eventKey="Terminos y condiciones" title="Terminos">
                    
                </Tab>
                <Tab eventKey="Politica de privacidad" title="Politica">
                   
                </Tab>
                <Tab eventKey="Advertencia de riesgo" title="Advertencia">
                  <p>2020-2021 Freet Ltd.Todos los derechos reservados</p>
                  <p>Aviso legal: Las operaciones con instrumentos financieros o criptomonedas implican un elevado riesgo, incluyendo la perdida parcial o total del capital invertido, y pueden no ser adecuadas para todos los inversores. Los preios de las criptomonedas son extremadamente volatiles y pueden verse afectados por factores externos de tipo financiero, regulatorio o politico. Operar sobre margenes aumenta los riesgos financieros.</p>
                  <p>Antes de lanzarse a invertir en un instrumento financiero o criptomonedas, informese debidamente de los riesgos y costes asociados a este tipo de operaciones en los mercados financieros.</p>
                  <p>Fije unos objetivos de inversion adecuados a su nivel de experiencia y su apetito por el riesgo y, siempre que sea necesario, busque asesoramiento profesional.</p>
                  <p>Freet quiere recordarle que la informacion contenida en este sitio web no se ofrece necesariamente ni en tiempo real ni de forma exacta. Los datos y precios de la web no siempre proceden de operadores de mercado o bolsas, por lo que los precios podrian diferir del precio real de cualquier mercado. Son precios orientativos que en ningun caso deben utilizarse con fines bursatiles. Ni Freet ni ninguno de los porveedores de los datos de esta web asumen responsabilidad alguna por las perdidas o resultados perniciosos de sus operaciones basados en su confianza en la informacion contenida en la web.</p>
                  <p>Queda prohibida la total reproduccion,  modificacion, transmision o distribucion de los datos publicados en este sitio web sin la autorizacion previa por escrito de Freet y/o del proveedor de los mismos. Todos los derechos de propiedad intelectual estan reservados a los proveedores y/o bolsa responsable de dichos los datos.</p>
                  <p>Freet puede recibir contraprestacion economica de las empresas que se anuncian en la pagina segun su interaccion con estas o con los anuncios que aqui se publican.</p>
            
                </Tab>
              </Tabs>
                   </Container>
                
              </>
          );
      }
  }
export default Footer;