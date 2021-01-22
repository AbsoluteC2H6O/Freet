import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import './Pdf.css';
class Pdf4 extends Component {

    componentDidMount() {
        if(typeof window.orientation !== "undefined"){
            document.getElementById('enlaceDescargarPdf').click();
            window.close();
        }
    }
    
    render() {
        return (
            <Container fluid style={{position: 'absolute', width: '100%', height: '100%',alignItems: 'left'}}>
                <object
                data={require('../Catalogos/TradingPlan.xlsx')}
                type="application/xlsx"
                width="100%"
                height="100%"
                >
                    <br />
                    <a href={require('../Catalogos/TradingPlan.xlsx')} id="enlaceDescargarPdf"
                    download="TradingPlan.xlsx"
                    >Descargar PDF</a>
                </object>
            
            </Container>
        );
    }
}

export default Pdf4;