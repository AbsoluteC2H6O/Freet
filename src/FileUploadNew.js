
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import React, {Component} from "react";
import  {Row} from "react-bootstrap";

//import firebase from 'firebase';

class FileUploadNew extends Component {
  constructor () {
    super();
    this.state = {
      uploadValue: 0
    };
  }

  render () {
    return (
      <div>
        <progress value={this.state.uploadValue} max='100'>
          {this.state.uploadValue} %
        </progress>
        <br/>
        <input type="file" onChange={this.props.onUpload} />
        <br/>
        <img width="320" src={this.state.picture} alt=""/>
      </div>
    )
  }
}


class FileUploadNew2 extends Component{
  constructor(props){
    super(props)
    this.state ={
      uploadValue: 0,
     
    };
  }

  
  render(){
    return(
      <>
      <Row>
         <progress value={this.state.uploadValue} max="100">
        {this.state.uploadValue} %
      </progress>
      </Row>
      <Row>
        <br/>
      <input type='file' onChange={this.props.onUpload}/>
      </Row>
     
      <Row>
      <img width="520" src={this.state.picture} alt=""/>
      
      </Row>
     
      </>
    );
  }
}
  export default FileUploadNew;