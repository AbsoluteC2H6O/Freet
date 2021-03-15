import React, {Component, useState, useEffect } from "react";
import sobrenosotros from './sobrenosotros/sobrenosotros.png';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import './App.css';
import './App.css';
import './Content1.css';
import './Manuales.css';
import ContactoF from './Contacto/woman.jpg'

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
//https://www.youtube.com/watch?v=pE-sp2A9j-c

const Contact2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    firebase.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};



class Mail extends Component {

    // inicializamos nuestro estado inicial
    constructor(props) {
      super(props);
      this.state = {
        form: [],
        alert: false,
        alertData: {}
      };
    }
  
    // Mostrar una alerta cuando se envia el formulario
    showAlert(type, message) {
      this.setState({
        alert: true,
        alertData: { type, message }
      });
      setTimeout(() => {
        this.setState({ alert: false });
      }, 4000)
    }
  
    // Con esta funcion borramos todos los elementos del formulario
    resetForm() {
      this.refs.contactForm.reset();
    }
  
    // Funcion para enviar la informacion del formulario a Firebase Database
    sendMessage(e) {
      // Detiene la acción predeterminada del elemento
      e.preventDefault();
      
      // Creamos un objeto con los valores obtenidos de los inputs
      const params = {
        name: this.inputName.value,
        email: this.inputEmail.value,
        city: this.inputCity.value,
        phone: this.inputPhone.value,
        message: this.textAreaMessage.value
      };
      
      // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
      if (params.name && params.email && params.phone && params.phone && params.message) {
        // enviamos nuestro objeto "params" a firebase database
        firebase.database().ref('form').push(params).then(() => {
          // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
          this.showAlert('success', 'Your message was sent successfull');
        }).catch(() => {
          // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error 
          this.showAlert('danger', 'Your message could not be sent');
        });
        // limpiamos nuestro formulario llamando la funcion resetform
        this.resetForm();
      } else {
        // En caso de no llenar los elementos necesario despliega un mensaje de alerta
        this.showAlert('warning', 'Please fill the form');
      };
    }
  
    render() {
      return (
        <div>
          {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
            <div className='container'>
              {this.state.alertData.message}
            </div>
          </div>}
          <div className='container' style={{ padding: `40px 0px` }}>
            <div className='row'>
              <div className='col-sm-4'>
                <h2>Contact Form</h2>
                <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >
                  <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className='form-control' id='name' 
                      placeholder='Name' ref={name => this.inputName = name} 
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Email</label>
                    <input type='email' className='form-control' id='email' 
                      placeholder='Email' ref={email => this.inputEmail = email} 
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='city'>City</label>
                    <select className='form-control' id='city' ref={city => this.inputCity = city}>
                      <option value='México'>México</option>
                      <option value='Guadalajara'>Guadalajara</option>
                      <option value='Monterrey'>Monterrey</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='phone'>Phone</label>
                    <input type='number' className='form-control' id='phone' 
                      placeholder='+52 1' ref={phone => this.inputPhone = phone} 
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea className='form-control' id='message' 
                      rows='3' ref={message => this.textAreaMessage = message}>
                    </textarea>
                  </div>
                  <button type='submit' className='btn btn-primary'>Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
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
                  {/*subir tamano de letra e iconos*/}
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