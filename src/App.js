import React, {Component} from "react";
import './NavBar';
import './App.css';
import Logo from './Logo';
import { Helmet } from 'react-helmet';
import {Container,Row,Col} from 'react-bootstrap';
import FreetCarrousel from './FreetCarrousel';
import WidgetsTradingView from './WidgetsTradingView';
import ComponentPart1 from "./ComponentPart1";
import TextTest from './TextTest';
import Footer from './Footer';
//import firebase from './firebase';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import WhatsappWidget from './WhatsappWidget';
import TelegramWidget from "./TelegramWidget";
import LoginGoogle from './LoginGoogle';
//import firebase from "firebase/app";
//import "firebase/firestore";
//import "firebase/storage";
import FileUploadNew from './MenuIdea';
import firebase from "firebase/app";
//import "firebase/firestore";
import "firebase/storage";
import { extend } from "jquery";
import Graficoavanzado from "./Graficoavanzado";
//import{ useFirebaseApp} from "reactfire";
import Component0 from './Component0';

//import firebaseConf from './firebase';
class FileImage extends Component{
	constructor(props){
	super(props);
		this.state= {
			user: null,
			pictures: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
	}
	handleUpload (event){
		const file = event.target.files[0];
		//CatalogosDescargables
		const storageRef = firebase.storage().ref(`IdeaImagenes/${file.name}`);
		const task = storageRef.put(file);
	
		task.on('state_change', (snapshot) => {
		  let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		  this.setState({
			  //name: 'carlos',
			uploadValue: percentage
		  })
		}, (error) =>{
		  this.setState({
			message: `Ha ocurrido un error: ${error.message}`
		  })
		}, () =>{
		  const record = {
			photoURL: this.state.user.photoURL,
			displayName: this.state.user.displayName,
			image: task.snapshot.donwloadURL
	
		  };

		  const dbRef = firebase.database().ref('IdeaImagenes');
		  const newPicture = dbRef.push();
		  newPicture.set(record);
		});
	  }

	  componentWillMount (){

		//const nameRef = firebase.database().ref().child('object').child('name')
//lisener
		//nameRef.on('Value', (snapshot) =>{
		//		this.setState({
		//			name:snapshot.val()
		//		})
		//	})
		//creamos en firebase un object con carlos e hijo nametiempo real database
        firebase.database().ref('pictures').on('child_added', snapshot =>{
			this.setState({
				//push es un metodo no inmutable
				//no modificar el original
				pictures: this.state.pictures.concat(snapshot.val())
			});
		});
    }
	render(){
		return(
			<>
			
			</>
		);
	}
}
class Header extends Component{
	render(){
		return(
			<>
			<Container fluid>
			<Row>
				<Col
				md={{ span: 6, offset: 0}} 
				sm={{ span: 6, offset: 0}}
				lg={{ span: 6, offset: 0}} 
				xs={{ span: 6, offset:0}}
				>
				<Logo/>	
				</Col>

				<Col
				md={{ span: 2, offset: 4}} 
				sm={{ span: 4, offset: 2}}
				lg={{ span: 2, offset: 4}} 
				xs={{ span: 4, offset:2}}
				>
				<LoginGoogle/>
				</Col>
			</Row>
			</Container>
			</>
		);
	}
}
class Freet extends Component{
	
  render(){
	//const firebase = useFirebaseApp();
	//console.log(firebase);
    return( 
    	<>
			<Container 
				fluid 
				className="container-fluid FreetPage pageHeader"
			>
				
				{/**<img
               src="gs://freet-55de4.appspot.com/IdeaImagenes/Picture2.png"
               />
				 */}
				
			<Header/>
			<ComponentPart1/>
			<Footer/>
			<TelegramWidget/>
			<WhatsappWidget/>	
			
			</Container>
      </>
    );
  }
}



class App extends Component {

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

class App1 extends Component{

	state={
		data:[],
		modalInsertar: false,
		modalEditar: false,
		form:{
			mercado: '',
			idioma: '',
			pais: '',
			financieros: '',
			acciones: ''

		},
		id:0
	};
	peticionGet=()=>{
		firebase.child("mercados").on("value",mercado =>{
			if(mercado.val()!==null){
				this.setState({...this.state.data, data: mercado.val()});
			}else{
				this.setState({data: []});
			}
			
		});
	};
	peticionPost=()=>{
		firebase.child("mercados").push(this.state.form,
			error=>{
				if(error)console.log(error)
			});
			this.setState({modalInsertar: false});
	}
	
