import React from 'react';
import styled from 'styled-components';

function Form({ onSubmit }) {
  const StyledForm = styled.form`
    padding: 15px;
    display: flex;
    flex-direction: column;
  `;
  const StyledInput = styled.input`
    padding: 5px;
    margin: 5px 0;
    border-radius: 5px;
    font-size: 18px;
  `;

  const StyledButton = styled.button`
    margin: 10px 0;
    font-size: 15px;
    background: rgb(69, 197, 165);
    color: white;
    padding: 10px;
    font-size: 25px;
    border-radius: 5px;
  `;

  function handleSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const tags = event.target.tags.value.split(' ');

    onSubmit(title, description, tags);
  }

  return (
    <StyledForm onSubmit={event => handleSubmit(event)}>
      <label htmlFor="title">Title</label>
      <StyledInput name="title" placeholder="type title..." id="title" />
      <label htmlFor="description">Description</label>
      <StyledInput
        name="description"
        placeholder="type description..."
        id="description"
      />
      <label htmlFor="tags">Tags</label>
      <StyledInput
        name="tags"
        placeholder="type tags divided by space"
        id="tags"
      />
      <StyledButton>+</StyledButton>
    </StyledForm>
  );
}

export default Form;
