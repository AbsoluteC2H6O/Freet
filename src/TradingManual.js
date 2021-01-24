import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import BannerTrading from './Manuales/BannerTrading.PNG'
import './App.css';
import './Content1.css';
import './Manuales.css';
import Alcista from './Manuales/Trading/ALCISTA.png';
import analisisfundamental from './Manuales/Trading/analisisfundamental.png';
import analisisgrafico from './Manuales/Trading/analisisgrafico.png';
import analisistecnico from './Manuales/Trading/analisistecnico.png';
import Apalancamiento from './Manuales/Trading/APALANCAMIENTO.png';
import Bajista from './Manuales/Trading/BAJISTA.png';
import comisionspread from './Manuales/Trading/comisionspread.png';
import correlacionnegativa from './Manuales/Trading/correlacionnegativa.png';
import correlacionpos from './Manuales/Trading/correlacionpos.png';
import derivadofinanciero from './Manuales/Trading/derivadofinanciero.png';
import Gap from './Manuales/Trading/GAP.png';
import lateral from './Manuales/Trading/LATERAL.png';
import margenderies from './Manuales/Trading/margenderies.png';
import patronescambio from './Manuales/Trading/patronescambio.png';
import patronescontinuacion from './Manuales/Trading/patronescontinuacion.png';
import patronesvelasjap from './Manuales/Trading/patronesvelasjap.png';
import Pip from './Manuales/Trading/PIP.png';
import Pipeta from './Manuales/Trading/PIPETA.png';
import Punto from './Manuales/Trading/PUNTO.png';
import soporteresis from './Manuales/Trading/soporteresis.png';
import Spread from './Manuales/Trading/SPREAD.png';
import stoploss from './Manuales/Trading/stoploss.png';
import takeprofit from './Manuales/Trading/takeprofit.png';
import trailingstop from './Manuales/Trading/trailingstop.png';
import velaalcista from './Manuales/Trading/velaalcista.png';
import velabajista from './Manuales/Trading/velaalcista.png';
import velajapon from './Manuales/Trading/velajapon.png';
import velaneutral from './Manuales/Trading/velaneutral.png';
import picture2 from './Catalogos/Picture2.png';
import picture3 from './Catalogos/Picture3.png';
import picture4 from './Catalogos/Picture4.png';
import picture5 from './Catalogos/Picture5.png';
import picture1 from './Catalogos/Picture1.png';
import descargar from './Catalogos/descargar.PNG';
import './NavBar1.css';
  class TradingManual extends Component{
      render(){
      
          return(
              <>
               <Container fluid>
                <Row>
                <div className="justify-content-center 
                text-center text-uppercase lyricsManual">
                 <img 
                  src={BannerTrading} 
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
                    >TRADING</h1>
                      <ul>
                      <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Definicion">Definición</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#TiposM">Tipos de mercados financieros</a></li>
                    <li> 
                    
                      <a 
                    className="LyricsText ManualLyrics2"
                    href="#Plataformas">Plataformas de trading</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Contratos">Contratos de futuros</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Estilos">Estilos de trading</a></li>
              
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Sesiones">Sesiones de trading</a>
                    </li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#DerivadosF">Derivados financieros</a>
                    </li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#TiposDF">Tipos de derivados financieros</a>
                    </li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Gestion">Gestión de capital y riesgo</a>
                    </li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#TradingO">¿Trading o Inversión?</a>
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
                    >TERMINOS BASICOS:</h1>
                    <ul>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Definicion">Definición de Pip, Punto y Pipeta</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Apalancamiento">Apalancamiento financiero</a></li>
                    <li><a Criptomonedas
                    className="LyricsText ManualLyrics2 "
                    href="#Margen">Margen de riesgo</a></li>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Bid">Bid y Ask</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Spread">Spread y Swap</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Take">Take profit, Stop loss y Trailing stop</a></li>
                    <li> <a 
                    className="LyricsText ManualLyrics2 "
                    href="#Lotaje">Lotaje </a></li>
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
                    >TIPOS DE ANALISIS:</h1>
                    <ul>
                    <div className="dropdown11">
                  <li className="dropbtn11"><a 
                    className="LyricsText ManualLyrics2 "
                    href="#AnalisisF">Análisis Fundamental:</a></li>
                    <div className="dropdown-content11">
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#FactoresEP">Factores económicos y Políticos</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Calendario">Calendario Económico</a></li>
                  
                    </div>
                  </div>


                  <div className="dropdown11">
                  <li className="dropbtn11"><a 
                    className="LyricsText ManualLyrics2 "
                    href="#AnalisisT">Análisis Técnico:</a></li>
                    <div className="dropdown-content11">
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#IndicadoresT">Indicadores Técnicos</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#FuncionesP">Funciones principales:</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Volatilidad">Volatilidad</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Correlación">Correlación</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Volumen">Volumen</a></li>
                  
                    </div>
                  </div>


                  <div className="dropdown11">
                  <li className="dropbtn11"><a 
                    className="LyricsText ManualLyrics2 "
                    href="#AnálisisG">Análisis Grafico:</a></li>
                    <div className="dropdown-content11">
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Soporte">Soporte y Resistencia</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Gaps">Gaps</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Secuencia">Secuencia de máximos y mínimos</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#TiposT">Tipos de tendencia</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Patrones">Patrones Gráficos</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#Velas">Velas Japonesas</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#TiposVJ">Tipos de velas japonesas</a></li>
                    <li><i className="fa fa-link" aria-hidden="true"></i><a href="#PatronesVJ">Patrones de velas japonesas</a></li>
                    
                    </div>
                  </div>
                    <li><a 
                    className="LyricsText ManualLyrics2 "
                    href="#Consejos">CONSEJOS DE TRADING</a></li>
                    
                    </ul>
                  </Col>
                </Row>
                <Row>
                
                <Col  
                  md={{ span: 9, offset: 1}} 
                  sm={{ span: 11, offset: 1}}>
                    <pre>
                      
                    </pre> 
                    <h1 className="text-center LyricsText marginLyrcisS ManualLyrics3"><strong className="ManualLyrics3Font">TRADING</strong></h1>
                  <hr className="hrs margin"/>
                  <p className="text-center LyricsText marginLyrcisS"><strong className="text-center">
                  El trading es la compra/venta de los activos financieros que se cotizan en la bolsa de valores. Las transacciones se realizan en una plataforma electrónica o bróker, prediciendo el movimiento del precio para tener un beneficio económico, pero al mismo tiempo con el riesgo de tener pérdidas. 
                  </strong></p>
                  <hr className="hrs"/>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="TiposM">TIPOS DE MERCADOS FINANCIEROS</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Los mercados financieros son todas las negociaciones físicas y electrónicas donde las personas pueden comprar o vender productos e instrumentos financieros de manera global. Entre los mercados principales están:</strong></p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MERCADO DE FOREX: </strong>Conocido como el mercado de divisas donde se negocian los intercambios de precios entre los principales pares de divisas de todo el mundo.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MERCADO DE CRIPTOMONEDAS: </strong>Conocido como el mercado electrónico donde se negocian monedas virtuales como el Bitcoin, Altcoins y Tokens</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MERCADO DE COMMODITIES: </strong>Conocido como el mercado de materias primas donde se negocian productos energéticos, agrícolas y metálicos. </p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">MERCADO DE VALORES: </strong>Conocido como el mercado de capitales donde se negocian las acciones de grandes empresas, bonos, fondos de inversión, ETFs o inclusive índices bursátiles.</p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="PlataformasT">PLATAFORMAS DE TRADING</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Las plataformas de trading conocidas como Brókers son aquellas que te permiten operar en los mercados financieros de manera electrónica para comprar o vender activos financieros sin necesidad de adquirirlos, estas plataformas están reguladas por las autoridades competentes que supervisan la practicidad del mismo.</strong></p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Estilos">ESTILOS DE TRADING</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Los estilos de trading son las diferentes técnicas que tiene cada persona para realizar operaciones en los mercados financieros basada en la experiencia, estrategia y tiempo establecido. Existen 4 estilos de trading, entre ellos están:</strong></p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">SCALPING: </strong>Es el estilo más arriesgado y estresante de operar ya que las personas aprovechan la volatilidad del mercado para colocar posiciones de compra/venta durante un tiempo relativamente corto. (1 minuto hasta 1 hora).</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">INTRADIA: </strong>Es un estilo muy utilizado para las personas que abren y cierran las operaciones el mismo día. (1 hora hasta 1 día).</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">SWING TRADING:  </strong>Es el estilo más recomendable para las personas con poca experiencia o tolerantes, requiere de un estudio previo ya que las operaciones se dejan abiertas por días. (1 día hasta 1 semana).</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">POSITION TRADING: </strong>Es el estilo de trading con mayor estudio y tiempo para dejar las operaciones abiertas. El tiempo puede variar entre semanas, meses e inclusive años y al mismo tiempo la toma de ganancias es altamente grande en relación al monto de inversión durante el tiempo calculado.</p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Sesiones">SESIONES DE TRADING</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Las sesiones de trading son los horarios de apertura y cierre de negociación que tienen los diferentes mercados financieros, es importante conocer el cambio de zona horaria entre los países donde operan dichos mercados y el país donde te encuentras para saber con precisión en que momento ingresar al sistema.</strong></p>
                  

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="DerivadosF">DERIVADOS FINANCIEROS</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Los derivados financieros son aquellos activos que representa un valor de un activo subyacente en forma de contratos, es decir estos contratos basan su valor en el activo real que los genera y pueden ser negociados dentro de la bolsa de valores (estandarizados) o fuera de la bolsa. (OTC)</strong></p>
                  
                  <img 
                    src={derivadofinanciero} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="TiposDF">TIPOS DE DERIVADOS FINANCIEROS</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">CONTRATOS A PLAZO:  </strong>Los contratos a plazos o Forwards es el acuerdo privado entre dos inversores para comprar y vender un activo financiero, estableciendo las condiciones, el precio y la fecha futura que están obligados en concretar la negociación.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">SWAPS: </strong>Los swaps son los contratos de intercambio, consiste en el acuerdo privado entre dos inversores para intercambiar activos financieros del mismo valor en una fecha futura.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">CONTRATO DE FUTUROS: </strong>Los contratos de futuros tiene el mismo concepto a los Forwards solo que en este caso son contratos estandarizados.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">CONTRATO DE OPCIONES: </strong>Los contratos de opciones son similares a los Forwards con la diferencia que son contratos estandarizados y en este caso el comprador tiene el derecho, pero no la obligación de comprar o vender un activo financiero luego de expirar la fecha de negociación.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">CFD: </strong>Los CFDs o contrato por diferencia es la compra y venta de activos financieros que cotizan en la bolsa de valores sin necesidad de adquirirlos. Las operaciones son contratos con el bróker y las ganancias o pérdidas se dan por la diferencia del precio de entrada y el precio de cierre en un periodo de tiempo.</p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Gestion">GESTION DE CAPITAL Y RIESGO</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>La gestión de capital y riesgo ambos conocidos como “Plan de Trading” es la única estrategia efectiva para tener un trading rentable, consiste en administrar las ganancias y pérdidas durante un periodo de tiempo establecido y calcular los riesgos al momento de hacer una operación.</strong></p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">GESTION DE CAPITAL: </strong>Es la administración de las ganancias y pérdidas durante un periodo de tiempo establecido. Se puede calcular por día, semana, mes y año.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">GESTION DE RIESGO: </strong>Es el control de riesgo antes de realizar una operación en el sistema, para ello se debe calcular ciertos factores como el número de operaciones, % de riesgo, apalancamiento, spread, take profit, stop loss, entre otros.</p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="TradingO">¿TRADING O INVERSION?</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>La gran diferencia de estos términos radica en que hacer <mark>trading</mark> puedes comprar y vender un activo financiero en el bróker sin la necesidad de adquirirlo y así tener una ganancia o una perdida en tiempo real, por otro lado, <mark>inversión </mark>es la adquisición legal de un activo financiero, un ejemplo es comprar acciones o almacenar criptomonedas.</strong></p>
                  
                  <pre>
                      
                  </pre> 
                  <h1 className="text-center LyricsText marginLyrcisS ManualLyrics3"><strong className="ManualLyrics3Font">TERMINOS BASICOS</strong></h1>
           
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="DefinicionP">DEFINICION DE PIP/PUNTO/PIPETA</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>En los mercados financieros cada uno de los activos tienen un precio de cotización representado en números decimales que se miden en pips o puntos y se utilizan como unidades estandarizadas de movimiento de precios, sin embargo, existe una tercera unidad de movimiento llamada pipetas siendo la más pequeña y precisa.</strong></p>
                  
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PIP:  </strong>Es el movimiento menor de precios de un activo financiero y se encuentra después del decimal, Ejemplo:</p>
                  
                  <img 
                    src={Pip} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PUNTO: </strong>Es el movimiento mayor de precios de un activo financiero y se encuentra antes del decimal, Ejemplo:</p>
                  
                  <img 
                    src={Punto} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PIPETA:  </strong>Es el movimiento de precisión y el movimiento más pequeño de precios de un activo financiero y se encuentra después del decimal, en el último digito. Ejemplo:</p>
                  
                  <img 
                    src={Pipeta} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Apalancamiento">APALANCAMIENTO FINANCIERO</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>El apalancamiento financiero es un multiplicador de inversión para incrementar las ganancias de una operación, pero al mismo tiempo puede incrementar las perdidas en la misma proporción. </strong></p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Los tipos de apalancamiento vienen en unidades fraccionadas (1:50,1:100,1:200;1:500) y la explicación básica tomando como ejemplo el multiplicador 1:50 consiste que por cada dólar invertido se multiplicará 50 veces el % de rentabilidad.</strong></p>
                  
                  <p className="text-justify LyricsText marginLyrcisS"><strong>CALCULO DE APALANCAMIENTO:</strong>El cálculo de apalancamiento consiste básicamente en saber el valor de la unidad de movimiento (pip o punto) y multiplicar dicho valor por la cantidad que estamos dispuesto a ganar o perder. Para saber el valor de la unidad basta con solo indicar en el bróker el tipo de apalancamiento y el importe.</p>
                  <img 
                    src={Apalancamiento} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Margen">MARGEN DE RIESGO</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>El margen de riesgo es el límite máximo de fondos de inversión para mantener las operaciones abiertas en el sistema, el fondo de inversión puede ser todo el capital o un porcentaje del mismo.</strong></p>
                  
                  <p className="text-justify LyricsText marginLyrcisS"><strong>CALCULO DE MARGEN DE RIESGO:</strong>Para calcular el margen de riesgo consiste básicamente en saber la cantidad de pips o puntos disponibles por operación según el capital de la cuenta, para esto se debe aplicar la siguiente fórmula:</p>
                  <img 
                    src={margenderies}
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Bid">BID Y ASK</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">BID: </strong>Es el precio máximo que la plataforma de trading nos ofrece para poder vender el activo financiero. La posición de venta estará siempre por debajo de la cotización actual.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">ASK: </strong>Es el precio máximo que la plataforma de trading nos ofrece para poder comprar el activo financiero. La posición de compra estará siempre por encima de la cotización actual.</p>
                 
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Spread">SPREAD Y SWAP</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">SPREAD: </strong>El spread es la comisión que cobra el bróker al momento de abrir una operación, dicha comisión consiste en el diferencial de orden de compra/venta (Ask/Bid) con el precio de cotización actual y se mide en Pips o Puntos dependiendo del mercado financiero. El spread es la razón de la cual las operaciones comiencen en negativo. </p>
                  
                  <img 
                    src={Spread} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>CALCULO DE SPREAD: </strong>El cálculo del spread consiste básicamente en saber el valor del spread y multiplicarlo con el valor de unidad (pip o punto) para determinar la comisión del broker en la divisa correspondiente. El valor del spread lo indica el bróker.</p>
                  <img 
                    src={comisionspread} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">SWAP: </strong>Es la comisión nocturna que cobra el bróker para dejar las operaciones abiertas durante la noche, dicha comisión depende de cada activo y el monto de importe a utilizar.</p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Take">TAKE PROFIT/STOP LOSS/TRAILING STOP</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">TAKE PROFIT: </strong>Es el límite de ganancias que la persona desea tener en una operación y se coloca manualmente en el broker a manera de porcentaje, cotización o como importe de ganancia.</p>
                  <img 
                    src={takeprofit} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">STOP LOSS:  </strong>Es el límite de pérdidas que la persona desea tener en una operación y se coloca manualmente en el bróker a manera de porcentaje, cotización o como importe de perdida.</p>
                  <img 
                    src={stoploss} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">TRAILING STOP:  </strong>Es la actualización automática del stop loss en la toma de ganancias de las operaciones, para esto se debe activar la casilla de trailing stop y colocar el porcentaje, cotización o el importe de variación.</p>
                  <img 
                    src={trailingstop} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '80%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Lotaje">LOTAJE</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>El lotaje es un término principal de trading y quizás confuso para muchas personas, en pocas palabras significa el tamaño de inversión para abrir una operación en el bróker y se clasifican en 3 tipos de lotes según el mercado financiero a utilizar. </strong></p>
                  
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">Lote estándar: </strong>Es el tamaño más grande para abrir una operación.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">Mini lote: </strong>Es el tamaño intermedio para abrir una operación</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">Micro lote: </strong>Es el tamaño más pequeño para abrir una operación.</p>
                  <pre>
                
                  </pre> 
                  <h1 className="text-center LyricsText marginLyrcisS ManualLyrics3"><strong className="ManualLyrics3Font">TIPOS DE ANALISIS</strong></h1>
                
                  <h3 className="text-center LyricsText marginLyrcisS ManualLyrics3"><strong className="ManualLyrics3Font">ANALISIS FUNDAMENTAL</strong></h3>
                    
                  <hr className="hrs margin"/>
                  <p className="text-center LyricsText marginLyrcisS"><strong className="text-center">
                  El análisis fundamental es una metodología utilizada en los mercados financieros que consiste en el estudio económico, político y social según las noticias y anuncios actuales de cada país que pueden influir en el movimiento de precios de los activos financieros.  
                  </strong></p>
                  <hr className="hrs"/>

                  <img 
                    src={analisisfundamental} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '40%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Factores">FACTORES ECONOMICOS Y POLITICOS</p>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2"><mark>FACTORES ECONOMICOS: </mark></strong>Son todos los índices estadísticos micro y macroeconómicos de un país entre ellos están: PIB, PMI, IPP, IPC, FED Y NFP.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2"><mark>FACTORES POLITICOS: </mark></strong>Son todos los eventos políticos/sociales entre los países y dentro del mismo territorio, ejemplo: tiempos de tensión internacional, políticas cambiantes, desastres naturales, guerras comerciales, entre otros.</p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Calendario">CALENDARIO ECONOMICO</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>El calendario económico es una de las herramientas informativas más relevantes donde se puede visualizar todos los eventos económicos y políticos de cada país, reuniones de los bancos centrales, días festivos, resultados empresariales, fondos de inversión, entre otros. El calendario económico está divido en 4 partes:</strong></p>
                  
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i>Fecha y Hora de publicación.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i>País.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i>Importancia de la publicación.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i>Descripción del evento.</p>
                  
                  <h3 className="text-center LyricsText marginLyrcisS ManualLyrics3"><strong className="ManualLyrics3Font">ANALISIS TECNICO</strong></h3>
                  
                  <hr className="hrs margin"/>
                  <p className="text-center LyricsText marginLyrcisS"><strong className="text-center">
                  El análisis técnico es una metodología utilizada en los mercados financieros que consiste en el estudio de graficas algorítmicas o datos técnicos en tiempo real que ayudan a determinar la acción del precio de los activos financieros.</strong></p>
                  <hr className="hrs"/>

                  <img 
                    src={analisistecnico} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '40%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Indicadores">INDICADORES TECNICOS</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Los indicadores técnicos son cálculos matemáticos y algorítmicos a manera de líneas gráficas, cada uno con una función diferente para determinar el movimiento del precio en los mercados financieros, entre los más importantes están:</strong></p>
                  
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i>Medias Móviles (MA)</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i>Media Móvil (MACD)</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i>Índice de fuerza Relativa (RSI)</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i>Bandas Bollinger</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i>Oscilador Estocástico</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i>Líneas Fibonacci</p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Funciones">FUNCIONES PRINCIPALES</p>
                  
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">VOLATILIDAD: </strong>La volatilidad indica la velocidad del movimiento del precio que puede tener un activo financiero durante un periodo de tiempo determinado. Se considera volatilidad alta cuando se produce un movimiento rápido del precio en un periodo de tiempo corto y volatilidad baja cuando el movimiento de precio es gradual.</p>
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">CORRELACION: </strong>La correlación es la comparación del movimiento de precios de dos activos financieros, existen dos tipos de correlaciones:</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Correlación positiva: </strong>Es el movimiento de precios de un activo en relación a otro que se mueve en la misma dirección. Una correlación +1 significa que el movimiento de precios es 100% idéntico, Ejemplo:</p>
                  <img 
                    src={correlacionpos} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '55%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Correlación negativa: </strong>Es el movimiento de precios de un activo en relación a otro que se mueve en dirección contraria. Una correlación -1 significa que el movimiento de precios es 100% opuesto, Ejemplo:</p>
                  <img 
                    src={correlacionnegativa} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '55%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">VOLUMEN: </strong>El volumen consiste en la liquidez de un activo financiero por la cantidad de inversores que negocian dicho activo durante un periodo de tiempo determinado, el volumen de negociación puede darse tanto en compra como en venta.</p>
                  
                  <h3 className="text-center LyricsText marginLyrcisS ManualLyrics3"><strong className="ManualLyrics3Font">ANALISIS GRAFICO</strong></h3>
                    
                  <hr className="hrs margin"/>
                  <p className="text-center LyricsText marginLyrcisS"><strong className="text-center">
                  El análisis grafico es un complemento del análisis técnico, pero en este caso consiste en el estudio manual de las gráficas de trading donde se estudian los tipos de tendencia, análisis geométrico, velas japonesas, soportes y resistencias, entre otros.</strong></p>
                  <hr className="hrs"/>
                  <img 
                    src={analisisgrafico} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '40%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Soporte">SOPORTE Y RESISTENCIA</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>El soporte y la resistencia son los niveles donde el precio se puede frenar y tener un retroceso (Pull back) o romperse. Estos niveles se colocan manualmente donde la resistencia está por encima del precio actual y el soporte está por debajo del precio actual.</strong></p>
                  <img 
                    src={soporteresis} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Gaps">GAPS</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>El gap es un espacio vacío en la gráfica de velas japonesas provocado por un movimiento rápido del precio, la mayoría de los gaps se forman en el mercado de criptomonedas por su volatilidad y en las acciones por los cierres y aperturas de la bolsa de valores de cada país.</strong></p>
                  <img 
                    src={Gap} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Secuencias">SECUENCIAS DE MAXIMOS Y MINIMOS</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Las secuencias de máximos y mínimos indican los diferentes niveles que el precio alcanzó durante un periodo de tiempo determinado, estos niveles se pueden observar en los tipos de tendencia alcista y bajista.</strong></p>
                  
                  <p className="text-center text-uppercase LyricsTimelineSubs" id="TiposT">TIPOS DE TENDENCIA</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Las tendencias son aquellas que indican la dirección principal del movimiento de precios en los mercados financieros durante un periodo de tiempo determinado, existen 3 tipos de tendencia:</strong></p>
                  
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">ALCISTA: </strong>La tendencia alcista significa un movimiento ascendente de precios formando máximos mayores y mínimos mayores, está dominada por los toros que son el símbolo de fuerza.</p>
                  
                  <img 
                    src={Alcista} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>


                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">BAJISTA: </strong>La tendencia bajista significa un movimiento descendente de precios formando máximos menores y mínimos menores, está dominada por los osos que son el símbolo de debilidad.</p>
                  
                  <img 
                    src={Bajista} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">LATERAL:  </strong>a tendencia lateral significa un movimiento de indecisión de precios que está sumergido entre un soporte y una resistencia, es una batalla entre toros y osos. </p>
                  
                  <img 
                    src={lateral} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>



                  <p className="text-center text-uppercase LyricsTimelineSubs" id="Patrones">PATRONES GRAFICOS</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Los patrones gráficos son configuraciones geométricas que se crean frecuentemente por el movimiento de precios de un activo financiero en un periodo de tiempo determinado, existen dos tipos de patrones gráficos:</strong></p>
                  
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PATRONES DE CONTINUACION: </strong>Los patrones de continuación son aquellos que indican un posible seguimiento de la tendencia previa.</p>
                  
                  <img 
                    src={patronescontinuacion} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>


                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PATRONES DE CAMBIO:  </strong>Los patrones de cambio son aquellos que indican un posible cambio de la tendencia previa.</p>
                  
                  <img 
                    src={patronescambio} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-center text-uppercase LyricsTimelineSubs" id="VelasJ">VELAS JAPONESAS</p>
                  <p className="text-justify LyricsText marginLyrcisS"><strong>Las velas japonesas son la representación gráfica del movimiento del precio de un activo financiero a manera de velas que se crean sucesivamente durante un periodo de tiempo determinado. </strong></p>
                  
                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">ESTRUCTURA DE VELA JAPONESA: </strong>Las velas japonesas indican 4 cotizaciones de precios en un periodo de tiempo. </p>
                  
                  <p className="text-justify LyricsText marginLyrcisS"><mark>Precio de apertura:</mark>Cuerpo de vela inicial</p>
                  <p className="text-justify LyricsText marginLyrcisS"><mark>Precio de cierre: </mark>Cuerpo de vela final.</p>
                  <p className="text-justify LyricsText marginLyrcisS"><mark>Precio máximo:</mark>Mecha superior</p>
                  <p className="text-justify LyricsText marginLyrcisS"><mark>Precio mínimo: </mark>Mecha inferior</p>
                  <img 
                    src={velajapon} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">TIPO DE VELAS JAPONESAS: </strong></p>
                  <p className="text-justify LyricsText marginLyrcisS"><mark>ALCISTA: </mark>Las velas alcistas indican la intensión de compra de los inversores. Existen dos tipos de velas alcista:</p>
                  <img 
                    src={velaalcista} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-justify LyricsText marginLyrcisS"><mark>BAJISTA: </mark>Las velas bajistas indican la intensión de venta de los inversores. Existen dos tipos de velas bajista:</p>
                  <img 
                    src={velabajista} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="text-justify LyricsText marginLyrcisS"><mark>NEUTRAL: </mark>Las velas neutrales indican la indecisión de los inversores. Están conformadas por las velas de cuerpo corto y la familia de velas Doji:</p>
                  <img 
                    src={velaneutral} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <p className="LyricsText marginLyrcisS"><i className="fa fa-th-large" aria-hidden="true"></i> <strong className="LyricsTimelineSubs2">PATRONES DE VELAS JAPONESAS:  </strong>Los patrones de velas japonesas es la combinación de varios tipos de velas japonesas que se crean sucesivamente en un periodo de tiempo determinado.</p>
                  <img 
                    src={patronesvelasjap} 
                    className="img-fluid" 
                    alt="Apertura" 
                    style={{width: '50%', display: 'block',
                    margin: '0 auto'}}>
                  </img>

                  <pre>
                      
                      </pre> 
                      <h1 className="text-center LyricsText marginLyrcisS ManualLyrics3"><strong className="ManualLyrics3Font">CONSEJOS DE TRADING</strong></h1>
                    <hr className="hrs margin"/>
                    <p className="LyricsText marginLyrcisS">1. <i>Eliga un solo tipo de mercado financiero en que tengas más conocimiento y opera entre 1 a 3 activos financieros diferentes como máximo.</i></p>
                    <p className="LyricsText marginLyrcisS">2. <i>Define tu estrategia y ten a la mano siempre un plan de trading para gestionar tus ganancias y controlar las pérdidas en un periodo de tiempo establecido.</i></p>
                    <p className="LyricsText marginLyrcisS">3. <i>Define un estilo de trading adecuado a tus necesidades. El swing trader es el más recomendado.</i></p>
                    <p className="LyricsText marginLyrcisS">4. <i>Usar siempre take profit y stop loss para asegurar tanto las ganancias como controlar las perdidas en cada operación.</i></p>
                    <p className="LyricsText marginLyrcisS">5. <i>Es recomendable no operar activos financieros de alta volatilidad en un día marcado de anuncios económicos y políticos de alta importancia.</i></p>
                    <p className="LyricsText marginLyrcisS">6. <i>Usar un apalancamiento mínimo y adecuado según el importe o tamaño de lote establecido y escoger activos financieros con un valor de spread bajo.</i></p>
                    <p className="LyricsText marginLyrcisS">7. <i>Usar un porcentaje de riesgo mínimo en cada operación entre 1-5%. del capital disponible.</i></p>
                    <p className="LyricsText marginLyrcisS">8. <i>Nunca operes en los mercados financieros como un juego de azar.</i></p>
                    <p className="LyricsText marginLyrcisS">9. <i>La tendencia es tu amiga y es recomendable operar siguiendo la tendencia previa, sin embargo, es importante estudiar los puntos de ruptura en zonas de soporte y resistencia, patrones gráficos y velas japonesas.</i></p>
                    <p className="LyricsText marginLyrcisS">10. <i>Controlar las emociones en cada operación sin caer en la codicia o en el miedo, tienes que reconocer tus límites de ganancias y de perdida.</i></p>
                  
                    <hr className="hrs margin"/>
                    </Col>              
                </Row>

                <Row >
                  <Col
                    className="ManualLyrics4Font"
                    xs={12}
                    lg={12}
                    md={12}
                    sm={12}
                  >
                
                <h4 className="text-left LyricsText ManualLyrics4">CATALOGOS</h4>
                 </Col>
                 </Row>
                 <Row 
                 className="marginElement">
                   <Col
                      xs={{ span: 4, offset: 1}}
                      lg={{ span: 2, offset: 2}}
                      md={{ span: 2, offset: 2}}
                      sm={{ span: 4, offset: 1}}
                    
                   >
                    
                     <a href="https://onedrive.live.com/embed?cid=2E431B176AD0DFA1&resid=2E431B176AD0DFA1%212309&authkey=APUaHQJ43gtPbLY&em=2" id="enlaceDescargarPdf" download>
                    <button
                     className="imagCat"
                    >
                    <img 
                      src={picture2} 
                      className="img-fluid" 
                      alt="Catalogo1" 
                      style={{width: '100%'}}>
                    </img>
                    <button class="btn"><i class="fa fa-download"></i> Dercargar</button>
                    </button>
                    </a>
                   </Col>
                   <Col
                    xs={{ span: 4, offset: 0}}
                    lg={{ span: 2, offset: 0}}
                    md={{ span: 2, offset: 0}}
                    sm={{ span: 4, offset: 0}}
                   >
                      <a href="CatPatronV.pdf" download="catalogoPatronVelas">
                      <button
                      className="imagCat"
                      >
                    <img 
                      src={picture3} 
                      className="img-fluid " 
                      alt="Catalogo2" 
                      style={{width: '100%'}}>
                    </img>
                    <button class="btn"><i class="fa fa-download"></i> Dercargar</button>
                    </button>
                    </a>
                   </Col>
                   <Col
                    xs={{ span: 4, offset: 0}}
                    lg={{ span: 2, offset: 0}}
                    md={{ span: 2, offset: 0}}
                    sm={{ span: 4, offset: 0}}
                   >
                    <a href="CatindicadorT.pdf" download="catalogoIndicadorTecnico">
                    <button
                     className="imagCat"
                    >
                    <img 
                      src={picture4} 
                      className="img-fluid" 
                      alt="Catalogo3" 
                      style={{width: '100%'}}>
                    </img>
                    <button class="btn"><i class="fa fa-download"></i> Dercargar</button>
                    </button>
                    </a>
                   </Col>
                   <Col
                      xs={{ span: 4, offset: 0}}
                      lg={{ span: 2, offset: 0}}
                      md={{ span: 2, offset: 0}}
                      sm={{ span: 4, offset: 0}}
                   >
                     <a href="TradingPlan.xlsx" download="catalogoPlanTrading">
                     <button
                      className="imagCat"
                     >
                    <img 
                      src={picture5} 
                      className="img-fluid" 
                      alt="Catalogo4" 
                      style={{width: '100%'}}>
                    </img>
                    <button class="btn"><i class="fa fa-download"></i> Dercargar</button>
                    </button>
                    </a>
                   </Col>
                   
                 </Row>
                 
              </Container>
              </>
          );
      }
  }
  export default TradingManual;

  /**
   *  
   *  <a href="./pdf1" target="_self">
                    <button
                     className="imagCat"
                    >
                    <img 
                      src={picture2} 
                      className="img-fluid" 
                      alt="Catalogo1" 
                      style={{width: '100%'}}>
                    </img>
                    <button class="btn"><i class="fa fa-download"></i> Download</button>
                    </button>
                    </a>
   * https://es.wikihow.com/crear-un-bot%C3%B3n-de-descarga#/Imagen:Create-a-Download-Button-Step-8-Version-2.jpg
   * http://trucosycursos.es/incrustrar-o-embeber-un-archivo-excel-en-una-pagina-web-html/
   * https://es.stackoverflow.com/questions/244067/como-visualizar-un-excel-en-una-tabla-html-y-luego-enviarlo-a-mi-base-de-datos
   * https://webdesign.tutsplus.com/es/tutorials/quick-tip-using-the-html5-download-attribute--cms-23880
   * Por el momento, podemos añadir una alternativa decente, como proporcionar instrucciones extra debajo del enlace de descarga para navegadores que no lo soportan. Para hacer eso, necesitarás descargar Modernizr con la prueba de la funcionalidad  download incluída.

Configura la compilación de Modernizr.
Luego podemos agregar el siguiente script.

if ( ! Modernizr.adownload ) {
  var $link = $('a');

	$link.each(function() {
		var $download = $(this).attr('download');
	
		if (typeof $download !== typeof undefined && $download !== false) {
      var $el = $('<div>').addClass('download-instruction').text('Right-click and select "Download Linked File"');
      $el.insertAfter($(this));
		}

	});
}
    <a href="/images/myw3schoolsimage.jpg" download="w3logo">
  <img src="/images/myw3schoolsimage.jpg" alt="W3Schools">
</a>
   <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>HTML5 Download Attribute</title>
        <meta rel="description" content="Basic example of using HTML5 download attribute to force non-downloadable file to download by the browser.">
        <link rel="stylesheet" href="css/style.css">
        <script src="js/modernizr.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    </head>
    <body>
        <header class="site-header cf">
            <h1>HTML5 Download Attribute</h1>
            <a class="back-to-article" href="http://webdesign.tutsplus.com/tutorials/quick-tip-using-the-html5-download-attribute--cms-23880">Back to the Tutorial</a>
        </header>
        <div class="site-content cf">
           <a class="btn btn-download" href="download/acme-doc-2.0.1.txt" download="Acme Documentation (ver. 2.0.1).txt">Download Text</a>
        </div>
        <script src="js/scripts.js"></script>

<!--analytics-->
<script src="http://tutsplus.github.io/github-analytics/ga-tracking.min.js"></script>

    </body>
</html>
   */