import React, { Component } from 'react';
import { getCards, postCards, setLocal, getLocal } from './services';
import CardList from './CardList';
import Form from './Form';

export default class App extends Component {
  state = {
    cards: getLocal() || []
  };

  componentDidMount() {
    getCards()
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error));
  }

  createCard = (title, description, tags) => {
    postCards({ title, description, tags })
      .then(card => {
        this.state.cards.push(card);
        this.setState({ cards: this.state.cards });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { cards } = this.state;
    setLocal(cards);

    return (
      <main>
        <h1>Cards</h1>
        <Form onSubmit={this.createCard} />
        <CardList cards={cards} />
      </main>
    );
  }
}

/* 
Backend: enhance model and add PATCH

Add a boolean property bookmarked to your cardSchema with a default value of false

Add a patch method to your server in order to be able to update a card


Frontend: Update Card (Advanced)

Add a text to each card that says bookmark or bookmarked depending on the card data
Add a new method patchCard to services

Use that on click on bookmark to toggle the bookmark-state on the server
When the server responds, update the card in your state */
