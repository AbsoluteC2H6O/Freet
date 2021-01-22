import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import './Pdf.css';
class Pdf1 extends Component {

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
                className="pdfName"
                data={require('../Catalogos/CatPatronG.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                    <br />
                    <a href={require('../Catalogos/CatPatronG.pdf')} id="enlaceDescargarPdf"
                    download="CatPatronG.pdf"
                    >Descargar PDF</a>
                </object>
            
            </Container>
        );
    }
}

export default Pdf1;
