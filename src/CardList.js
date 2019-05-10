import React from 'react';
import Card from './Card';

function CardList({ cards }) {
  return (
    <React.Fragment>
      <ul>
        {cards.map(card => (
          <Card card={card} key={card._id} />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default CardList;
