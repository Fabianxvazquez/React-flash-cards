import React, {Component} from 'react';
import './App.css'
import { Container, Header, } from "semantic-ui-react"; 
import Cards from "./Cards"

class App extends Component {
  state = {
    cards: [
      { id:1, question:"question1", answer: "answer1" },
      { id:2, question:"question2", answer: "answer2" },
      { id:3, question:"question3", answer: "answer3" },
    ],
  }


  
  render(){
    return (
      <Container>
        <Header as="h1">React Index Cards</Header>
        <Cards cards={this.state.cards} />
      </Container>
    )
  }
}
export default App;
