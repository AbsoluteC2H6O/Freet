import React, {Component} from "react";
import './App.css';
import './NavBar2.css';
import { Provider } from "mobx-react";
import MenuIdea from './MenuIdea';
import IdeaStore from './stores/IdeaStore';
import { Container } from "react-bootstrap";
  class ideas extends Component{
      render(){
        
          return(
            
              <>
              <Container fluid>
                <Provider IdeaStore={IdeaStore}>
                    <MenuIdea/>
                </Provider>
              </Container>
              </>
          );
      }
  }
  export default ideas;