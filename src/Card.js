import React from 'react';
import Tag from './Tag';
import styled from 'styled-components';

function Card(props) {
  const CardListItem = styled.li`
    list-style: none;
    border: 2px solid white;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    background: rgb(232, 236, 235);
  `;

  const Title = styled.p`
    font-family: monospace;
    font-size: 25px;
    color: rgb(5, 87, 66);
  `;

  const Tags = styled.p`
    padding: 5px;
    list-style: none;
    display: flex;
  `;

  const Desc = styled.p`
    border-bottom: 2px solid rgb(69, 197, 165);
    border-top: 2px solid rgb(69, 197, 165);
    padding: 5px;
  `;

  const StyledButton = styled.button`
    margin: 10px;
    font-size: 15px;
    background: rgb(69, 197, 165);
    color: white;
    border-radius: 5px;
  `;

  return (
    <CardListItem>
      <Title>{props.card.title}</Title>
      <Tags>
        {props.card.tags.map(tag => (
          <Tag key={tag} tag={tag} />
        ))}
      </Tags>
      <Desc>{props.card.description}</Desc>
      <StyledButton onClick={props.onClick}>
        {props.card.bookmark ? 'BOOKMARKED' : 'BOOKMARK'}
      </StyledButton>
    </CardListItem>
  );
}
export default Card;
