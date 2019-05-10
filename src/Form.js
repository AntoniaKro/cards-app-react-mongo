import React from 'react';

function Form({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const tags = event.target.tags.value.split(' ');

    onSubmit(title, description, tags);
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label htmlFor="title">Title</label>
      <input name="title" placeholder="type title..." id="title" />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        placeholder="type description..."
        id="description"
      />
      <label htmlFor="tags">Tags</label>
      <input name="tags" placeholder="type tags divided by space" id="tags" />
      <button>+</button>
    </form>
  );
}

export default Form;
