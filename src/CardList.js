import React from 'react';
import Card from './Card';

function CardList(props) {
  return (
    <React.Fragment>
      <ul>
        {props.cards.map(card => (
          <Card
            card={card}
            key={card._id}
            onClick={() => props.onClick(card)}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default CardList;
