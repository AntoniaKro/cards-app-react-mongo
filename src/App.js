import React, { Component } from 'react';
import { getCards, postCard, setLocal, getLocal, updateCard } from './services';
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
    //this.setState.. optimistic Update
    postCard({ title, description, tags })
      .then(card => {
        this.state.cards.push(card);
        this.setState({ cards: this.state.cards }); //pessimistic Update
      })
      .catch(err => console.log(err));
  };

  componentDidUpdate(prevProps, prevState) {
    const { cards } = this.state;
    if (prevState.cards !== cards) {
      setLocal('cards', cards);
    }
  }

  handleBookmarkClick = card => {
    card.bookmark = !card.bookmark;
    const index = this.state.cards.indexOf(card);
    updateCard(card) // auch möglich nur den geänderten Teil mitzuschicken, dann brauch es aber die id zusätzlich und in der sevices muss die Funktion angepasst werden,  updateCard({card.bookmark = !card.bookmark}, card._id)
      .then(card => {
        this.setState({
          cards: [
            ...this.state.cards.slice(0, index),
            card,
            ...this.state.cards.slice(index + 1)
          ]
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { cards } = this.state;

    return (
      <main>
        <h1>Cards</h1>
        <Form onSubmit={this.createCard} />
        <CardList cards={cards} onClick={this.handleBookmarkClick} />
      </main>
    );
  }
}

/* 
Frontend: Update Card (Advanced)

Use that on click on bookmark to toggle the bookmark-state on the server
When the server responds, update the card in your state */