	peticionPut=()=>{
		firebase.child(`mercados/${this.state.id}`).set(
		  this.state.form,
		  error=>{
			if(error)console.log(error)
		  });
		  this.setState({modalEditar: false});
	  }
	
	  peticionDelete=()=>{
		if(window.confirm(`Estás seguro que deseas eliminar el canal ${this.state.form && this.state.form.canal}?`))
		{
		firebase.child(`mercados/${this.state.id}`).remove(
		  error=>{
			if(error)console.log(error)
		  });
		}
	  }
	handleChange=e=>{
		this.setState({form:{
			...this.state.form,
			[e.target.name]: e.target.value
		}})
		console.log(this.state.form);
	}
	seleccionarMercado=async(mercado, id, caso)=>{

		await this.setState({form: mercado, id: id});
	
		(caso==="Editar")?this.setState({modalEditar: true}):
		this.peticionDelete()
	
	  }
	componentDidMount(){
		this.peticionGet();
	}
	render(){
		return (
			<>
			<div className="App">
				<br/>
				<button className="btn btn-success" onClick={()=>this.setState({modalInsertar:true})}>
					Insertar
				</button>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Mercado </th>
							<th>Idioma</th>
							<th>Pais</th>
							<th>Financieros</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						
						{Object.keys(this.state.data).map(i=>{
							//console.log(i);
							return<tr key={i}>
								<td>{this.state.data[i].mercado}</td>
								<td>{this.state.data[i].idioma}</td>
								<td>{this.state.data[i].pais}</td>
								<td>{this.state.data[i].financieros}</td>
								<td>{this.state.data[i].acciones}</td>
								<button className="btn btn-primary" onClick={()=>this.seleccionarMercado(this.state.data[i], i, 'Editar')}>Editar</button> {" "}
								<button className="btn btn-primary" onClick={()=>this.seleccionarMercado(this.state.data[i], i, 'Eliminar')}>
									Eliminar
								</button>
							</tr>
						})}
					</tbody>

				</table>

				<Modal isOpen={this.state.modalInsertar}>
					<ModalHeader>Insertar registro</ModalHeader>
					<ModalBody>
					<div className="form-group">
						<label>Mercado: </label>
						<br/>
						<input type="text" className="form-control" name="mercado" onChange={this.handleChange}>

						</input>
						<br/>

						<label>Pais: </label>
						<br/>
						<input type="text" className="form-control" name="pais" onChange={this.handleChange}>

						</input>
						<br/>

						<label>Idioma: </label>
						<br/>
						<input type="text" className="form-control" name="idioma" onChange={this.handleChange}>

						</input>
						<br/>

						<label>Financieros: </label>
						<br/>
						<input type="text" className="form-control" name="financieros" onChange={this.handleChange}>

						</input>
						<br/>

						<label>Acciones: </label>
						<br/>
						<input type="text" className="form-control" name="acciones" onChange={this.handleChange}>

						</input>
						<br/>

					</div>

					</ModalBody>
					<ModalFooter>
						<button className="btn btn-primary" onClick={()=>this.peticionPost()}>Insertar</button>{" "}
						<button className="btn btn-danger" onClick={()=>this.setState({modalInsertar: false})}>Cancelar</button>
					</ModalFooter>
				</Modal>

				<Modal isOpen={this.state.modalEditar}>
				<ModalHeader>Editar Registro</ModalHeader>
				<ModalBody>
					<div className="form-group">
					<label>Canal: </label>
					<br />
					<input type="text" className="form-control" name="canal" onChange={this.handleChange} value={this.state.form && this.state.form.mercado}/>
					<br />
					<label>País: </label>
					<br />
					<input type="text" className="form-control" name="pais" onChange={this.handleChange} value={this.state.form && this.state.form.pais}/>
					<br />
					<label>Idioma: </label>
					<br />
					<input type="text" className="form-control" name="idioma" onChange={this.handleChange} value={this.state.form && this.state.form.idioma}/>
					<br />
					<label>Cantidad de Financieros: </label>
					<br />
					<input type="text" className="form-control" name="financieros" onChange={this.handleChange} value={this.state.form && this.state.form.financieros}/>
					<label>Cantidad de Acciones (millones): </label>
					<br />
					<input type="text" className="form-control" name="acciones" onChange={this.handleChange} value={this.state.form && this.state.form.acciones}/>
					
					</div>
				</ModalBody>
				<ModalFooter>
					<button className="btn btn-primary" onClick={()=>this.peticionPut()}>Editar</button>{"   "}
					<button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
				</ModalFooter>
				</Modal>
			</div>

			</>
		);
	}
}

export default Freet;
/**
 

 */