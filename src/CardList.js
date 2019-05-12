import React from 'react';
import Card from './Card';
import styled from 'styled-components';

function CardList(props) {
  const Cards = styled.ul`
    margin: 20px;
    padding: 0;
  `;
  return (
    <React.Fragment>
      <Cards>
        {props.cards.map(card => (
          <Card
            card={card}
            key={card._id}
            onClick={() => props.onClick(card)}
          />
        ))}
      </Cards>
    </React.Fragment>
  );
}

export default CardList;
