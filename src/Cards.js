import React from 'react';
import { Card } from 'semantic-ui-react';
import Card from "./Card"

const Cards = props => (
  <Card>
        {props.cards.map(card => (
          <Card
           key={card}
            // foo={props.deleteCallback}
            // key={`contact-${contact.id}`}
            // name={contact.name}
            // phone={contact.phone}
            // id={contact.id}
            {...card}
          />
        ))}
  </Card>
)

  
    


export default Cards
