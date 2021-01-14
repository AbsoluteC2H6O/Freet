import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import BannerCriptomonedas from './Manuales/BannerCriptomonedas.PNG'
import './App.css';
import './Content1.css';
import './Manuales.css';
import Almacenamiento from './Manuales/Criptomonedas/almacenamiento.png';
import Bitcoin from './Manuales/Criptomonedas/BITCOIN.png';
import BitcoinUsd from './Manuales/Criptomonedas/BITCOINUSD.png';
import Blockchain from './Manuales/Criptomonedas/BLOCKCHAIN.png';
import Capitalizacion from './Manuales/Criptomonedas/capitalizacion.png';
import Correlacion from './Manuales/Criptomonedas/CORRELACION.png';
import FGFGFF from './Manuales/Criptomonedas/FGFGFF.png';
import Intercambio from './Manuales/Criptomonedas/INTERCAMBIO.png';
import Lote from './Manuales/Criptomonedas/LOTE.png';
import Mineria from './Manuales/Criptomonedas/MINERIA.png';
import Monedero from './Manuales/Criptomonedas/MONEDERO.png';
import MonederoH from './Manuales/Criptomonedas/MONEDERH.png';
import Monedero2 from './Manuales/Criptomonedas/MONEDERO2.png';
import MonederoM from './Manuales/Criptomonedas/MONEDEROM.png';
import MonederoW from './Manuales/Criptomonedas/MONEDEROW.png';
import PrincipalesA from './Manuales/Criptomonedas/PRINCIPALESA.png';
import RipleUsd from './Manuales/Criptomonedas/RIPPLEUSD.png';

