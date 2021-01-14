import React, {Component} from 'react';
import './Content1.css';
import {Container,Row,Col, Button} from 'react-bootstrap';
import './Content1.css';
import './App.css';
//<h1 className="col-sm-3 text-danger">hola</h1>
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
class Content1 extends Component{
  render(){
		return(
			<>
			<Container fluid>
				<Row>
					
				<Col className="cover Passion image-content1">
					<p>
						LA FORMA MAS FACIL DE APRENDER LOS MERCADOS
					</p>
					<pre>
					</pre>
					<pre>
					</pre>
					<pre>
					</pre>
					<pre>
					</pre>
				</Col>
				</Row>
				
				
			
				<Row className="cover LyricsText justify-content-center text-center" md={{ span: 0, offset: 0}}>
				
					<Button className="text-center">RESERVA TU CUPO</Button>
				
				</Row>
			</Container>
			</>
		);
	} 
  
}
export default Content1;