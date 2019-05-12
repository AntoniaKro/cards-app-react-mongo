import React from 'react';
import styled from 'styled-components';

function Tag(props) {
  const TagItem = styled.span`
    margin: 5px 7px;
    background: rgb(69, 197, 165);
    padding: 3px 5px;
    color: white;
    border-radius: 5px;
  `;

  return <TagItem>{props.tag}</TagItem>;
}
export default Tag;
