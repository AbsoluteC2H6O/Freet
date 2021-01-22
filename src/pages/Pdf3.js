import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import './Pdf.css';
class Pdf3 extends Component {

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
                data={require('../Catalogos/CatindicadorT.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                    <br />
                    <a href={require('../Catalogos/CatindicadorT.pdf')} id="enlaceDescargarPdf"
                    download="CatindicadorT.pdf"
                    >Descargar PDF</a>
                </object>
            
            </Container>
        );
    }
}

export default Pdf3;