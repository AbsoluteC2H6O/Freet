import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import BannerValores from './Manuales/BannerValores.PNG'
import './App.css';
import './Content1.css';
import './Manuales.css';
import capitalizacionbursatil from './Manuales/Valores/capitalizacionbursatil.png';
import empresasamericanas from './Manuales/Valores/empresasamericanas.png';
import empresasasiaticas from './Manuales/Valores/empresasasiaticas.png'; 
import empresaseuropeas from './Manuales/Valores/empresaseuropeas.png';
import horariosapertura from './Manuales/Valores/horariosapertura.png';
import puntostesla from './Manuales/Valores/horariosapertura.png'; 
import split from './Manuales/Valores/split.png';
  
class ValoresManual extends Component{
      render(){
      
          return(
              <>
               <Container fluid>
                <Row>
                <div className="justify-content-center 
                text-center text-uppercase lyricsManual">
                 <img 
                  src={BannerValores} 
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
                    xl={{ span: 3, offset: 1}}
                    lg={{ span: 4, offset: 1}}
                    md={{ span: 12, offset: 0}} 
                    xs={{ span: 12, offset: 0}}
                    sm={{ span: 12, offset: 0}}>
                      <pre> </pre>
                    <h1
                      className="LyricsTimeline text-uppercase text-center"
                    >MERCADO DE VALORES: </h1>
                    <ul>
                       <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#DefinicionV">Definicion</a></li>
                      <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Bolsa">Bolsa de valores</a></li>
                    <li>
                    <div className="dropdown11">
                    <a 
                    className="LyricsText ManualLyrics2 dropbtn11"
                    href="#TiposV">Tipos de Valores</a>
                    <div className="dropdown-content11">
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#ValoresRf">Valores de renta fija</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#ValoresRv">Valores de renta variable</a></li>
                    </div>
                  </div>
                  </li>
                  <div className="dropdown11">
                  <li className="dropbtn11"><a 
                    className="LyricsText ManualLyrics2 "
                    href="#PrincipalesV">Principales Valores</a></li>
                    <div className="dropdown-content11">
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Acciones">Acciones</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Bonos">Bonos</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Fondos">Fondos</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Etfs">ETFs</a></li>
                    
                    </div>
                  </div>
                  <h1
                      className="LyricsTimeline text-uppercase text-center"
                    >INDICES BURSATILES: </h1>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#DefinicionB">Definición</a></li>
                     <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#TiposI">Tipos de índices</a></li>
                     <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#PrincipalesI">Principales índices</a></li>
                     <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#FactoresI">Factores de precio en índices</a></li>
                     <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Horarios">Horarios de apertura</a></li>
                     </ul>
                  </Col>
                  <Col 
                    className="ManualFont"
                    xl={{ span: 4, offset: 0}}
                    lg={{ span: 6, offset: 0}}
                    md={{ span: 12, offset: 0}} 
                    xs={{ span: 12, offset: 0}}
                    sm={{ span: 12, offset: 0}}>
                      <pre> </pre>
                    <h1
                      className="LyricsTimeline text-uppercase text-center"
                    >TRADING DE ACCIONES:</h1>
                    <ul>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#DefinicionT">Definición</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Puntos">Puntos en acciones</a></li>
                    <li><a Criptomonedas
                    className="LyricsText ManualLyrics2 "
                    href="#Apalancamiento">Apalancamiento en acciones</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Spread">Spread en acciones</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Lotes">Lotes en acciones</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Volatilidad">Volatilidad en acciones</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Capitalizacion">Capitalización bursátil en acciones</a></li>
                  <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Volumen">Volumen en acciones</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#FactoresA">Factores de precio en acciones </a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Dividendo">¿Qué son dividendos?</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Split">¿Qué es un Split?</a></li>
                    </ul>
                  </Col>
                  <Col
                    className="ManualFont" 
                    xl={{ span: 2, offset: 0}}
                    lg={{ span: 4, offset: 1}} 
                    md={{ span: 12, offset: 0}} 
                    xs={{ span: 12, offset: 0}}
                    sm={{ span: 12, offset: 0}}>
                     <pre> </pre>
                     
                    <h1
                      className="LyricsTimeline text-uppercase text-center"
                    >Empresas</h1>
                    <ul>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Americanas">Principales empresas Americanas</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Europeas">Principales empresas Europeas</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Asiaticas">Principales empresas Asiáticas</a></li>
                    
                    </ul>
                  </Col>
                </Row>
                <Row>
                
                <Col  
                  md={{ span: 9, offset: 1}} 
                  sm={{ span: 11, offset: 1}}>
                    
                    <pre>
                      
                      </pre> 
                      <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">MERCADO DE VALORES</strong></h1>
                    <hr className="hrs margin"/>
                    <p className="text-center LyricsText"><strong className="text-center" id="DefinicionV">
                    Es el mercado de capitales donde se negocian principalmente las acciones de grandes empresas que cotizan en la bolsa de valores, pero difieren de otros valores que se pueden negociar como los bonos, fondos de inversión, ETFs o inclusive los famosos índices bursátiles. 
                    </strong></p>
                    <hr className="hrs"/>
                    <p className="text-center text-uppercase LyricsTimelineSubs" id="Bolsa">BOLSA DE VALORES</p>
                    <p className="text-justify LyricsText"><strong>Un activo refugio son aquellas inversiones que aumentan o mantienen su valor en momentos de crisis económica mundial y volatilidad en los mercados financieros, su comportamiento indica estabilidad y poca volatilidad, son utilizados en su mayoría para inversiones a largo plazo.</strong></p>
                    <p className="text-center text-uppercase LyricsTimelineSubs" id="TiposV">TIPOS DE VALORES</p>
                    
  
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">VALORES DE RENTA FIJA: </strong>Son los valores de deuda donde el inversor presta su dinero a una institución pública o privada con la finalidad de tener una ganancia fija estableciendo los tipos de intereses, cobros y la fecha de vencimiento, entre los productos financieros están: letras, bonos, pagarés, obligaciones, depósitos a plazo, fondos de renta fija, entre otros.</p>
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">VALORES DE RENTA VARIABLE: </strong>Son los valores que hacen referencia a la compra de acciones, ETFs y derivados financieros (CFDs, Contratos de futuros y Contrato de opciones) que cotizan en la bolsa de valores donde el inversor espera una ganancia según el aumento del precio del activo financiero.</p>
                    
  
  
  
  
  
  
                    <p className="text-center text-uppercase LyricsTimelineSubs" id="PrincipalesV">PRINCIPALES VALORES</p>
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">ACCIONES: </strong>Son las propiedades o títulos parciales de una empresa repartidas en partes iguales a los accionistas con la finalidad de tener un beneficio económico bien sea recibiendo dividendos o vendiendo dicha acción según el crecimiento de la empresa.</p>
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">BONOS: </strong>Son los préstamos de un inversor hacia las instituciones públicas o privadas con la finalidad de tener un beneficio económico por los intereses acumulados y por el reembolso total establecido en un periodo de tiempo.</p>
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">FONDOS DE INVERSION: </strong>Son los fondos tradicionales, consisten en agrupar el dinero de diferentes personas o empresas para utilizarlo en la inversión de diferentes productos financieros. Estos fondos son controlados por gestores financieros de acuerdo a sus políticas o condiciones y son los que toman las decisiones al momento de invertir.</p>
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">ETFs: </strong>Los ETFs también son fondos de inversión, pero con la gran diferencia que estos se cotizan en la bolsa de valores al igual que una acción, su principal característica es que las inversiones replican en un índice bursátil de referencia que engloba un gran número de productos financieros.</p>
                    
                     <pre>
                        
                      </pre> 
                      <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">INDICES BURSATILES</strong></h1>
                    <hr className="hrs margin"/>
                    <p className="text-center LyricsText"><strong className="text-center" id="DefinicionB">
                    Los índices bursátiles son datos estadísticos que se utilizan de referencia para medir la economía de un sector o país, se forman principalmente por la agrupación de las acciones de grandes empresas que cotizan en la bolsa de valores.   
                    </strong></p>
                    <hr className="hrs"/>
  
                    <p className="text-center text-uppercase LyricsTimelineSubs" id="TiposI">TIPOS DE INDICES</p>
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">INDICES MUNDIALES: </strong>Está conformado por las empresas que operan en varios países a nivel mundial.</p>
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">INDICES NACIONALES: </strong>Está conformado por las empresas que operan en un país en específico.</p>
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">INDICES SECTORIALES: </strong>Está conformado por las empresas que operan en un sector o industria en específico. (tecnología, construcción, agricultura, medicina, entre otros).</p>
                    
                    <p className="text-center text-uppercase LyricsTimelineSubs" id="PrincipalesI">PRINCIPALES INDICES</p>
                    <p className="LyricsText marginLyrcisS">  <strong className="LyricsTimelineSubs2">ESTADOS UNIDOS:  </strong></p>
                    <li className="LyricsText marginLyrcisS"> <mark>Nasdaq 100: </mark>Es un índice del sector tecnológico conformado por 100 valores de las empresas de tecnología y comercio electrónico más grandes de los Estados Unidos.</li>
                    <li className="LyricsText marginLyrcisS"> <mark>S&P 500: </mark>Es el principal índice de los Estados Unidos y el más utilizado a nivel mundial, conformado por las 500 empresas más grandes del país.</li>
                    <li className="LyricsText marginLyrcisS"> <mark>Dow Jones Industrial Average:  </mark>Es otro índice de referencia de Estados Unidos que cotizan en la bolsa de valores de New York (NYSE) y Nasdaq, conformado por las 30 empresas más grandes del país.</li>

                    <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2 marginLyrcisS">EUROZONA: </strong></p>
                    <li className="LyricsText marginLyrcisS"><mark>Ibex 35: </mark>Principal índice de España conformado por las 35 empresas más grandes del país que cotizan en las bolsas de valores de Madrid, Barcelona, Bilbao y Valencia.</li>
                    <li className="LyricsText marginLyrcisS"><mark>FTSE MIB: </mark>Principal índice de Italia conformado por los 40 valores de las empresas más grandes del país que cotizan en la bolsa de valores de Milán.</li>
                    <li className="LyricsText marginLyrcisS"><mark>DAX 30: </mark>Principal índice de Alemania conformado por las 30 empresas más grandes del país que cotizan en la bolsa de valores de Fráncfort.</li>
                    <li className="LyricsText marginLyrcisS"><mark>CAC 40:  </mark>Principal índice de Francia conformado por los 40 valores de las empresas más grandes del país que cotizan en la bolsa de valores de Paris.</li>
                    <li className="LyricsText marginLyrcisS"><mark>Euro Stoxx 50:  </mark>Es un índice mundial conformado por las 50 empresas más grandes de 11 países de la Eurozona.</li>
                   


                    <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2 marginLyrcisS">REINO UNIDO: </strong></p>
                    <li className="LyricsText marginLyrcisS"><mark>FTSE 100:  </mark>Principal índice de Reino Unido conformado por las 100 empresas más grandes del país que cotizan en la bolsa de valores de Londres.</li>
                    
                    <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2 marginLyrcisS">ASIA: </strong></p>

                    <li className="LyricsText marginLyrcisS"><mark>Nikkei 225:  </mark>Principal índice de Japón conformado por las 225 empresas más grandes del país que cotizan en la bolsa de valores de Tokio.</li>
                    <li className="LyricsText marginLyrcisS"><mark>Hang Seng:  </mark>Principal índice de China conformado por las 50 empresas más grandes del país que cotizan en la bolsa de valores de Hong Kong.</li>
                    <li className="LyricsText marginLyrcisS"><mark>KOSPI:  </mark>Principal índice de Corea del Sur conformado por más de 700 empresas que cotizan en la bolsa de valores de Corea.</li>

                    <p className="text-center text-uppercase LyricsTimelineSubs" id="FactoresI">FACTORES DE PRECIO EN INDICES</p>
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">DATOS MACROECONOMICOS: </strong>Se refiere a los anuncios económicos de un país reflejado en indicadores o datos estadísticos tales como el PIB, PMI, IPP/IPC, FED, entre otros.</p>
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">EVENTOS IMPORTANTES: </strong>Se refiere a los eventos de gran magnitud tales como: guerras comerciales, cambios de presidencia o desastres naturales que puedan afectar la economía de un país.</p>
                    <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">EMPRESAS: </strong>Se refiere al comportamiento político y económico de las empresas que conforman un índice bursátil incluyendo la cotización de sus acciones.</p>
                    
                    <p className="text-center text-uppercase LyricsTimelineSubs" id="Horarios">HORARIOS DE APERTURA</p>
                    
                    <p className="text-justify LyricsText"><strong>El mercado de valores tiene estrictamente sus horarios de negociación, es decir cuando el mercado está cerrado no se puede realizar ninguna operación de compra o venta en el sistema durante el día ya que el mercado funciona según la apertura y cierre de las bolsas de valores de cada país.</strong></p>

                    <img 
                    src={horariosapertura} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <pre>
                      
                  </pre> 
                  <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">TRADING DE ACCIONES</strong></h1>
                  <hr className="hrs margin"/>
                  <p className="text-center LyricsText"><strong className="text-center" id="DefinicionT">
                  El trading de acciones es la compra/venta de las acciones y productos financieros de grandes empresas de manera electrónica a través de las plataformas de trading prediciendo el movimiento del precio y así tener un beneficio económico, pero al mismo tiempo con el riesgo de tener pérdidas. 
                  </strong></p>
                  <hr className="hrs"/>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Puntos">PUNTOS EN ACCIONES</p>
                  <p className="text-justify LyricsText"><strong>El movimiento de precio de las acciones se determina en <mark>puntos</mark> por el alto valor de la mayoría de las acciones que cotizan en la bolsa de valores.</strong></p>
                    <img 
                    src={puntostesla} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Apalancamiento">APALANCAMIENTO EN ACCIONES</p>
                  <p className="text-justify LyricsText"><strong>El apalancamiento en acciones es el multiplicador de inversión para incrementar las ganancias al comprar o vender una acción invirtiendo una cantidad pequeña de dinero, pero al mismo tiempo puede incrementar las perdidas. </strong></p>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Spread">SPREAD EN ACCIONES</p>
                  <p className="text-justify LyricsText"><strong>El spread en acciones es la comisión que cobra el bróker al momento de comprar o vender una acción, dicha comisión consiste en el diferencial de orden de compra/venta (ASK/BID) con el precio de cotización actual y se mide en puntos.</strong></p>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Lotes">LOTES EN ACCIONES</p>
                  <p className="text-justify LyricsText"><strong>Los lotes en acciones son los tamaños de inversión para comprar o vender un número determinado de acciones en la plataforma de trading, en las acciones no existe un tamaño básico del lote, pero en el mercado de valores 1 lote está conformado por 100 acciones.</strong></p>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Volatilidad">VOLATILIDAD EN ACCIONES</p>
                  <p className="text-justify LyricsText"><strong>La volatilidad de cada acción como cualquier otro activo financiero es impredecible en el tiempo, sin embargo, el movimiento de precios de las empresas con mayor capitalización bursátil es de forma gradual dependiendo de su comportamiento político y económico.</strong></p>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Capitalizacion">CAPITALIZACION BURSATIL EN ACCIONES</p>
                  <p className="text-justify LyricsText"><strong>La capitalización bursátil para cada empresa nos indica el valor total de todas sus acciones en existencia multiplicando su precio de cotización actual por la cantidad de acciones en circulación. En el trading la capitalización bursátil es un indicador económico sobre la estabilidad financiera de una empresa.</strong></p>
                  <img 
                    src={capitalizacionbursatil} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Volumen">VOLUMEN EN ACCIONES</p>
                  <p className="text-justify LyricsText"><strong>El volumen para cada acción nos indica todas las transacciones de compra y venta de acciones en un periodo de tiempo determinado, generalmente las empresas con mayor capitalización bursátil son las que tienen mayor volumen de negociación diaria.</strong></p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="FactoresA">FACTORES DE PRECIO EN ACCIONES</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">POLITICAS DE LA EMPRESA: </strong>Son los informes económicos acerca del estado y comportamiento de la empresa por un periodo de tiempo determinado, entre ellos se evalúan ingresos y egresos totales, activos y pasivos, utilidades antes y después de los impuestos, las depreciaciones y el efectivo disponible. </p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">RESULTADOS FINANCIEROS:  </strong>Se refiere a las materias primas que se cultivan como los <mark>productos agrícolas</mark> (café, caña de azúcar, maíz, etc.), pero también comprende la ganadería como productos secundarios.</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">TIPOS DE INTERES:  </strong>Se refiere a las tasas de interés de préstamo a los bancos miembros, un aumento del tipo de interés indica un control de inflación en el país y a su vez una limitación en la compra de acciones.</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PRODUCTOS DE LA EMPRESA:  </strong>Se refiere al lanzamiento de nuevos productos de una empresa para mejorar sus servicios a los clientes, dicho lanzamiento puede favorecer o afectar al precio de su acción posteriormente según su funcionamiento y uso comercial.</p>
                    
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Dividendo">¿QUE SON DIVIDENDOS?</p>
                  <p className="text-justify LyricsText"><strong>Los dividendos son los pagos eventuales de las grandes empresas a sus accionistas para mantener el equilibrio y la confianza de los mismos, en el trading CFDs de acciones no existen dividendos ya que son operaciones en tiempo real desde el bróker, se necesita ser dueño de la acción para obtener los beneficios de la empresa. </strong></p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Split">¿QUE ES UN SPLIT?</p>
                  <p className="text-justify LyricsText"><strong>El split es un ajuste de precios de las acciones de una empresa, consisten en reducir el precio de una acción dividiendo su valor entre un número determinado de acciones sin afectar la proporción monetaria de los antiguos accionistas. </strong></p>
                  
                  <img 
                    src={split} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '70%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <pre>
                  </pre> 
                  <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">EMPRESAS</strong></h1>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Americanas">PRINCIPALES EMPRESAS AMERICANAS</p>
                  <img 
                    src={empresasamericanas} 
                    className="img-fluid marginLyrcisS" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Europeas">PRINCIPALES EMPRESAS EUROPEAS</p>
                  <img 
                    src={empresaseuropeas} 
                    className="img-fluid marginLyrcisS" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Asiaticas">PRINCIPALES EMPRESAS ASIATICAS</p>
              
                  <img 
                    src={empresasasiaticas} 
                    className="img-fluid marginLyrcisS" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                    </Col>



                 
                </Row>
              </Container> 
              </>
          );
      }
  }
  export default ValoresManual;