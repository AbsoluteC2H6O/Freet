import React, {Component} from "react";
import './App.css';
import { inject, observer } from "mobx-react";
import { Button, Form, Container, Row, Col, Table} from "react-bootstrap";
import './NavBar2.css';
import './App.css';
import './MenuIdea.css';
//import firebase from './firebase'
//import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
  class Resultado extends Component{
    tituloRef1 = React.createRef();
    subtituloRef1 = React.createRef();
    descripcionRef = React.createRef();
      render(){
        //const { ResultadoStore } = this.props;
          return(
              <>
              <Container fluid>
                {/**<Row>
                <Button
                  className="navBarFreet2"
                  variant="success"resultados
                  onClick={() => {
                    ResultadoStore.borrar();
                  }}
                >
                  Borrar Todos Los Resultados
                </Button>  
                </Row>
                <Row>
                <h1 className="LyricsText">Tenemos {ResultadoStore.numeroResultados} Resultados</h1>
                </Row> */}
                {/**onSubmit={e => {
                  e.preventDefault();
                 ResultadoStore.agregarResultado({
                    titulo1: this.tituloRef1.current.value,
                    subtitulo1: this.subtituloRef1.current.value,
                    descripcion1: this.descripcionRef1.current.value,
                   
                   });
                  e.tanombrerget.reset();
                }} */}
                <Form
                
                >
                  <Form.Group>
                 <Row>
              <Col md={{ span: 4, offset: 0}} 
                  sm={{ span:4, offset: 0}}
              >
              <Form.Label>Titulo: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Titulo de Resultado"
                required
                ref={this.tituloRef}
              />
              </Col>
              <Col md={{ span: 4, offset: 0}} 
                  sm={{ span: 4, offset: 0}}
              >
              <Form.Label>Imagen adjuntar: </Form.Label>
              <Form.Control
                type="text"
                placeholder="subtitulo de Resultado"
                required
                ref={this.subtituloRef}
              />
              </Col>
              <Col md={{ span: 4, offset: 0}} 
                  sm={{ span: 4, offset: 0}}
              >
              <Form.Label>Descripcion: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripcion de Resultado"
                required
                ref={this.descripcionRef}
              />
              </Col>
              </Row>
              <Row>
                <Col
                  md={{ span: 4, offset: 0}} 
                  sm={{ span: 4, offset: 0}}>
                    <Button 
                className="navBarFreet2"
                type="submit"
                variant="success"
              >Publicar</Button>
                  </Col>
                  <Col
                  md={{ span: 4, offset: 0}} 
                  sm={{ span: 4, offset: 0}}>
                    <Button 
                className="navBarFreet2"
                variant="primary"
              >Descargar</Button>
                  </Col>
                
                </Row>
                </Form.Group>
                </Form>
              </Container>
              </>
          );
      }
  }
  //export default inject("ResultadoStore")(observer(Resultado));
  export default Resultado;