//<i class="fa fa-circle" aria-hidden="true"></i>
//https://fontawesome.com/v4.7.0/icon/circle-o
  class CriptomonedasManual extends Component{
      render(){
      
          return(
              <>
              <Container fluid>
                <Row>
                <div className="justify-content-center 
                text-center text-uppercase lyricsManual">
                 <img 
                  src={BannerCriptomonedas} 
                  className="img-fluid" 
                  alt="BannerCommodities" 
                  style={{width: '100%'}}>
                </img>
                
                  </div>
                  <h1 className="LyricsText" >
                  
                 </h1> 
                </Row>

                <Row>
                  
                  <Col 
                    className="ManualFont"
                    lg={{ span: 3, offset: 1}}
                    md={{ span: 3, offset: 1}} 
                    xs={{ span: 12, offset: 0}}
                    sm={{ span: 12, offset: 0}}>
                      <pre> </pre>
                    <h1
                      className="LyricsTimeline text-uppercase text-center"
                    >mercado de Criptomonedas</h1>
                      <ul>
                      <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Definicion">Definición</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Tipos">Tipos de usos</a></li>
                    <li> 
                    
                      <a 
                    className="LyricsText ManualLyrics2"
                    href="#Horarios">Horarios de apertura</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Regulacion">Regulación del mercado</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Factores">Factores de precio</a></li>
              
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Blockchain">Blockchain</a>
                    </li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Seguridad">Seguridad y Privacidad</a>
                    </li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Monederos">Monederos virtuales</a>
                    </li>
                    </ul>
                  </Col>
                  <Col 
                    className="ManualFont"
                    lg={{ span: 3, offset: 0}}
                    md={{ span: 3, offset: 0}} 
                    xs={{ span: 12, offset: 0}}
                    sm={{ span: 12, offset: 0}}>
                      <pre> </pre>
                    <h1
                      className="LyricsTimeline text-uppercase text-center"
                    >Trading de Criptomonedas</h1>
                    <ul>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Pips">¿Pips o Puntos en Criptomonedas?</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Apalancamiento">Apalancamiento en Criptomonedas</a></li>
                    <li><a Criptomonedas
                    className="LyricsText ManualLyrics2 "
                    href="#Spread">Spread en Criptomonedas</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Lotes">Lotes en Criptomonedas</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Correlacion">Correlación en Criptomonedas</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Volatilidad">Volatilidad en Criptomonedas</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Capitalizacion">Capitalización bursátil en Criptomonedas</a></li>
                  <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Volumen">Volumen en Criptomonedas</a></li>
                    </ul>
                  </Col>
                  <Col
                    className="ManualFont"
                    lg={{ span: 3, offset: 0}} 
                    md={{ span: 3, offset: 0}} 
                    xs={{ span: 12, offset: 0}}
                    sm={{ span: 12, offset: 0}}>
                     <pre> </pre>
                     <ul>
                    <h1
                      className="LyricsTimeline text-uppercase text-center"
                    >Monedas Virtuales</h1>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Bitcoin">Bitcoin</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Coins">Coins</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Tokens">Tokens</a></li>
                    
                    </ul>
                  </Col>
                </Row>
                <Row>
                
                <Col  
                  md={{ span: 9, offset: 1}} 
                  sm={{ span: 11, offset: 1}}>
                    <pre>
                      
                    </pre> 
                    <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">CRIPTOMONEDAS</strong></h1>
                  <hr className="hrs margin"/>
                  <p className="text-center LyricsText"><strong className="text-center">
                  Las Criptomonedas son monedas virtuales creadas como método de pago electrónico, la creación de estas monedas comenzó a partir del famoso Bitcoin siendo una de las más cotizadas y costosas en el mercado. hoy en día existen una gran variedad de criptomonedas con sus propias características y funciones.</strong></p>
                  <hr className="hrs"/>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Tipos">TIPOS DE USOS</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">ALMACENAMIENTO DE CRIPTOMONEDAS: </strong>El almacenamiento de Criptomonedas es un modo de inversión como forma de ahorro según el comportamiento del mercado, las criptomonedas se almacenan en un monedero virtual o físico para luego venderlas, enviarlas o intercambiarlas.</p>
                  <img 
                    src={Almacenamiento} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '40%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">INTERCAMBIO DE CRIPTOMONEDAS: </strong>El intercambio de Criptomonedas es un modo de negocio, consiste en enviar monedas virtuales a otras personas como forma de venta y así recibir otras monedas virtuales del mismo valor monetario como forma de compra.</p>
                  <img 
                    src={Intercambio} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '40%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MINERIA DE CRIPTOMONEDAS: </strong>La minería de Criptomonedas es un proceso de validación de las transacciones dentro de la Blockchain y de esta manera producir dichas Criptomonedas, para esto se necesita un sistema de minería basado en cálculos matemáticos y algorítmicos y así recibir una pequeña recompensa por cada bloque agregado a la Blockchain.</p>
                  <img 
                    src={Mineria} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Horarios">HORARIOS DE APERTURA</p>
                  <p className="text-justify LyricsText"><strong>El mercado de Criptomonedas está abierto las 24/7 debido que es un mercado totalmente descentralizado, pero pueden aparecer cambios de horario en los días festivos de otros mercados financieros.</strong>
                  </p>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Regulacion">REGULACION DEL MERCADO</p>
                  <p className="text-justify LyricsText"><strong>La regulación del mercado de Criptomonedas es uno de los factores que influyen en su precio debido a que ninguna autoridad o gobierno las emite o respalda, sin embargo, las Criptomonedas se gestionan por una red de ordenadores almacenadas en la Blockchain de manera segura, siendo un registro de propiedad digital.</strong></p>

        

                
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Factores">Factores de precio</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">LEYES Y REGULACION: </strong>La falta de leyes y la descentralización de las Criptomonedas pueden afectar su precio ya que no existen organismos competentes que regulen su actividad comercial.</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">OFERTA Y DEMANDA: : </strong>El valor de las Criptomonedas se da por la cantidad total de monedas existentes, la capitalización bursátil de cada una de ellas y la facilidad de minar.</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">EVENTOS IMPORTANTES: </strong>Cambios Regulatorios, brechas de seguridad, tropiezos en la macroeconomía, especulación y lanzamiento de nuevas Criptomonedas pueden influir en su precio.</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">INTEGRACION: </strong>El uso de Criptomonedas como métodos de pago electrónicos.</p>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Blockchain">BLOCKCHAIN</p>
                  
                  <p className="text-justify LyricsText"><strong>La Blockchain o cadena de bloques es un libro contable virtual donde se registran todas las transacciones electrónicas de Criptomonedas, funciona mediante un conjunto de bloques consecutivos e interconectados entre sí, cada bloque se almacena en diferentes ordenadores de la red, siendo muy difícil de hackear o alterar.</strong></p>
                  <img 
                    src={Blockchain} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '70%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Seguridad">SEGURIDAD Y PRIVACIDAD</p>
                  <p className="text-justify LyricsText"><strong>La seguridad y privacidad de las Criptomonedas está respaldada por la Blockchain usando una criptografía en datos matemáticos y algorítmicos que impiden alterar su sistema operativo, pero esto no quiere decir que monederos virtuales, exchange o aplicaciones web estén libres de sufrir un ataque cibernético, siempre se debe tomar las precauciones sobre el tipo de monedero virtual a usar y el movimiento de las transacciones.</strong></p>
                
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Seguridad">SEGURIDAD Y PRIVACIDAD</p>
                  <p className="text-justify LyricsText"><strong>La seguridad y privacidad de las Criptomonedas está respaldada por la Blockchain usando una criptografía en datos matemáticos y algorítmicos que impiden alterar su sistema operativo, pero esto no quiere decir que monederos virtuales, exchange o aplicaciones web estén libres de sufrir un ataque cibernético, siempre se debe tomar las precauciones sobre el tipo de monedero virtual a usar y el movimiento de las transacciones.</strong></p>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Monederos">MONEDEROS VIRTUALES</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MONEDEROS MOVILES: </strong>Son aquellos que funcionan en aplicaciones de teléfonos inteligentes para almacenar, comprar, enviar y recibir Criptomonedas, son muy utilizados por la facilidad, seguridad y rapidez de sus transacciones. </p>
                  <img 
                    src={MonederoM} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '40%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MONEDEROS WEB: </strong>Son aquellos que funcionan en la nube o en la web, se pueden acceder desde cualquier dispositivo móvil y se utilizan en todos los ámbitos comerciales, como comprar, vender, intercambiar, enviar, recibir y almacenar dinero, Criptomonedas o cualquier activo financiero.</p>
                  <img 
                    src={MonederoW} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '40%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MONEDEROS DESKTOP:  </strong>Son aquellos que funcionan como programas instalados en la computadora, proporcionan un nivel de seguridad más alto que los monederos web y móviles y se utilizan para almacenar, comprar, enviar y recibir Criptomonedas.</p>
                  <img 
                    src={Monedero2} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '40%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MONEDEROS HARDWARE:  </strong>Son aquellos que funcionan como pen drive o disco duro portátil teniendo un sistema de criptografía avanzado, sin duda son los más seguros para almacenar Criptomonedas, generar claves privadas y realizar las transacciones al momento de conectarlo al ordenador.</p>
                  <img 
                    src={MonederoH} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '40%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MONEDEROS DE PAPEL:  </strong>Son aquellos que funcionan como un código impreso en un papel que representa la clave privada para realizar las transacciones, es uno de los monederos más seguros, pero más frágiles y menos usados actualmente para almacenar las Criptomonedas.</p>
                  <img 
                    src={Monedero} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '40%', display: 'block',
                    margin: '0 auto'}}>
                  </img>


                  <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">TRADING DE CRIPTOMONEDAS</strong></h1>
                  <hr className="hrs margin"/>
                  <p className="text-center LyricsText"><strong className="text-center">
                  El trading de Criptomonedas es la compra/venta de monedas virtuales a través de las plataformas de trading, prediciendo el movimiento del precio y así tener un beneficio económico, pero al mismo tiempo con el riesgo de tener pérdidas.</strong></p>
                  <hr className="hrs"/>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Pips">¿PIPS O PUNTOS EN CRIPTOMONEDAS?</p>
                  <p className="text-justify LyricsText"><strong>El movimiento de precio se determina en <mark>puntos</mark> para las Criptomonedas de alto valor y más cotizadas como es el Bitcoin.</strong></p>
                  <img 
                    src={BitcoinUsd} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-justify LyricsText"><strong>pero existen miles de Criptomonedas en el mercado y el valor de cada una de ellas son solo centavos de dólar, en este caso el movimiento de precios se determina en <mark>pips</mark>.</strong></p>
                  <img 
                    src={RipleUsd} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Apalancamiento">APALANCAMIENTO EN CRIPTOMONEDAS</p>
                  <p className="text-justify LyricsText"><strong>El apalancamiento en Criptomonedas es el multiplicador de inversión para incrementar las ganancias al comprar o vender monedas virtuales invirtiendo una cantidad pequeña de dinero, pero al mismo tiempo puede incrementar las perdidas. </strong></p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Spread">SPREAD EN CRIPTOMONEDAS</p>
                  <p className="text-justify LyricsText"><strong>El spread en Criptomonedas es la comisión que cobra el bróker al momento de comprar o vender monedas virtuales, dicha comisión consiste en el diferencial de orden de compra/venta (ASK/BID) con el precio de cotización actual y se mide en puntos. El spread suele ser bastante alto operando con las monedas virtuales más cotizadas.</strong></p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Lotes">LOTES EN CRIPTOMONEDAS</p>
                  <p className="text-justify LyricsText"><strong>Los lotes en Criptomonedas son los tamaños de inversión para comprar o vender un número determinado de monedas virtuales en la plataforma de trading, generalmente 1 lote corresponde al valor unitario de la Criptomoneda base, pero esto puede cambiar según el tipo de moneda virtual y el bróker a utilizar.</strong></p>
                  <img 
                    src={Lote} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Seguridad">CORRELACION EN CRIPTOMONEDAS</p>
                  <p className="text-justify LyricsText"><strong>La mayoría de monedas virtuales se correlacionan positivamente con el valor del Bitcoin, es decir el movimiento de sus precios siguen la misma dirección al movimiento de precios del Bitcoin debido que es la moneda con mayor liquidez y con más antigüedad.</strong></p>
                  <img 
                    src={Correlacion} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Volatilidad">VOLATILIDAD EN CRIPTOMONEDAS</p>
                  <p className="text-justify LyricsText"><strong>La mayoría de monedas virtuales son altamente volátiles por su falta de regulación gubernamental y por ser un mercado totalmente descentralizado. Es por eso que la volatilidad y la dirección del movimiento de precios puede ser totalmente impredecible. </strong></p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Capitalizacion">CAPITALIZACION BURSATIL EN CRIPTOMONEDAS</p>
                  <p className="text-justify LyricsText"><strong>La capitalización bursátil para cada Criptomoneda nos indica el valor total de monedas virtuales existentes multiplicando su precio de cotización actual por la cantidad de monedas virtuales en circulación.</strong></p>
                  <img 
                    src={Capitalizacion} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Seguridad">VOLUMEN EN CRIPTOMONEDAS</p>
                  <p className="text-justify LyricsText"><strong>El volumen para cada Criptomoneda nos indica todas las transacciones de compra y venta de monedas virtuales en un periodo de tiempo determinado, si existe un alto volumen de negociación acompañado por un aumento de precio, mayor popularidad alcista de lo contrario si existe un bajo volumen de negociación la fuerza alcista se puede agotar.</strong></p>
                  
                  

                  <pre>
                      
                    </pre> 
                    <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">MONEDAS VIRTUALES</strong></h1>
                  <hr className="hrs margin"/>
                  <p className="text-center LyricsText"><strong className="text-center">
                  En el mundo de las criptomonedas después del Bitcoin surgieron miles de monedas virtuales alternativas que se diferencian según su función y creación. La clasificación se divide en tres categorías.</strong></p>
                  <hr className="hrs"/>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Bitcoin">BITCOIN</p>
                  <p className="text-justify LyricsText"><strong>Es el origen de las Criptomonedas siendo la primera moneda virtual en existencia y con su propia Blockchain, su lanzamiento fue en el año 2009 y fue creada como sistema de pago electrónico descentralizado con la finalidad de reemplazar las divisas tradicionales, se considera la moneda del futuro y cada día tiene más valor en el mercado.</strong></p>
                  
                  <img 
                    src={Bitcoin} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '40%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Coins">COINS</p>
                  <p className="text-justify LyricsText"><strong>Son monedas virtuales alternativas al Bitcoin que están creadas con su propia Blockchain, es decir, tienen su propio sistema independiente contable. Son conocidos como Altcoins y su función principal es gestionar dinero electrónico como método de pago.</strong></p>
                  
                  <img 
                    src={PrincipalesA} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Tokens">Tokens</p>
                  <p className="text-justify LyricsText"><strong>Son monedas virtuales alternativas que están creadas en una Blockchain existente, es decir, trabajan con el sistema contable de otra Criptomoneda. Son conocidos como fichas y se usan como un respaldo financiero más que un método de pago, pueden representar una acción, posesión, servicio, un valor, entre otros.</strong></p>
                  <p className="text-justify LyricsText"><strong>La Blockchain de Ethereum es la plataforma más utilizada para crear Tokens utilizando su propia tecnología basada en la interfaz ERC-20.</strong></p>
                  
                  <img 
                    src={FGFGFF} 
                    className="img-fluid" 
                    alt="Mineria" 
                    style={{width: '60%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                    </Col>



                 
                </Row>
              </Container>
              </>
          );
      }
  }
  export default CriptomonedasManual;