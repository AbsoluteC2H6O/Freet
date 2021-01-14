import React,{Component} from 'react';
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button';


import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import './WhatsaapWidget.css'
import ReactWhatsapp from 'react-whatsapp';
const WhatsappWidget = () => (
  <div className="whatsaapWidget">
    <ReactWhatsapp number="584140747822" message="Hello World!!!" />
</div>
);
const WhatsappWidget2 = () => {
  return (
    <>
 
 
  <div  classname="WhatsaapWidget">
  <WhatsAppWidget 
 
  phoneNumber='584126573181'
  textReplyTime=''
  message='Hola 👋🏼Que podemos hacer por ti?'
  companyName='Freet' 
  sendButton='Enviar'
  /> 
 
  
  </div>
  </>);
}
/* */
class WhatsappWidget3 extends Component{
  render(){
    return(
      <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" message='Hola 👋🏼Que podemos hacer por ti?'></link>
      <a href="https://api.whatsapp.com/send?phone=584126573181&text=Hola%21%20me%20%20puedes%20m%C3%A1s%20ayudar?%20%20" className="float" target="_blank">
      <i className="fa fa-whatsapp my-float"></i>
      </a>
      </div>
    );
  }
}

export default WhatsappWidget3;

/**
 * 
 * <div>

<TelegramLoginButton
    botName="@carlossantaromita"
    dataOnauth={(user: TelegramUser) => console.log(user)}
  />
 </div>
 */