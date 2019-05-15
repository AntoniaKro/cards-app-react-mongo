import React, { Component } from 'react';
import { getCards, postCard, updateCard } from './services';
import CardList from './CardList';
import Form from './Form';
import Navbar from './Navbar';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto 40px;
  text-align: center;
  height: 100vh;
`;

const Header = styled.h1`
  grid-row: 1;
`;

const Main = styled.main`
  overflow: scroll;
`;

const StyledNavbar = styled(Navbar)`
  grid-row: 3;
  display: flex;
`;

export default class App extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    getCards()
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error));
  }

  createCard = (title, description, tags) => {
    /*  const newCard = {title, description, tags}
    this.state.cards.push(newCard);
    this.setState({cards: this.state.cards}) ... optimistic Update*/
    postCard({ title, description, tags })
      .then(card => {
        this.state.cards.push(card);
        this.setState({ cards: this.state.cards }); //pessimistic Update
      })
      .catch(err => console.log(err));
  };

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
      <BrowserRouter>
        <Grid>
          <Header>Cards</Header>
          <Main>
            <Switch>
              <Route
                path="/create"
                render={props => <Form onSubmit={this.createCard} {...props} />}
              />
              <CardList cards={cards} onClick={this.handleBookmarkClick} />
            </Switch>
          </Main>
          <StyledNavbar />
        </Grid>
      </BrowserRouter>
    );
  }
}
