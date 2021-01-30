import React, {Component} from "react";
import sobrenosotros from './sobrenosotros/sobrenosotros.png';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import './App.css';
import './App.css';
import './Content1.css';
import './Manuales.css';
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  class SobreNosotros extends Component{
    constructor(props){
      super(props);

      this.state = {
        Stars: 0,
        votes: 0,
        ratio: 0
      }
    }
      render(){
      //cajetin de comentarios y filtros, informacion releventa carlos pasa el diseno
          return(
              <>
              <Container fluid>
                
                  <Row>
                    <Col
                    className="fontContac2"> 
                    <img 
                      src={sobrenosotros} 
                      className="img-fluid " 
                      alt="SobreNosotros" 
                      style={{width: '100%', height: '100%'}}>
                    </img>
                    </Col>
                    <Col
                    className="fontContac2"
                    >
                    <pre>
                      
                      </pre> 
                    <h1 className="text-center text-uppercase LyricsTimelineSubs">NUESTRA EMPRESA</h1>
                    <p className="text-center LyricsText marginLyrcisS">Somos una plataforma web y academia de inversiones con base en latino américa enfocada al estudio de los mercados financieros y dedicada principalmente a la educación y aprendizaje.</p>
                    <pre>
                      
                      </pre>
                    <p className="text-center LyricsText marginLyrcisS">Nuestro contenido web es garantizar la fácil comprensión de todos nuestros lectores de una manera simple, rápida e ilustrativa, además podrán seguir en tiempo real las gráficas de cada uno de los mercados financieros, calendario económico, datos técnicos, horarios de apertura, ideas y utilizar nuestra potente calculadora de riesgo.</p>
                    </Col>
                    </Row>
                    <pre>
                      
                      </pre>
                  <Row>
                    <Col
                      className="justify-content-center text-center fontMiniWidget"
                      xs={{ span: 9, offset: 1}}
                      lg={{ span: 9, offset: 1}}
                      md={{ span: 9, offset: 1}}
                      sm={{ span: 9, offset: 1}}
                    >
                   <h1 className="text-center text-uppercase LyricsTimelineSubs"> ¿PORQUE ELEGIRNOS?</h1>
                   <p className="text-center LyricsText marginLyrcisS">Somos un grupo de jóvenes emprendedores y apasionados por el trading, para ello diseñamos una plataforma web donde podrán visualizar las ideas publicadas con un análisis completo del mercado y verificadas por una ratio de efectividad, de esta manera garantizar nuestra reputación y confianza hacia nuestros usuarios.</p>
                    </Col>

                    
                  </Row>
                  <pre>
                      
                      </pre>
                  <Row>
                    <Col
                      className="justify-content-center text-center fontMiniWidget"
                      xs={{ span: 9, offset: 1}}
                      lg={{ span: 9, offset: 1}}
                      md={{ span: 9, offset: 1}}
                      sm={{ span: 9, offset: 1}}
                    >
                    <h1 className="text-center text-uppercase LyricsTimelineSubs">¿QUE OFRECEMOS?</h1>
                    <p className="text-center LyricsText marginLyrcisS">Nuestra academia ofrece la posibilidad de aprender el trading desde cero de una manera fácil, rápida y dinámica a un precio totalmente accesible a diferencias de otras academias, además contamos oficialmente con nuestra plataforma web como herramienta principal de referencia.
Todos nuestros cursos están divididos en tres niveles de aprendizaje para guiar al estudiante a su máximo potencial.</p>
                    <pre>
                      
                      </pre>
                    <p className="text-center LyricsText marginLyrcisS"><strong>“La educación es el arma más poderosa que puedes usar para cambiar el mundo”. </strong></p>
                    <pre>
                      
                      </pre>
                    <p className="text-center LyricsText marginLyrcisS"><mark>Nelson Mandela</mark></p>
                    </Col>

                    
                  </Row>
                  <pre>
                      
                      </pre>
                  <Row>
                    <Col
                      className="justify-content-center text-center fontMiniWidget"
                      xs={{ span: 9, offset: 1}}
                      lg={{ span: 9, offset: 1}}
                      md={{ span: 9, offset: 1}}
                      sm={{ span: 9, offset: 1}}
                    >
                    <h1 className="text-center text-uppercase LyricsTimelineSubs">OBJETIVOS</h1>
                    <p className="text-center LyricsText marginLyrcisS">Nuestra misión es garantizar el aprendizaje adecuado para todas las personas que quieren gestionar sus propias inversiones sin depender de terceros utilizando sistemas interactivos y fáciles de entender en su proceso de formación.</p>
                    <pre>
                      
                      </pre>
                    <p className="text-center LyricsText marginLyrcisS">Recuerda que nadie puede predecir la bolsa de valores, pero si tienes las herramientas y el conocimiento adecuado puedes controlar el riesgo y beneficiarte de las oportunidades al realizar tus inversiones.</p>
                    </Col> 
                    <pre>
                      
                      </pre>           
                  </Row>  
                  <Row>
                  <Col
                    xs={{ span: 9, offset: 1}}
                    lg={{ span: 9, offset: 1}}
                    md={{ span: 9, offset: 1}}
                    sm={{ span: 9, offset: 1}}
                  >
                    <pre>
                      
                    </pre>
                    <p className="text-left text-uppercase LyricsTimelineSubs3"
                    style={{color: 'black'}}  
                  >CALIFICANOS:<i>{FaStarHalfAlt}</i><span style={{color: 'rgb(230, 180, 89);'}} lassName="glyphicon glyphicon-star marginStar"></span><i style={{color: 'rgb(230, 180, 89);'}} className="icon-star-empty marginStar"></i><i style={{color: 'rgb(230, 180, 89);'}} className="fa fa-star-half-o marginStar" aria-hidden="true"></i><i style={{color: 'rgb(230, 180, 89);'}} className="fa fa-star-half-o marginStar" aria-hidden="true"></i><i style={{color: 'rgb(230, 180, 89);'}} className="fa fa-star-half-o marginStar" aria-hidden="true"></i><i style={{color: 'rgb(230, 180, 89);'}} className="fa fa-star-half-o marginStar" aria-hidden="true"></i><i  style={{color: 'rgb(230, 180, 89);'}} className="fa fa-star-half-o marginStar" aria-hidden="true"></i>
                  <i>{this.state.ratio}/5 ({this.state.votes} votos)</i></p>
                   

                  </Col>
                  
                  </Row>
                  <Row>
                  <Col
                    xs={{ span: 9, offset: 1}}
                    lg={{ span: 9, offset: 1}}
                    md={{ span: 9, offset: 1}}
                    sm={{ span: 9, offset: 1}}
                  >
                  <h1 className="text-left text-uppercase LyricsTimelineSubs3"
                    style={{color: 'black'}}
                  >TU OPINION ES IMPORTANTE PARA NOSOTROS: </h1>
                  <FontAwesomeIcon icon={FaStar}/>
                  <p className="text-left LyricsText marginLyrcisS">Tu dirección de correo electrónico no será publicada. Los campos obligratorios están marcados con *</p>
                  {/**<FontAwesomeIcon icon={faHome} />
                     <FontAwesomeIcon icon={FaStarHalfAlt} />
                     <FontAwesomeIcon icon={FaStar} />
                     <i class="icon-star"></i> */}
                     
                   </Col>
                  </Row> 
                  <Row>
                  <Col
                    xs={{ span: 9, offset: 1}}
                    lg={{ span: 9, offset: 1}}
                    md={{ span: 9, offset: 1}}
                    sm={{ span: 9, offset: 1}}
                  >
                   
                     

                <Form>
                  <Form.Group>
                  
                  {/**<textarea id="Comentario" name="Comentario">
                    Comentario
                  </textarea>**/}

                  <Form.Control className="fontContac2" as="textarea" rows={10} id="Comentario" name="Comentario"
                  placeholder="Escribe aqui..."
                  />
                  </Form.Group>
                </Form>
                  </Col>
                  </Row>
                  <Row>
                  <Col
                  
                    xs={{ span: 3, offset: 1}}
                    lg={{ span: 3, offset: 1}}
                    md={{ span: 3, offset: 1}}
                    sm={{ span: 3, offset: 1}}
                  >
                  <Form.Group controlId="exampleForm.ControlInput1">
                  
                  <Form.Control className="fontContac2" type="email" placeholder="name@example.com*" />
                </Form.Group>
                  </Col>
                  <Col
                    xs={{ span: 3, offset: 0}}
                    lg={{ span: 3, offset: 0}}
                    md={{ span: 3, offset: 0}}
                    sm={{ span: 3, offset: 0}}
                  >
                  <Form.Group>
                  <Form.Control  className="fontContac2" type="text" placeholder="Nombre" />
                  
                  </Form.Group>
                  </Col>
                  <Col
                    xs={{ span: 3, offset: 0}}
                    lg={{ span: 3, offset: 0}}
                    md={{ span: 3, offset: 0}}
                    sm={{ span: 3, offset: 0}}
                  >
                  <Form.Group>
                  <Form.Control className="fontContac2" type="text" placeholder="web*" />
                  
                  </Form.Group>
                  </Col>
                  </Row> 
                  <Row>
                    <Col
                    xs={{ span: 3, offset: 1}}
                    lg={{ span: 3, offset: 1}}
                    md={{ span: 3, offset: 1}}
                    sm={{ span: 3, offset: 1}}
                    >
                    <Button type="submit" className="my-1">
                      Enviar comentario >>
                    </Button>
                    </Col>
                  </Row>             
              </Container> 
              </>
          );
      }
  }
  export default SobreNosotros;