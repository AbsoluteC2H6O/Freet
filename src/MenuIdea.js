import React,{Component} from "react";
import { inject, observer } from "mobx-react";
import { Button, Form, Container, Row, Col} from "react-bootstrap";
import './NavBar2.css';
import './App.css';
import './MenuIdea.css';
//import firebase from './firebase'
//import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";


          
class FileUploadNew1 extends Component{
  constructor(props){
    super(props)
    this.state ={
      uploadValue: 0,
      picture: null
     
    };
    this.handleupload = this.handleupload.bind(this);
  }

  handleupload (event){
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`IdeaImagenes/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_change', snapshot=>{
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
      this.setState({
        uploadValue: percentage
      })
    }, error =>{
      console.log(error.message)
    }, () =>{
      this.setState({
        uploadValue: 100,
        picture: task.snapshot.downloadURL
      });
      });
  }
  render(){
    return(
      <>
      <Row>
         <progress value={this.state.uploadValue} max="100">
        {this.state.uploadValue} %
      </progress>
      </Row>
      <Row>
        <br/>
      <input type='file' onChange={this.handleupload}/>
      </Row>
     
      <Row>
      <img width="520" src={this.state.picture} alt=""/>
      
      </Row>
     
      </>
    );
  }
}



class FileUpload extends Component{
  constructor(){
    super()
    this.state ={
      uploadValue: 0,
      picture: []
      //picture: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event){
    const file = event.target.files[0];
    //CatalogosDescargables
    const storageRef = firebase.storage().ref(`IdeaImagenes/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_change', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue: percentage
      })
    }, (error) =>{
      this.setState({
        message: `Ha ocurrido un error: ${error.message}`
      })
    }, () =>{
      this.setState({
        message: 'Archivo subido',
        picture: task.snapshot.downloadURL,
        uploadValue: 100,
        
      });
   console.log(this.state.picture) });
  }
  
  render(){
    return(
      <>
      <Row>
        <br/>
      <progress value={this.state.uploadValue} max="100"></progress>
      <br/>
      </Row>
      <Row>
      <input type='file' onChange={this.handleChange}/>
      </Row>

      <Row>
      {this.state.message}
      <br/>
      {this.state.picture}
      <img width="520" src={this.state.picture} alt=""/>
        
      </Row>
     
      </>
    );
  }
}
class Menu extends React.Component {

  tituloRef = React.createRef();
  subtituloRef = React.createRef();
  imagenIdeaRef = React.createRef();
  noticiasPositivasRef = React.createRef();
  noticiasNegativasRef = React.createRef();
  
