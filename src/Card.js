import React from 'react'
import {Button, Card} from "semantic-ui-react"

const Card= ({question, answer, id}) => {
return(
  <Card.Header key={`card-${id}`}>
    <Card.Header>{question}</Card.Header>
    <Card.Description>{answer}</Card.Description>
    <Card.Description>
      <Button color="blue" size="small">Delete</Button>
    </Card.Description>.
  </Card.Header>
)
}
  
  
  



export default Card

