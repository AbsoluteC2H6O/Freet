import React, {Component} from 'react';
import {Container,Row,Col, Button} from 'react-bootstrap';
import './TextTest.css';
class TextTest extends Component{
    render(){
        return(
            <>
            <Container fluid>
				<Row>
					
				<Col className="cover">
					<p>
						LA FORMA MAS FACIL DE APRENDER LOS MERCADOS
					</p>
				</Col>
				</Row>
				<Row>
				<Col className="cover LyricsTTF"md={{ span: 0, offset: 0}}>
					<Button className="text-center">RESERVA TU CUPO</Button>
				</Col>
				
				</Row>
			</Container>
            </>
        );
    }
}
export default TextTest;