  render() {
    const { IdeaStore } = this.props;

    return (
      <Container fluid>
      <Row>
      <Button
          className="navBarFreet2"
          variant="success"
          onClick={() => {
            IdeaStore.borrar();
          }}
        >
          Borrar Todas Las Ideas
        </Button>
      </Row>
        <Row>
        <h1 className="LyricsText">Tenemos {IdeaStore.numeroIdeas} Ideas</h1>
        </Row>
        
        <Form
          onSubmit={e => {
            e.preventDefault();
            IdeaStore.agregarIdea({
              titulo: this.tituloRef.current.value,
              subtitulo: this.subtituloRef.current.value,
              imagenIdea: this.imagenIdeaRef.current.value,
              noticiasPositivas: this.noticiasPositivasRef.current.value,
              noticiasNegativas: this.noticiasNegativasRef.current.value
            });
            e.target.reset();
          }}
        >
          <Form.Group>
          <Row>
          <Col md={{ span: 4, offset: 0}} 
              sm={{ span: 4, offset: 0}}
          >
          <Form.Label>Titulo: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Titulo de Idea"
            required
            ref={this.tituloRef}
          />
          </Col>
          <Col md={{ span: 4, offset: 0}} 
              sm={{ span: 4, offset: 0}}
          >
          <Form.Label>Subtitulo: </Form.Label>
          <Form.Control
            type="text"
            placeholder="subtitulo de Idea"
            required
            ref={this.subtituloRef}
          />
          </Col>
          
          
          
          <Col md={{ span: 12, offset: 0}} 
              sm={{ span: 12, offset: 0}}
          >
          
         {/** <FileUploadNew1/> */}

				  <FileUpload/>
          {/**<FileUploadNew onUpload={this.handleUpload}/> */}
          {/**{
            this.state.pictures.map(picture =>(
              <div>
                <img src={picture.image}/>
                <br/>
                <img src={picture.photoURL} alt={picture.displayName}/>
                <span>{picture.displayName}</span>
              </div>
            ))
          }*/
          }
          <Form.Label>Imagen de Idea: </Form.Label>
          {/**
           * 
           *  
           * 
           */}
         <Form.Control
            type="text"
            placeholder="Url de Idea"
            required
            ref={this.imagenIdeaRef}
          />
          </Col>
          <Col md={{ span: 12, offset: 0}} 
              sm={{ span: 12, offset: 0}}
          >
          <Form.Label>imagen Idea: </Form.Label>
          <Form.File 
            id="IdeaImags" 
            label="Adjuntar Archivo"
            data-browse="Imagen"
            custom
          />
          {
            /**  <Button 
            className="navBarFreet2"
            type="submit"
            variant="success"
          >Agregar</Button>*/
          }
         
          </Col>

          
          <Row>
            <Col 
            md={{ span: 12, offset: 4}} 
            sm={{ span: 12, offset: 0}}
            >
            <Form.Label
            
            >
              <h1 className="LyricsText text-center text-uppercase">
              Contenido
              </h1> 
            </Form.Label>
            </Col>
            
            <Col
            md={{ span: 4, offset: 0}} 
            sm={{ span: 4, offset: 0}}>
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Analisis Fundamental</Form.Label>
            <Form.Control as="select">
              <option>Diario</option>
              <option>Semanal</option>
              <option>Mensual</option>
            </Form.Control>
            </Form.Group>
            </Col>
            <Col
            md={{ span: 4, offset: 0}} 
            sm={{ span: 4, offset: 0}}>
            <Form.Label>Noticias Positivas: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Texto"
              required
              ref={this.noticiasPositivasRef}
            />
            </Col>
            <Col
            md={{ span: 4, offset: 0}} 
            sm={{ span: 4, offset: 0}}>
            <Form.Label>Noticias Negativas: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Texto"
              required
              ref={this.noticiasNegativasRef}
            />
            </Col>
          </Row>
        </Row>
        <Row>  
          <Col
            md={{ span: 3, offset: 0}} 
            sm={{ span: 3, offset: 0}}>
            </Col>
            <h1> </h1>
            <Col
            md={{ span: 3, offset: 0}} 
            sm={{ span: 3, offset: 0}}>

            <Form.Label><h1 className="LyricsText">GRAFICO</h1></Form.Label>
            <Form.Control as="select">
              <option>Diario</option>
              <option>Semanal</option>
              <option>Mensual</option>
            </Form.Control> 
            </Col>
            <Col
            md={{ span: 3, offset: 0}} 
            sm={{ span: 3, offset: 0}}>
            
            <Form.Label><h1 className="LyricsText">NOMBRE</h1></Form.Label>
            <Form.Control as="select">
              <option>Diario</option>
              <option>Semanal</option>
              <option>Mensual</option>
            </Form.Control>
            </Col>
            <Col
            md={{ span: 3, offset: 0}} 
            sm={{ span: 3, offset: 0}}>
            <Form.Label><h1 className="LyricsText">PERIODO</h1></Form.Label>
            <Form.Control as="select">
              <option>Diario</option>
              <option>Semanal</option>
              <option>Mensual</option>
            </Form.Control>
            
            </Col>
          </Row>


          <Row>
          <Col
            md={{ span: 3, offset: 0}} 
            sm={{ span: 3, offset: 0}}>
            <h1 className="LyricsText">*Tipo de tendencia: </h1>
            </Col>
            
            <Col
            md={{ span: 3, offset: 0}} 
            sm={{ span: 3, offset: 0}}>
              
            </Col>
            <Col
            md={{ span: 3, offset: 0}} 
            sm={{ span: 3, offset: 0}}>
              
            </Col>
            <Col
            md={{ span: 3, offset: 0}} 
            sm={{ span: 3, offset: 0}}>
              
            </Col>
          </Row>

          <Row> 
            <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
              <h1 className="LyricsText">*Patron de tendencia L: </h1>
              </Col>
              
              <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
                
              </Col>
              <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
                
              </Col>
              <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
                
              </Col>
            </Row>

            <Row>
            <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
              <h1 className="LyricsText">*Tipo de Vela J: </h1>
              </Col>
              
              <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
                
              </Col>
              <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
                
              </Col>
              <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
                
              </Col>
            </Row>

            <Row>
            <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
              <h1 className="LyricsText">*Patron de vela J: </h1>
              </Col>
              
              <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
                
              </Col>
              <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
                
              </Col>
              <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
                
              </Col>
            </Row>
            <Row>
              <Form.Label>
              <h1 className="LyricsText">Analisis tecnico </h1> 
              </Form.Label>
            </Row>
            <Row>
            <Form.Label>
            <h1 className="LyricsText">RSI: </h1></Form.Label>
            </Row>
            <Row>
            <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
              <Form.Control as="select">
              <option>Compra</option>
              <option>Venta</option>
              <option>Sobre Compra</option>
              <option>Sobre Venta</option>
            </Form.Control>
              </Col>
              <Col
              md={{ span: 3, offset: 0}} 
              sm={{ span: 3, offset: 0}}>
                <Form.Control as="select">
              <option>1H</option>
              <option>4h</option>
              <option>12H</option>
              <option>1D</option>
              <option>1S</option>
              <option>1M</option>
              <option>1A</option>
            </Form.Control>
              </Col>
            </Row>
            <Row>
            <Form.Label>
            <h1 className="LyricsText">
              Cotizacion: 
              </h1></Form.Label>
            </Row>
            <Row>
            <Col
              md={{ span: 6, offset: 0}} 
              sm={{ span: 6, offset: 0}}>
              
             <Form.Control as="select">
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </Form.Control>
              </Col>
            </Row>
            <Row>
            <Form.Label>
            <h1 className="LyricsText">
              Volatilidad: 
              </h1></Form.Label>
            </Row>
            <Row>
            <Col
              md={{ span: 6, offset: 0}} 
              sm={{ span: 6, offset: 0}}>
               
             <Form.Control as="select">
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </Form.Control>  
              </Col>
            </Row>
            <Row>
            <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
                
              </Col>
              <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
                
              </Col>
              <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
                
              </Col>
            </Row>
            
            <Row>
            <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
             
            <h1 className="LyricsText">
              Correlacion: 
              </h1>  
              </Col>
              <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
               <h1 className="LyricsText">
              Positiva: 
              </h1> 
              </Col>
              <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
              <h1 className="LyricsText">
              Negativa: 
              </h1>  
              </Col>
            </Row>
            
            <Row>
            <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
             
            <h1 className="LyricsText">
               
              </h1>  
              </Col>
              <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
               <Form.Control
              type="text"
              placeholder="Texto"
             
            />
              </Col>
              <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
              <Form.Control
              type="text"
              placeholder="Texto"
             
            />
              </Col>
            </Row>
            <Row>
            <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
             
            <h1 className="LyricsText">
               
              </h1>  
              </Col>
              <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
               <Form.Control
              type="text"
              placeholder="Texto"
             
            />
              </Col>
              <Col
              md={{ span: 3, offset: 1}} 
              sm={{ span: 3, offset: 1}}>
              <Form.Control
              type="text"
              placeholder="Texto"
             
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
       
        <ul>
         <Row>
          {IdeaStore.ideas.map(idea => (
             <Col xs={4} sm={4} md={4}
            >
            <li key={idea.nombre}>
              <h2 className="LyricsText">{idea.titulo}</h2>
              <h4 className="LyricsText">{idea.subtitulo}</h4>
               <div className="menuIdeaLograda rotate">
               <div className="rotate2">
               <img
                className="LyricsText"
                src={idea.imagenIdea}
                alt={idea.titulo}
                style={{width: '100%'}}

               />
              
               </div>
              </div>
              <h2>Noticias Positivas: {idea.noticiasPositivas}</h2>
              <h2>Noticias Negativas: {idea.noticiasNegativas}</h2>
            </li>
            </Col>
          ))}
          </Row>
        </ul>
      </Container>
    );
  }
}
export default inject("IdeaStore")(observer(Menu));


/**
 * 
 * 
 *  <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Example select</Form.Label>
        <Form.Control as="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </Form.Control>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form.Group>
 */
/**
 





 * <ul>
          {IdeaStore.ideas.map(idea => (
            <li key={idea.nombre}>
              <h2>{idea.nombre}</h2>
              <img
                src={idea.foto}
                alt={idea.nombre}
                style={{ maxWidth: "150px" }}
              />
            </li>
          ))}
        </ul>
 <Col md={{ span: 3, offset: 1}} 
              sm={{ span: 2, offset: 1}}
          > 
 * 
 */