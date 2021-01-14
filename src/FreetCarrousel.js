import React, {Component,useState} from 'react';
import IqOption from "./iq-option-logo1.png"
import Etoro from "./1200px-Etoro_logo.svg.png"
import Xm from "./logo_principal_xm.jpg"
import {Carousel,Container,Row,Col,Jumbotron} from 'react-bootstrap';
import './FreetCarrousel.css';
function FreetCarrousel(){
    
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
  	setIndex(selectedIndex);
  };
  return(
  <>
	

	
		<Container 
			fluid
			className="FretCarr"
		>
      <Row>  
        <Col className="fontCarousel" md={{ span: 10, offset: 1}}> 
				 
				<h2 className="text-center text-uppercase LyricsTitleCarrousel">principales brokers regulados</h2>
        		
				</Col>
				<Col md={{ span: 2, offset: 10}}>
				</Col>
      </Row> 
		<Row className="fontCarousel" xs={10} md={10} lg={10}>
			<Col className="fontCarousel2" md={{ span: 1, offset: 0}}>
			</Col>
			<Col md={{ span: 10, offset: 0}}>
				
				<Carousel>                    
				<Carousel.Item interval={1000}>
					<img className="carousel" width={400} height={200}
						src={IqOption} className="img-fluid d-block w-100" alt="broker"
					/>
					<Carousel.Caption>
						{/*<h3>IQ Option</h3>*/}
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className="carousel" width={400} height={200}
						src={Etoro} 
						className="img-fluid d-block w-100" alt="broker"
					/>
					<Carousel.Caption>
					</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="carousel" width={400} height={200}
							src={Xm} className="img-fluid d-block w-100" alt="broker"
						/>
					<Carousel.Caption>
					</Carousel.Caption>
					</Carousel.Item>
					</Carousel>
					
			</Col>
			<Col className="fontCarousel2" md={{ span: 1, offset: 0}}>
				</Col>
		</Row> 
    </Container>
    </>
    );  
}
export default FreetCarrousel;