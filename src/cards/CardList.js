import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Cards = styled.ul`
  margin: 20px;
  padding: 0;
`;
function CardList({ cards, onBookmarkClick }) {
  return (
    <Cards>
      {cards.map(card => (
        <Card
          card={card}
          key={card._id}
          onClick={() => onBookmarkClick(card)}
        />
      ))}
    </Cards>
  );
}

export default CardList;
