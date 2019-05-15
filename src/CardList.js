import React from 'react';
import Card from './Card';
import styled from 'styled-components';

function CardList(props) {
  const Cards = styled.ul`
    margin: 20px;
    padding: 0;
  `;
  return (
    <Cards>
      {props.cards.map(card => (
        <Card
          card={card}
          key={card._id}
          onClick={() => props.onClick(card)} //besserer Name für props.onClick --> onBookmark
        />
      ))}
    </Cards>
  );
}

export default CardList;
