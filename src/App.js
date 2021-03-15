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
//import FileUploadNew from './FileUploadNew';
import firebase from "firebase/app";
//import "firebase/firestore";
import "firebase/storage";
import { extend } from "jquery";
import Graficoavanzado from "./Graficoavanzado";
//import{ useFirebaseApp} from "reactfire";
import Component0 from './Component0';

//import logotest from './t3chfy_cmyk.png';
class FileUploadNew extends Component {
	constructor () {
	  super();
	  this.state = {
		uploadValue: 0
	  };
	}
  
	render () {
	  return (
		<div>
		  <progress value={this.state.uploadValue} max='100'>
			{this.state.uploadValue} %
		  </progress>
		  <br/>
		  <input type="file" onChange={this.props.onUpload} />
		  <br/>
		  <img width="320" src={this.state.picture} alt=""/>
		</div>
	  )
	}
  }
  
class App extends Component {
	constructor () {
	  super();
	  this.state = {
		user: null,
		pictures: []
	  };
  
	  this.handleAuth = this.handleAuth.bind(this);
	  this.handleUpload = this.handleUpload.bind(this);
	}
  
	componentWillMount () {
	  // Cada vez que el método 'onAuthStateChanged' se dispara, recibe un objeto (user)
	  // Lo que hacemos es actualizar el estado con el contenido de ese objeto.
	  // Si el usuario se ha autenticado, el objeto tiene información.
	  // Si no, el usuario es 'null'
	  firebase.auth().onAuthStateChanged(user => {
		this.setState({ user });
		console.log(`${[user]} SE HA SUBIDO`);
	  });
  
	  firebase.database().ref('pictures').on('child_added', snapshot => {
		this.setState({
		  pictures: this.state.pictures.concat(snapshot.val())
		  
		});
	//console.log(`${[pictures]} SE HA SUBIDO`);
	  });
	}
  
	handleAuth () {
	  const provider = new firebase.auth.GoogleAuthProvider();
  
	  firebase.auth().signInWithPopup(provider)
		.then(result => console.log(`${result.user.email} ha iniciado sesión`))
		.catch(error => console.log(`Error ${error.code}: ${error.message}`));
	}
  
	handleLogout () {
	  firebase.auth().signOut()
		.then(result => console.log(`${result.user.email} ha iniciado sesión`))
		.catch(error => console.log(`Error ${error.code}: ${error.message}`));
	}
  
	handleUpload (event) {
	  const file = event.target.files[0];
	  const storageRef = firebase.storage().ref(`IdeaImagenes/${file.name}`);
	  const task = storageRef.put(file);
  
	  // Listener que se ocupa del estado de la carga del fichero
	  task.on('state_changed', snapshot => {
		// Calculamos el porcentaje de tamaño transferido y actualizamos
		// el estado del componente con el valor
		let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		this.setState({
		  uploadValue: percentage
		})
	  }, error => {
		// Ocurre un error
		console.error(error.message);
	  }, () => {
		// Subida completada
		// Obtenemos la URL del fichero almacenado en Firebase storage
		// Obtenemos la referencia a nuestra base de datos 'pictures'
		// Creamos un nuevo registro en ella
		// Guardamos la URL del enlace en la DB
		const record = {
		  photoURL: this.state.user.photoURL,
		  displayName: this.state.user.displayName,
		  image: task.snapshot.ref.getDownloadURL().then((downloadURL) =>{
			console.log('File available at', downloadURL);
			
		  }),
		}
		console.log('File available at', record.image);
		const dbRef = firebase.database().ref('pictures');
		const newPicture = dbRef.push();
		newPicture.set(record);
	  });
	}
  
	renderLoginButton () {
	  if (!this.state.user) {
		return (
		  <button onClick={this.handleAuth} className="App-btn">
			Iniciar sesión con Google
		  </button>
		);
	  } else  {
		return (
		  <div className="App-intro">
			<p className="App-intro">¡Hola, { this.state.user.displayName }!</p>
  
			<button onClick={this.handleLogout} className="App-btn">
			  Salir
			</button>
  
			<FileUploadNew onUpload={ this.handleUpload }/>
  
			{
			  this.state.pictures.map(picture => (
				<div className="App-card">
				  <figure className="App-card-image">
					<img width="320" src={picture.image} />
					{/**<figcaption className="App-card-footer">
					  <img className="App-card-avatar" src={picture.photoURL} alt={picture.displayName} />
					  <span className="App-card-name">{picture.displayName}</span>
					</figcaption> */}
				  </figure>
				</div>
			  )).reverse()
			}
  
		  </div>
  
		);
	  }
	}
  
	render() {
	  return (
		<div className="App">
		  <div className="App-header">
			
			<h2>T3chfest 2017</h2>
		  </div>
		  { this.renderLoginButton() }
		</div>
	  );
	}
  }
  
  
  
class FileUploadNew2 extends Component{
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
	  }, function() {
		  task.snapshot.ref.getDownloadURL().then(function(downloadURL)
		  {
			this.setState({
			  uploadValue: 100,
			  picture:  downloadURL
			});
			console.log('File available at', downloadURL);
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
  
//import firebaseConf from './firebase';
class FileUpload2 extends Component{
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
	  const uploadTask = storageRef.put(file);
  
	  uploadTask.on('state_change', (snapshot) => {
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
		  uploadValue: 100,
		 // picture: uploadTask.snapshot.downloadURL
		  picture: uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
			console.log('File available at', downloadURL);})
		  
		  
		  
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
class FileImage extends Component{
	constructor(props){
	super(props);
		this.state= {
			user: null,
			pictures: []
		};
		//this.handleChange = this.handleChange.bind(this);
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
	  }, function() {
		  task.snapshot.ref.getDownloadURL().then(function(downloadURL)
		  {
			this.setState({
			  uploadValue: 100,
			  picture:  downloadURL
			});
			console.log('File available at', downloadURL);
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
			{/**<a className="LyricsText" href="gs://freet-55de4.appspot.com/CatalogosDescargables/CatPatronG.pdf" id="enlaceDescargarPdf" download> enlace</a>
              */}       
			<ComponentPart1/>
			<FileImage/>
			<Footer/>
			<TelegramWidget/>
			<WhatsappWidget/>	
			
			</Container>
      </>
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