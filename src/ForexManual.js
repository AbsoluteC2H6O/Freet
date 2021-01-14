import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import BannerForex from './Manuales/BannerForex.PNG'
import './App.css';
import './Content1.css';
import './Manuales.css';
import australiaeeuu from './Manuales/Forex/australiaeeuu.png';
import eeuucanada from './Manuales/Forex/eeuucanada.png';
import eeuujapon from './Manuales/Forex/eeuujapon.png';
import eeuusuiza from './Manuales/Forex/eeuusuiza.png';
import eurjpy from './Manuales/Forex/eurjpy.png';
import eurozonaeeuu from './Manuales/Forex/eurozonaeeuu.png';
import eurusd from './Manuales/Forex/eurusd.png';
import formula from './Manuales/Forex/formula.png';
import nuevazelandaeeuu from './Manuales/Forex/nuevazelandaeeuu.png';
import pardivisa from './Manuales/Forex/pardivisa.png';
import parescruzados from './Manuales/Forex/parescruzados.png';
import parese from './Manuales/Forex/parese.png';
import paresp from './Manuales/Forex/paresp.png';
import reinounidoeeuu from './Manuales/Forex/reinounidoeeuu.png';
import tablash from './Manuales/Forex/tablash.png';
import tablarc from './Manuales/Forex/tablarc.png';
import tablavc from './Manuales/Forex/tablavc.png';
class ForexManual extends Component{
      render(){
      
          return(
              <>
              <Container fluid>
                <Row>
                <div className="justify-content-center 
                text-center text-uppercase lyricsManual">
                 <img 
                  src={BannerForex} 
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
                    >MERCADO DE FOREX</h1>
                      <ul>
                      <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#DefinicionM">Definición</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Sesiones">Sesiones de Forex </a></li>
                    <li> 
                    
                      <a 
                    className="LyricsText ManualLyrics2"
                    href="#Horarios">Horarios de apertura</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Regulacion">Regulación del mercado</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Manipulacion">Manipulación del mercado </a></li>
              
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Factores">Factores de precio</a>
                    </li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#TablasIE">Tabla de importación y Exportación</a>
                    </li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Metatrader">Metatrader</a>
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
                    >TRADING DE FOREX:</h1>
                    <ul>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#DefinicionT">Definición</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Pip">Pip en Forex</a></li>
                    <li><a Criptomonedas
                    className="LyricsText ManualLyrics2 "
                    href="#Apalancamiento">Apalancamiento en Forex</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Spread">Spread en Forex</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Lotes">Lotes en Forex</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Correlacion">Correlación en Forex</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Volatilidad">Volatilidad en Forex</a></li>
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
                    >DIVISAS: </h1>
                    <ul>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Par">Par de divisas</a></li>
                     <div className="dropdown11">
                       <li>
                    <a 
                    className="LyricsText ManualLyrics2 dropbtn11"
                    href="#TiposP">Tipos de pares de divisas:</a></li>
                    <div className="dropdown-content11">
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#ValoresRf">Populares</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#ValoresRv">Cruzadas</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#ValoresRe">Exóticas</a></li>
                    </div>
                  </div>
                    <li><a Criptomonedas
                    className="LyricsText ManualLyrics2 "
                    href="#PrincipalesP">Principales pares de divisas </a></li>
                    
                    
                    </ul>
                  </Col>
                </Row>
                <Row>
                
                <Col  
                  md={{ span: 9, offset: 1}} 
                  sm={{ span: 11, offset: 1}}>
                    <pre>
                      
                    </pre> 
                    <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">FOREX</strong></h1>
                  <hr className="hrs margin"/>
                  <p className="text-center LyricsText" id="DefinicionM"><strong className="text-center">
                  Forex es el mercado divisas más grande y con mayor liquidez del mundo, funciona a través del intercambio de precios de una divisa con respecto a otra, a su vez es uno de los mercados financieros más utilizados por los inversores. 
                  </strong></p>
                  <hr className="hrs"/>

                  <p className="text-center text-uppercase LyricsTimelineSubs marginLyrcisS" id="Sesiones">SESIONES DE FOREX</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Un activo refugio son aquellas inversiones que aumentan o mantienen su valor en momentos de crisis económica mundial y volatilidad en los mercados financieros, su comportamiento indica estabilidad y poca volatilidad, son utilizados en su mayoría para inversiones a largo plazo.</strong></p>


                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">SESION DEL PACIFICO: </strong>Está conformada por los centros financieros de Sídney y Wellington, siendo la primera en abrir sus puertas, las divisas más utilizadas son el dólar estadounidense contra el dólar australiano y dólar neozelandés.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">SESION ASIATICA: </strong>Está conformada por los centros financieros de Tokio y Hong Kong, siendo una de las primeras en abrir sus puertas después de la sesión del pacifico. Las divisas más utilizadas son la libra esterlina y el dólar estadounidense contra el yen japonés.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">SESION EUROPEA: </strong>Está conformada por los centros financieros de London y Fráncfort, siendo una de las sesiones con mayor volatilidad. Las divisas más utilizadas son el dólar estadounidense contra el euro y la libra esterlina.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">SESION AMERICANA: </strong>Está conformada por los centros financieros de New York y Chicago, siendo la última en abrir sus puertas, las divisas más utilizadas son el dólar estadounidense y el dólar canadiense contra el euro, yen japonés y libra esterlina. </p>
                 

                 
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Horarios">HORARIOS DE APERTURA</p>
                  <p className="text-justify LyricsText"><strong>Los horarios de apertura de Forex se establecen en horario internacional de dos maneras GMT/EST (Hora media de Greenwich/Hora estándar del este). Independientemente del tipo de horario a usar estos pueden solaparse unos con otros durante el día según las aperturas y cierres de cada centro financiero.</strong></p>

                  <img 
                    src={tablash} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '90%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Regulacion">REGULACION DEL MERCADO </p>
                  <p className="text-justify LyricsText"><strong>Forex es el mercado mundial de divisas más grande del mundo y por su gran magnitud no existen organismos de control para supervisarlos las 24 horas del día sin embargo existen las autoridades competentes que regulan los brókers o plataformas de trading que trabajan con el mercado de Forex.</strong></p>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Manipulacion">MANIPULACION DEL MERCADO </p>
                  <p className="text-justify LyricsText"><strong>Forex es el mercado con mayor liquidez del mundo, moviendo diariamente más de 5 billones de dólares y por esta razón la manipulación de precios es imposible, sin embargo, las grandes instituciones bancarias y las grandes empresas multimillonarias pueden manipular el mercado de divisas en un determinado momento si lo desean invirtiendo grandes sumas de dinero y abriendo una operación en la misma dirección.</strong></p>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Factores">FACTORES DE PRECIO</p>
                  
                  <p className="text-justify LyricsText"><strong>Los factores que producen un movimiento de precio en las divisas se enfocan en los principales índices micro y macro económicos de los países, entre ellos están:</strong></p>


                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PIB: </strong>El PIB (producto interno bruto) es el índice macroeconómico de un país, este indicador determina la producción final de bienes y servicios durante un año. Un incremento de este indicador es favorable para la economía del país.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PMI:  </strong>El PMI (Project Management Institute) es el índice del sector manufacturero, este indicador incluye informes y encuestas mensuales de las empresas manufactureras del sector privado, al mismo tiempo define un aumento y disminución del PIB.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">IPP/IPC:  </strong>El IPP (Índice de precios del productor) y el IPC (índice de precios del consumidor) son indicadores similares que manejan la inflación de precios tanto para el 
consumidor como para el productor. Un incremento de este indicador es negativo para la economía del país.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">FED:  </strong>Son las decisiones de la reserva federal estadounidense a través de la FOMC (Federal Open Market Committee) y definir un tipo de interés a los diferentes bancos miembros. Un incremento del tipo de interés indica un control de inflación en el país siendo positivo o negativo según sus políticas y estudio económico.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">NFP: </strong>Mide la tasa de creación de empleo en Estados Unidos (excluyendo los empleos agrícolas). Un crecimiento de empleo es favorable para la economía de Estado Unidos y al mismo tiempo puede influir en el precio de otros activos financieros.</p>
                 

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="TablasIE">TABLA DE IMPORTACION Y EXPORTACION</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Las relaciones comerciales entre países es un aspecto fundamental para analizar el movimiento de precios de las divisas a través de las importaciones y exportaciones de cada país, sin embargo, los acuerdos comerciales y cambios de política entre países pueden cambiar en el tiempo de manera positiva o negativa.</strong></p>

                  <img 
                    src={tablarc} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Metatrader">METATRADER</p>
                  <p className="text-justify LyricsText"><strong>Metatrader es un software de operaciones electrónicas y un potente visor de gráficos financieros en tiempo real, es muy utilizado por los inversores de Forex ya que se puede vincular a las plataformas de trading o bróker y poder realizar las operaciones dentro del mismo sistema, al mismo tiempo este programa posee una interfaz gráfica estándar y fácil de entender.</strong></p>

                  <pre>
                      
                      </pre> 
                      <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">TRADING DE FOREX</strong></h1>
                    <hr className="hrs margin"/>
                    <p className="text-center LyricsText" id="DefinicionT"><strong className="text-center">
                    El trading en Forex es la compra/venta de divisas de manera electrónica a través de las plataformas de trading, prediciendo el movimiento del precio y así tener un beneficio económico, pero al mismo tiempo con el riesgo de tener pérdidas. 
                    </strong></p>
                    <hr className="hrs"/>




                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Pip">PIP EN FOREX</p>
                  <p className="text-justify LyricsText"><strong>El pip en Forex es el movimiento menor de precios de un par de divisas, se encuentra después del decimal en el cuarto digito.</strong></p>

                  <img 
                    src={eurusd} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-justify LyricsText"><strong>Sin embargo, existen excepciones cuando la divisa se cotiza en valores menores como es el caso del yen japonés donde el pip se encuentra después del decimal en el segundo digito.</strong></p>
                  <img 
                    src={eurjpy} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>


                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Apalancamiento">APALANCAMIENTO EN FOREX</p>
                  <p className="text-justify LyricsText"><strong>El apalancamiento en Forex es el multiplicador de inversión para incrementar las ganancias al comprar o vender un par de divisas invirtiendo una cantidad pequeña de dinero, pero al mismo tiempo puede incrementar las perdidas. </strong></p>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Spread">SPREAD EN FOREX</p>
                  <p className="text-justify LyricsText"><strong>El spread en Forex es la comisión que cobra el bróker al momento de comprar o vender un par de divisas, dicha comisión consiste en el diferencial de orden de compra/venta (ASK/BID) con el precio de cotización actual y se mide en pips. </strong></p>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Lotes">LOTES EN FOREX</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Los lotes en Forex son los tamaños de inversión al momento de comprar o vender una cantidad establecida de una divisa en particular, las operaciones se realizan en la plataforma de trading y se clasifican en tres tipos:</strong></p>



                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">LOTE ESTANDAR: </strong>Es el tamaño más grande para abrir una operación, un lote estándar corresponde a 100.000 unidades de la divisa base. Ejemplo:</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Formula: 100.000/100.000= </strong><mark>1 lote</mark></p>
                  <p className="text-justify LyricsText"><mark>1 lote:</mark> EUR/USD= 100.000 Euros.</p> 
                  <p className="text-justify LyricsText"><mark>1 lote:</mark>USD/CAD= 100.000 Dólares Estadounidense.</p> 
                  <p className="text-justify LyricsText"><mark>1 lote:</mark>AUD/USD= 100.000 Dólares Australiano.</p>
                  


                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MINI LOTE:  </strong>Es el tamaño más grande para abrir una operación, un lote estándar corresponde a 100.000 unidades de la divisa base. Ejemplo:</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Formula: 10.000/100.000= </strong><mark>0.1 lote</mark></p>
                  <p className="text-justify LyricsText"><mark>1 mini lote: </mark> EUR/USD= 10.000 Euros.</p> 
                  <p className="text-justify LyricsText"><mark>1 mini lote: </mark> USD/CAD= 10.000 Dólares Estadounidense.</p> 
                  <p className="text-justify LyricsText"><mark>1 mini lote: </mark> AUD/USD= 10.000 Dólares Australiano.</p>
                  

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MICRO LOTE: </strong>Es el tamaño más pequeño para abrir una operación, un micro lote corresponde a 1.000 unidades de la divisa base. Ejemplo:</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Formula: 1.000/100.000= </strong><mark>0.01 lote</mark></p>
                  <p className="text-justify LyricsText"><mark>1 micro lote:</mark> EUR/USD= 1.000 Euros. </p> 
                  <p className="text-justify LyricsText"><mark>1 micro lote:</mark> USD/CAD= 1.000 Dólares Estadounidense.</p> 
                  <p className="text-justify LyricsText"><mark>1 micro lote:</mark> AUD/USD= 1.000 Dólares Australiano.</p>
                  

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Correlacion">CORRELACION EN FOREX</p>
                  <p className="text-justify LyricsText"><strong>La correlación se produce cuando el precio de un par de divisas se mueve conjuntamente con el precio de otro par de divisas. Se pueden dar en la misma dirección (correlación positiva) y en direcciones opuestas (correlación negativa).</strong></p>
                  <p className="text-justify LyricsText"><strong>La principal razón de estas correlaciones se debe a los vínculos económicos y políticos de los países que conforman los pares de divisas, cada moneda pertenece a una economía que puede afectar o favorecer el movimiento de precio de otra.</strong></p>


                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Volatilidad">VOLATILIDAD EN FOREX</p>
                  <p className="text-justify LyricsText"><strong>La volatilidad de cada par de divisas como cualquier otro activo financiero es impredecible en el tiempo, sin embargo, existen pares de divisas que se clasifican con alta y baja volatilidad, para esto se deben revisar la siguiente tabla:</strong></p>


                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">TABLA DE VOLATILIDAD:  </strong>Muestra un esquema general de volatilidad según los pips de movimiento y % de volatilidad por día, semana y mes de las divisas populares y cruzadas. </p>
                  <p className="text-justify LyricsText"><mark>Nota: Los esquemas y la formula de la tabla representa un análisis de volatilidad aproximado del mercado de divisas. </mark></p>

                  <img 
                    src={formula} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <img 
                    src={tablavc} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                    <pre>
                      
                      </pre> 
                      <h1 className="text-center LyricsText ManualLyrics3"><strong className="ManualLyrics3Font">DIVISAS</strong></h1>
                   



                 
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="ParD">PAR DE DIVISAS</p>
                  <p className="text-justify LyricsText"><strong>Un par de divisas es un activo financiero conformado por el cruce de la divisa base (compra) con la divisa secundaria (venta), que indica la conversión de precios de una divisa con respecto a la otra. Ejemplo:</strong></p>

                  <img 
                    src={pardivisa} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '100%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="TIposP">TIPOS DE PARES DE DIVISAS</p>
                  

                  <p className="LyricsText marginLyrcisS" id="ValoresRf"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">POPULARES:  </strong>Los pares de divisas populares o mayores son las cotizaciones de las principales economías del mundo contra el Dólar Estadounidense. Se consideran los pares de divisas más utilizados por los inversores por sus bajas comisiones y volatilidades.</p>
                  <img 
                    src={paresp} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText marginLyrcisS" id="ValoresRv"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">CRUZADOS: </strong>Los pares de divisas cruzados o menores son las cotizaciones entre las principales economías del mundo que no incluyen el Dólar Estadounidense.</p>
                  <img 
                    src={parescruzados} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText marginLyrcisS" id="ValoresRe"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">EXOTICOS: </strong>Los pares de divisas exóticos son los menos utilizados por los inversores, son altamente volátiles y con las comisiones más altas del mercado. Se dan por el cruce de una divisa principal generalmente el dólar estadounidense contra una divisa que tiene una economía emergente o débil. Entre ellos están:</p>
                  <img 
                    src={parese} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="PrincipalesP">PRINCIPALES PARES DE DIVISAS</p>
                  <p className="text-justify LyricsText"><strong>Los pares de divisas populares son los más utilizados y con mayor rendimiento en el mercado ya que utilizan el dólar estadounidense como principal referencia económica, sin embargo, cada par tiene sus propias características y comportamiento diferente con respecto a otro.</strong></p>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">EUR/USD: </strong>Es el par de divisas con mayor volumen de negociación diaria y con las comisiones más bajas en el mercado de Forex, ya que representa a las dos economías más grandes del mundo.</p>
                  <img 
                    src={eurozonaeeuu} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '60%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">USD/JPY:  </strong>Es unos de los pares de divisas más estables económicamente ya que el yen japonés es considerado un activo de refugio, en este caso los inversores buscan un refugio en los momentos de mayor crisis económica a nivel mundial.</p>
                  <img 
                    src={eeuujapon} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '60%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">USD/CHF: </strong>Es unos de los pares de divisas menos volátiles y estables económicamente, el franco suizo se considera también un activo de refugio gracias a las grandes reservas de oro del sistema bancario de su país como un respaldo financiero.</p>
                  <img 
                    src={eeuusuiza} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '60%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">GBP/USD: </strong>Es unos de los pares de divisas más volátiles e ideales para los inversores con más experiencia, este par esta correlacionado positivamente con el par EUR/USD debido a las relaciones comerciales entre el Reino Unido y la Unión Europea.</p>
                  <img 
                    src={reinounidoeeuu} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '60%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">AUD/USD: </strong>Es unos de los pares de divisas influenciado por el movimiento de precios de materias primas especialmente por productos de minería, ya que Australia es uno de los principales productores de hierro, oro, aluminio, entre otros.</p>
                  <img 
                    src={australiaeeuu} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '60%', display: 'block',
                    margin: '0 auto'}}>
                  </img> 
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">NZD/USD: </strong>Es unos de los pares de divisas influenciado por el movimiento de precios de materias primas especialmente por productos agrícolas y de ganadería, Este par esta correlacionado positivamente con el par AUD/USD debido a las relaciones comerciales entre Australia y Nueva Zelanda.</p>
                  <img 
                    src={nuevazelandaeeuu} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '60%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">USD/CAD: </strong>Es unos de los pares de divisas influenciado por el movimiento de precios de materias primas especialmente por productos energéticos ya que Canadá es uno de los principales países productores de petróleo y gas natural.</p>
                  <img 
                    src={eeuucanada} 
                    className="img-fluid" 
                    alt="Apertura" 
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
  export default ForexManual;