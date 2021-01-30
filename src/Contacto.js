import React, {Component} from "react";
import sobrenosotros from './sobrenosotros/sobrenosotros.png';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import './App.css';
import './App.css';
import './Content1.css';
import './Manuales.css';
import ContactoF from './Contacto/woman.jpg'

class Contacto extends Component{
    render(){
        return(
            <>
            <Container fluid>
            <Row>
                <Col
                    xs={{ span: 12, offset: 0}}
                    lg={{ span: 8, offset: 0}}
                    md={{ span: 8, offset: 0}}
                    sm={{ span: 12, offset: 0}}
                >
                <img 
                      src={ContactoF} 
                      className="img-fluid " 
                      alt="ContactoWoman" 
                      style={{width: '100%', height: '100%'}}>
                    </img>
                </Col>
                <Col
                    className="fontContac2"
                    xs={{ span: 12, offset: 0}}
                    lg={{ span: 4, offset: 0}}
                    md={{ span: 4, offset: 0}}
                    sm={{ span: 12, offset: 0}}
                >
                    <h1 className="text-center text-uppercase LyricsTimelineSubs3"
                    style={{color: 'black'}}
                  >ENVIA TU MENSAJE</h1>
                  <p className="text-center LyricsText marginLyrcisS">Si quieres informacion de calquiera de nuestros servicios o entrenamiento financiero personlaizado completa el formulario y le responderemos a la brevedad posible.</p>
                  
                <Form.Group>
             
                    <Form.Control className="marginL3" type="text" placeholder="Nombre" />
                
                
                <br/>
               
                <Form.Control className="marginL3" type="email" placeholder="name@example.com*" />
                <br/>
                <Form.Control className="marginL3" type="text" placeholder="Telefono" />
                <br/>
            
                <Form.Control className="marginL3" as="textarea" rows={10} id="Comentario" name="Comentario"
                  placeholder="Escribe aqui..."
                  />    
                  <br/>
                
                <Button type="submit" className="my-1">

                    Enviar
                </Button>   
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col
                    xs={{ span: 12, offset: 0}}
                    lg={{ span: 4, offset: 0}}
                    md={{ span: 4, offset: 0}}
                    sm={{ span: 12, offset: 0}}
                >
                 <h1 className="text-center text-uppercase LyricsTimelineSubsContact">LLAMANOS</h1>
                <br/>
                <p  style={{color: 'blue'}} className="text-center LyricsText marginLyrcisS">(+58) 412 657 3181</p>
                   
                </Col>
                <Col
                   xs={{ span: 12, offset: 0}}
                   lg={{ span: 4, offset: 0}}
                   md={{ span: 4, offset: 0}}
                   sm={{ span: 12, offset: 0}}
                >
                <h1 className="text-center text-uppercase LyricsTimelineSubsContact">ESCRIBENOS</h1>
                <br/>
                <p style={{color: 'blue'}} className="text-center LyricsText marginLyrcisS">AcademyFreet@gmail.com</p>
                </Col>
                <Col
                   className="fontContac"
                   xs={{ span: 12, offset: 0}}
                   lg={{ span: 4, offset: 0}}
                   md={{ span: 4, offset: 0}}
                   sm={{ span: 12, offset: 0}} 
                >
                
                <h1 className="text-center text-uppercase LyricsTimelineSubsContact">ATENCION AL CLIENTE</h1>
                <br/>
                <p className="text-center LyricsText marginLyrcisS">Lunes a Viernes 08:00h- 18:00h</p>
                <p style={{color: 'white'}} className="text-center LyricsText marginLyrcisS">(Hora de Venezuela)</p>
                
                </Col>
            </Row>
            </Container>
            </>
        );
    }
}

export default Contacto;