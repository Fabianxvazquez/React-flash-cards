import React from 'react';
import { Card, Button } from 'semantic-ui-react';
// import Card from "./Card"

const Cards = ({ cards }) => (
  <Card.Group>
    <Card>
      {cards.map(card => (
        <Card.Content key={card.id}>
          <Card.Header>{card.question}</Card.Header>
          <Card.Description>{card.answer}</Card.Description>
          <Card.Description>
            <Button color="blue" size="small">Delete</Button>
          </Card.Description>
        </Card.Content>
      ))}
    </Card>
  </Card.Group>
);

export default Cards;
