import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import BannerCommodities from './Manuales/BannerCommodities.PNG'
import './App.css';
import './Content1.css';
import './Manuales.css';
import Apertura from './Manuales/Commodities/Apertura.png';
import Azucar from './Manuales/Commodities/AZUCAR.png';
import Cafe from './Manuales/Commodities/CAFE.png';
import Cobre from './Manuales/Commodities/COBRE.png';
import Gas from './Manuales/Commodities/Gas.png';
import Maiz from './Manuales/Commodities/MAIZ.png';
import Oro from './Manuales/Commodities/ORO.png';
import Petroleo from './Manuales/Commodities/Petroleo.png';
import PetroleoWTI from './Manuales/Commodities/PetroleoWTI.png';
import Plata from './Manuales/Commodities/PLATA.png';
import Puntos from './Manuales/Commodities/Puntos.png';
import Deco1 from './Manuales/Deco1.jpg';
import Deco2 from './Manuales/Deco2.jpg';
import Deco3 from './Manuales/Deco3.jpg';



class CommoditiesManual extends Component{
      render(){
      //falta senalar texto en donde debe redirigirse
      
          return(
              <>
              
              <Container fluid>
              <Row>
                  <div className="justify-content-center 
                text-center text-uppercase lyricsManual">
                 <img 
                  src={BannerCommodities} 
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
                    >mercado de commodities</h1>
                      <ul>
                      <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#DefinicionC">Definición</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Clasificacion">Clasificación</a></li>
                    <li> 
                    
                      <a 
                    className="LyricsText ManualLyrics2"
                    href="#Activo">¿Qué es un activo refugio?</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Contratos">Contratos de futuros</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Horarios">Horarios de apertura</a></li>
              
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Factores">Factores de precio</a>
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
                    >Trading de commodities</h1>
                    <ul>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#DefinicionT">Definición</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Punto">Punto en Commodities</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Apalancamiento">Apalancamiento en Commodities</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Spread">Spread en Commodities</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Lotes">Lotes en Commodities</a></li>
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
                    >Principales Commodities</h1>
                    <ul>
                    <div className="dropdown11">
                    <li className="dropbtn11"><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Metalicos">Principales Productos Metálicos</a></li>
                    <div className="dropdown-content11">
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#oro"> Oro</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#plata"> Plata</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#cobre"> Cobre</a></li>
                    </div>
                  </div>

                  <div className="dropdown11">
                  <li className="dropbtn11"><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Energeticos">Principales Productos energéticos</a></li>
                    <div className="dropdown-content11">
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#petroleo"> Petróleo</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#petroleow"> Petróleo WTI y Brent</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#gas"> Gas natural</a></li>
                    </div>
                  </div>
                  
                  <div className="dropdown11">
                  <li className="dropbtn11"><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Agricolas">Principales Productos agrícolas</a></li>
                    <div className="dropdown-content11">
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#cafe"> Café</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#azucar"> Azúcar</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#maiz"> Maíz</a></li>
                    </div>
                  </div>
                  </ul>
                  </Col>
                </Row>

                <Row>
                <Col  
                  md={{ span: 9, offset: 1}} 
                  sm={{ span: 11, offset: 1}}>
                    <pre>
                      
                    </pre>
                  {/*<img 
                    src={Deco3} 
                    className="img-fluid" 
                    alt="Deco1" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img> */}
                  <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">COMMODITIES</strong></h1>
                  <hr className="hrs margin"/>
                  <p className="text-center LyricsText" id="DefinicionC"><strong className="text-center">
                  Los commodities o productos básicos es el mercado donde se negocian las materias primas con mayor demanda a nivel mundial, tales como el oro, petróleo, café, entre otros y la compra/venta se realiza de forma directa en un mercado de intercambio o por contratos de futuros. 
                  </strong></p>
                  <hr className="hrs"/>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Clasificacion">Clasificacion</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">HARD COMMODITIES: </strong>Se refiere a las materias primas que se extraen del subsuelo, entre ellas estan los <mark>produtos metalicos</mark> (oro, plata, cobre, etc.) y los <mark>productos energeticos </mark>(petroleo y gas natural.)</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">SOFT COMMODITIES: </strong>Se refiere a las materias primas que se cultivan como los <mark>productos agrícolas</mark> (café, caña de azúcar, maíz, etc.), pero también comprende la ganadería como productos secundarios.</p>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Activo">¿Que es un activo Refugio?</p>
                  <p className="text-justify LyricsText"><strong>Un activo refugio son aquellas inversiones que aumentan o mantienen su valor en momentos de crisis económica mundial y volatilidad en los mercados financieros, su comportamiento indica estabilidad y poca volatilidad, son utilizados en su mayoría para inversiones a largo plazo.</strong>
                  </p>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Contratos">Contratos de futuros</p>
                  <p className="text-justify LyricsText"><strong>Las materias primas se negocian en su mayoría por contratos de futuros, donde existe un acuerdo entre el comprador y vendedor para concretar la negociación en una fecha futura y al precio establecido en el contrato, el movimiento de precio de dichos contratos es estandarizado en la bolsa de valores y las ganancias o pérdidas son liquidadas diariamente.</strong></p>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Horarios">Horarios de Apertura</p>
                  <p className="text-justify LyricsText"><strong>El mercado de commodities está abierto las 24 horas del día de lunes a viernes, pero abre sus puertas a partir del domingo, en este caso a diferencia de Forex cada materia prima tiene sus propios horarios de negociación y sus respectivos descansos durante el día donde no se puede operar en el sistema.</strong></p>
                  <p className="text-justify LyricsText"><strong>En la siguiente tabla se indica el horario de apertura de las materias primas con mayor volumen de negociación diario: </strong></p>
                  <img 
                    src={Apertura} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Factores">Factores de precio</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">OFERTA Y DEMANDA: </strong>La oferta y demanda de un producto básico se refleja directamente en su producción y consumo, en este caso mientras mayor sea la producción de un producto básico mayores ofertas y mientras mayor sea el consumo del mismo mayor es la demanda.</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">IPP/IPC: </strong>Son indicadores económicos de un país que manejan la inflación de precios en la producción y consumo de un producto básico. Un incremento de precios para el productor y consumidor provocaría un efecto negativo en el mercado.</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">EXPORTACION/IMPORTACION:  </strong>Se refiere a las tasas de exportación e importación de un producto básico entre países, en este caso si existe una tasa elevada para exportar o importar un producto básico con mucha demanda provocaría una subida de precios en el mercado.</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">CLIMA: </strong>Los cambios climáticos es uno de los factores que afectan especialmente a los productos agrícolas, un desastre natural a un país productor llevaría a la escases y sobredemanda de su producción agrícola, subiendo los precios en el mercado.</p>
                  <p className="LyricsText"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">RELACION CON EL DOLAR: </strong>El dólar estadounidense es la divisa principal en la negociación de materias primas y por esta razón se correlaciona negativamente con su precio, esto quiere decir que, si sube el dólar, bajaría los precios de las materias primas y viceversa ya que sus precios cotizan en dólares.</p>

                  <pre>

                  </pre>
                  {/**<img 
                    src={Deco2} 
                    className="img-fluid" 
                    alt="Deco1" 
                    style={{width: '80%',margin: '0em 0em 0em 4em', display: 'block',
                    margin: '0 auto'}}
                    >
                  </img> <pre>

                  </pre><img 
                    src={Deco3} 
                    className="img-fluid" 
                    alt="Deco1" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>*/}
                  
                  
                  <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">TRADING DE COMMODITIES</strong></h1>
                  
                  <hr className="hrs margin"/>
                  <p className="text-center LyricsText" id="Definicion"><strong className="text-center">
                  El trading de commodities es la compra/venta de materias primas a través de las plataformas de trading, prediciendo el movimiento del precio y así tener un beneficio económico, pero al mismo tiempo con el riesgo de tener pérdidas. 
                  </strong></p>
                  <hr className="hrs"/>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Punto">Punto en commodities</p>
                  <p className="text-justify LyricsText"><strong>
                  El movimiento de precio de las materias primas se determina en <mark>puntos</mark> por el alto valor de la mayoría de las materias primas que cotizan en la bolsa.
                  </strong></p>
                  <img 
                    src={Puntos} 
                    className="img-fluid" 
                    alt="Puntos" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Apalancamiento">Apalancamiento en commodities</p>
                  <p className="text-justify LyricsText"><strong>
                  El apalancamiento en commodities es el multiplicador de inversión para incrementar las ganancias al comprar o vender una materia prima invirtiendo una cantidad pequeña de dinero, pero al mismo tiempo puede incrementar las perdidas. 
                  </strong></p>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Spread">Spread en commodities</p>
                  <p className="text-justify LyricsText"><strong>
                  El spread en commodities es la comisión que cobra el bróker al momento de comprar o vender una materia prima, dicha comisión consiste en el diferencial de orden de compra/venta (ASK/BID) con el precio de cotización actual y se mide en puntos.
                  </strong></p>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Lotes">Lotes en commodities</p>
                  <p className="text-justify LyricsText"><strong>
                  Los lotes en commodities son los tamaños de inversión para comprar o vender un número determinado de materias primas en la plataforma de trading, en el mercado de futuros para materias primas no existe un tamaño básico del lote ya que se define por tamaño de contratos.
                  </strong></p>
                  <h1 className="text-center LyricsText ManualLyrics3" id=""><strong className="ManualLyrics3Font">PRINCIPALES COMMODITIES</strong></h1>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Metalicos">Principales productos metalicos</p>
                  <p className="LyricsText" id="oro"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">ORO: </strong>El oro es el metal precioso más comercializable del mundo desde la antigüedad, se considera un activo refugio ya que suele mantener su valor cuando hay volatilidad en los mercados financieros. Su precio en el mercado se calcula en onzas.</p>
                  <p className="text-justify LyricsText"><mark><i className="fa fa-caret-right" aria-hidden="true"></i> Principales países con mayores reservas de Oro: </mark> Estados Unidos, Alemania, Italia, Francia, China, Suiza y Rusia.</p>
                  <img 
                    src={Oro} 
                    className="img-fluid" 
                    alt="Oro" 
                    style={{width: '20%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText" id="plata"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PLATA: </strong>La plata es un metal precioso muy demandado y principalmente usado en artículos de joyería, electrónica y aplicaciones industriales. Se considera un activo refugio al igual que el oro teniendo una correlación positiva. Su precio en el mercado se calcula en onzas.</p>
                  <p className="text-justify LyricsText"><mark><i className="fa fa-caret-right" aria-hidden="true"></i> Principales países con mayores reservas de Plata: </mark> Perú, Australia, Chile, México, Polonia y China.</p>
                  <img 
                    src={Plata} 
                    className="img-fluid" 
                    alt="Plata" 
                    style={{width: '20%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText" id="cobre"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">COBRE: </strong>El cobre es un metal de bajo valor, pero muy comerciable por los inversores por su volatilidad y liquidez. Se considera un metal industrial por su gran variedad de usos, entre ellos: artículos de construcción, sistemas eléctricos y fertilizantes. Su precio en el mercado se calcula en libras o toneladas.</p>
                  <p className="text-justify LyricsText"><mark><i className="fa fa-caret-right" aria-hidden="true"></i> Principales países con mayores reservas de Cobre: </mark> Chile, Perú, Australia, Estados Unidos y China.</p>
                  <img 
                    src={Cobre} 
                    className="img-fluid" 
                    alt="Cobre" 
                    style={{width: '20%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Energeticos">Principales productos Energeticos</p>
                  <p className="LyricsText" id="petroleo"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PETROLEO: </strong>El petróleo es un mineral oscuro y aceitoso conocido como oro negro utilizado principalmente en la producción de combustible y en múltiples usos de la industria petroquímica, su precio en el mercado se calcula por barriles y en el mundo de las inversiones se dividen en petróleo WTI y petróleo Brent.</p>
                  <p className="text-justify LyricsText"><mark><i className="fa fa-caret-right" aria-hidden="true"></i> Principales países con mayores reservas de Petroleo: </mark> Venezuela, Arabia Saudita, Canadá, irán, Irak, Kuwait y Emiratos árabes unidos.</p>
                  <img 
                    src={Petroleo} 
                    className="img-fluid" 
                    alt="Petroleo" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText" id="petroleow"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PETROLEO WTI y BRENT: </strong>El petróleo (WTI) conocido como "West Texas Intermédiate" contiene un grado dulce del petróleo crudo por su bajo contenido de azufre y es la referencia principal de precios en el mercado petrolero de los Estados Unidos, a diferencia del petróleo (BRENT) este último, cotiza en Londres y es la referencia principal de precios en el mercado petrolero de Europa.</p>
                 <img 
                    src={PetroleoWTI} 
                    className="img-fluid" 
                    alt="PetroleoWTI" 
                    style={{width: '70%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText" id="gas"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">GAS NATURAL: </strong>l gas natural es uno de los pilares de la industria energética abarcando una gran variedad de usos, entre ellos: sistema de calefacción, combustible para cocinar, agua caliente, combustible para vehículos, entre otros. Su precio en el mercado se calcula por BTU.</p>
                  <p className="text-justify LyricsText"><mark><i className="fa fa-caret-right" aria-hidden="true"></i> Principales países con mayores reservas de Gas Natural: </mark> usia, irán, Qatar, Arabia saudita, Emiratos árabes unidos, Venezuela y Estados Unidos.</p>
                  <img 
                    src={Gas} 
                    className="img-fluid" 
                    alt="Oro" 
                    style={{width: '20%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Agricolas">Principales productos agricolas</p>
                  <p className="LyricsText" id="cafe"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">CAFE: </strong>El café es uno de los productos más consumidos a nivel mundial utilizado como bebida tradicional de cada persona y es uno de los productos agrícolas más comerciables por los inversores por su volatilidad. Su precio en el mercado se calcula en libras o toneladas.</p>
                  <p className="text-justify LyricsText"><mark><i className="fa fa-caret-right" aria-hidden="true"></i> Principales países productores de Cafe: </mark> Brasil, Colombia, Vietnam, India, Etiopía, Indonesia y Honduras.</p>
                  <img 
                    src={Cafe} 
                    className="img-fluid" 
                    alt="Cafe" 
                    style={{width: '20%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText" id="azucar"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">AZUCAR: </strong>El azúcar es un producto de primera necesidad utilizado como edulcorante tradicional en comidas y bebidas, pero también su uso se extiende en la producción de bioetanol como combustible ecológico. Su precio en el mercado se calcula en libras.</p>
                  <p className="text-justify LyricsText"><mark><i className="fa fa-caret-right" aria-hidden="true"></i> Principales países productores de Azucar: </mark> Brasil, India, China, Tailandia, México, Pakistán y Colombia.</p>
                  <img 
                    src={Azucar} 
                    className="img-fluid" 
                    alt="Azucar" 
                    style={{width: '20%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText" id="maiz"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MAIZ: </strong>El maíz es uno de los cereales utilizados como alimento tanto paras las personas como para animales, pero también funciona como ingrediente para la elaboración de una gran variedad de productos de consumo a nivel mundial. Su precio en el mercado se calcula en bushel.</p>
                  <p className="text-justify LyricsText"><mark><i className="fa fa-caret-right" aria-hidden="true"></i> Principales países productores de maiz: </mark> Estados Unidos, China, Brasil, Argentina, India, Ucrania y México.</p>
                  <img 
                    src={Maiz} 
                    className="img-fluid" 
                    alt="Maiz" 
                    style={{width: '20%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  </Col>
                  {/**
                   * <img 
                    src={Deco1} 
                    className="img-fluid" 
                    alt="Deco1" 
                    style={{width: '60%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                   */}
                  </Row>
              </Container>
              </>
          );
      }
  }
  export default CommoditiesManual;
  /**
   * 
   * 
   * <p className="LyricsText text-justify">El Manual de Commodities creado por la empresa Freet recopila todos los aspectos importantes del mercado de materias primas de una manera breve, ilustrativa y precisa utilizando los principales conceptos del trading como herramientas básicas de referencia, análisis y educación.</p>
                  <p className="LyricsText text-justify"><strong>Advertencia: </strong>Este manual no es una opción de inversión en la bolsa de valores y la empresa no se hace responsable por cualquier uso inapropiado del mismo, recuerda que operar con activos financieros es altamente riesgoso y puedes perder todo tu capital.</p>
                
   * <i className="fa fa-telegram" aria-hidden="true"></i>
   * <i className="fa fa-twitter-square" aria-hidden="true"></i>
   * <i className="fa fa-youtube-square" aria-hidden="true"></i>
   * <i className="fa fa-facebook-official" aria-hidden="true"></i>
   * <i className="fa fa-google" aria-hidden="true"></i>
   * <i className="fa fa-facebook-square" aria-hidden="true"></i>
   * <i className="fa fa-caret-square-o-down" aria-hidden="true"></i>
   * <i className="fa fa-instagram" aria-hidden="true"></i>
   * 
   * 
   * <FontAwesomeIcon icon="check-square" />
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
    <FontAwesomeIcon icon={['fab', 'apple']} /> */