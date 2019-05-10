import React from 'react';
import Tag from './Tag';

function Card(props) {
  return (
    <li>
      <p>{props.card.title}</p>
      <p>{props.card.description}</p>
      <ul>
        {props.card.tags.map(tag => (
          <Tag key={tag} tag={tag} />
        ))}
      </ul>
      {props.card.bookmark && <button>BOOKMARKED</button>}
    </li>
  );
}
export default Card;
