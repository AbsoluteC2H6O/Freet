import React, {Component} from "react";
import './App.css';
import './Manuales.css';
import calendario from './BANNERMERCADO/Slide5.PNG';
import {Container, Row, Col} from 'react-bootstrap';
/**<script type="text/javascript" src="https://www.tradays.com/c/js/widgets/calendar/widget.js?8"></script>
<div id="economicCalendarWidget"></div>
<script type="text/javascript">
    new economicCalendar({ width: "100%", height: "100%", mode: 1, lang: "es" });
</script> */
/**https://es.tradingview.com/widget/economic-calendar/ */
class GraficoCalendario extends Component{
 
  constructor(props) {
    super(props);
    this._ref = React.createRef();
    
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = false;
    script.id = "economicCalendarWidget";
    
    const script2 = document.createElement("script");
    script2.innerHTML = `new economicCalendar({ width: "100%", height: "1000", mode: 1, lang: "es" });`;
    
    script.src = "https://www.tradays.com/c/js/widgets/calendar/widget.js?8";
    script2.async = true;
    
    this._ref.current.appendChild(script2);

    this._ref.current.appendChild(script);

    console.log("Print my shit", this._ref.current);
  }
	
  render() {
    return (
      <>
      <div id="economicCalendarWidget" ref={this._ref}></div>
     
      </>
         
    );
  }
}
  class CalendarioEconomico extends Component{
      render(){
      
          return(
              <>
               <img 
                src={calendario} 
                className="img-fluid" 
                alt="calendario" 
                style={{width: '100%', display: 'block',
                margin: '0 auto'}}>
                </img>
                <Row>
                <Col md={{ span: 10, offset: 1}}
                  sm={{ span: 10, offset: 1}}
                  lg={{ span: 10, offset: 1}}
                  xl={{ span: 10, offset: 1}}
                  >
                    <br/>
                    <GraficoCalendario/>
                    <br/>
                    </Col>
                </Row>
               
              
              </>
          );
      }
  }
  export default CalendarioEconomico;