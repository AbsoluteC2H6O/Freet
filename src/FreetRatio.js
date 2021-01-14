import React, {Component} from 'react';
import {CircularProgressbarWithChildren, CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Container,Row,Col} from 'react-bootstrap';
import './FreetRatio.css';
import './App.css';
/*Use import { CircularProgressbarWithChildren } in order to put arbitrary JSX inside the component.
Use import { buildStyles } to make it easier to customize styles.
Use props.minValue and props.maxValue to specify a range other than 0-100.


<Container fluid>
          <section id="circleBar">
             <h1>
               semana
             </h1>
             <div className="container">
               <div className="row">
                 <div className="col-md-3">
                  <div className="round" data-value="0.87"
                  data-size="200" data-thickness="12">
                    <strong></strong>
                      <span><i className="fa fa-html5"></i></span>
                      50%
                  </div>
                 </div>
               </div>
             </div>
             <button className="btn" onClick="Circlle('.round');">
               Recargar
             </button>
           </section>
           </Container>

*/
class FreetRatio extends Component{
    constructor(props){
        super(props)
           
        this.state = {
            value: 0.66,
            value2: 0.76,
            value3: 0.50,
            value4: 0.88
        };
    }
   
    render(){
        const value1 = 0.2;
        const value2 = 0.76;
        const value3 = 0.50;
        const value4 = 0.88;
       return(
           <>
           <Container fluid>
             <Row>
               <pre>


               </pre>
             </Row>
           </Container>
           <Container fluid>
             <Row>
              <Col md={{ span: 3, offset: 1}} 
                    sm={{ span: 5, offset: 1}}
                >
               <h1 className="justify-content-center LyricsRatio text-center 
               text-uppercase ratioText">dia</h1>
               <div className="justify-content-center text-center">
                {/*50% por encima verde y por debajo rojo */}
               <CircularProgressbar 
                  value={value1*100} 
                  //minValue={66}
                  //maxValue={100} 
                  text={`${value1 * 100}%`}
                  className="justify-content-center Neutro-ExtraBold" 
                  strokeWidth={15}
                  //circleRatio="0"
                  //counterClockwise="true"
                    styles={buildStyles({
                      //textColor: ,
                    // pathColor: "turquoise",
                    // trailColor: "gold",
                       textSize: "15px",
                    // rotation: 0.5 + (1 - value1 / 100) / 2
                       strokeLinecap: "butt",
                      // Rotation of path and trail, in number of turns (0-1)
                      //  rotation: 0.25,
                    
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        //strokeLinecap: 'butt',
                    
                        // Text size
                      // textSize: '16px',
                    
                        // How long animation takes to go from one percentage to another, in seconds
                      // pathTransitionDuration: 0.5,
                    
                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',
                    
                        // Colors
                      //  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                      //  textColor: '#f88',
                      trailColor: 'red',
                      //  backgroundColor: '#3e98c7',
                    })}

                  /> 
                   <pre> </pre>
                   
                  </div>
                  <Row className="LyricsText text-left Senal">
                    <h1 className="LyricsText text-left">senales logradas: 70</h1>    
                  </Row>
                  <Row className="LyricsText text-left Senal">
                  <h1 className="LyricsText">senales invalidas: 10</h1>
                  </Row>
                  <Row className="LyricsText text-left Senal">
                  <h1 className="LyricsText text-left">total: 80</h1>
                  </Row> 
                </Col>
               <Col md={{ span: 3, offset: 1}} 
                    sm={{ span: 5, offset: 1}}
                >
                <h1 className="justify-content-center LyricsRatio text-center 
               text-uppercase ratioText">semana</h1>
                <div className="justify-content-center LyricsText text-center">
                    <CircularProgressbar 
                    value={value2*100}
                    text={`${value2 * 100}%`}
                    className="justify-content-center Neutro-ExtraBold" 
                    strokeWidth={15}
                    styles={buildStyles({
                      textColor: "red",
                      trailColor: 'red',
                      textSize: "15px",
                      strokeLinecap: "butt"
                    
                    })}
                />
                <pre> </pre>
                </div>
                <Row className="LyricsText text-left Senal">
                    <h1 className="LyricsText text-left">senales logradas: 70</h1>    
                  </Row>
                  <Row className="LyricsText text-left Senal">
                  <h1 className="LyricsText">senales invalidas: 10</h1>
                  </Row>
                  <Row className="LyricsText text-left Senal">
                  <h1 className="LyricsText text-left">total: 80</h1>
                  </Row>
                
                </Col> 
                <Col md={{ span: 3, offset: 1}} 
                    sm={{ span: 5, offset: 1}}
                >
                 <h1 className="justify-content-center LyricsRatio text-center 
               text-uppercase ratioText">mes</h1>
                 <div className="justify-contet-center LyricsText text-center">
                 <CircularProgressbar 
                    value={value3*100}
                    text={`${value3 * 100}%`}
                    className="justify-content-center Neutro-ExtraBold" 
                    strokeWidth={15}
                    styles={buildStyles({
                      textColor: "red",
                      trailColor: 'red',
                      textSize: "15px",
                      strokeLinecap: "butt"
                    
                    })}
                />
                
                {/*fondo gris en cada ratio mas espaco en blanco , 
                  senales logradas e invalidas 
                  color verde o rojo segun su valor.
                */}
                 <pre> </pre>
                    </div>
                    <Row className="LyricsText text-left Senal">
                    <h1 className="LyricsText text-left">senales logradas: 70</h1>    
                  </Row>
                  <Row className="LyricsText text-left Senal">
                  <h1 className="LyricsText">senales invalidas: 10</h1>
                  </Row>
                  <Row className="LyricsText text-left Senal">
                  <h1 className="LyricsText text-left">total: 80</h1>
                  </Row>   
                </Col>    
             </Row>
           </Container>
           <Container fluid>
           <Row>
              <pre>

              </pre>
            </Row>
            <Row className="justify-content-center text-center">
            <Col md={{ span: 3, offset: 1}} 
                    sm={{ span: 5, offset: 1}}
                ></Col>
                <Col md={{ span: 3, offset: 1}} 
                    sm={{ span: 5, offset: 1}}
                >
                 <h1 className="justify-content-center LyricsRatio text-center 
               text-uppercase ratioText">promedio</h1>
              <div >
              <CircularProgressbar 
                    value={value4*100}
                    text={`${value4 * 100}%`}
                    className="justify-content-center Neutro-ExtraBold" 
                    strokeWidth={15}
                    styles={buildStyles({
                      textColor: "red",
                      trailColor: 'red',
                      textSize: "15px",
                      strokeLinecap: "butt"
                    
                    })}
                />
             
                  <pre> </pre>
              </div>
              <Row className="LyricsText text-left Senal">
                    <h1 className="LyricsText text-left">senales logradas: 70</h1>    
                  </Row>
                  <Row className="LyricsText text-left Senal">
                  <h1 className="LyricsText">senales invalidas: 10</h1>
                  </Row>
                  <Row className="LyricsText text-left Senal">
                  <h1 className="LyricsText text-left">total: 80</h1>
                  </Row>
                </Col>
                <Col md={{ span: 3, offset: 1}} 
                    sm={{ span: 5, offset: 1}}
                ></Col>
             </Row>
           </Container>
           </>
       ); 
    }
}

export default FreetRatio;
