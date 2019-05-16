import React from 'react';
import CardList from './CardList';

function CardPage({ cards, onBookmarkClick }) {
  return <CardList cards={cards} onBookmarkClick={onBookmarkClick} />;
}
export default CardPage;
