import React, { useState, useEffect } from 'react';
import { getCards, postCard, updateCard } from '../services';
import CardPage from '../cards/CardPage';
import Navbar from '../navigation/Navbar';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormPage from '../create/FormPage';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto 80px;
  text-align: center;
  height: 100vh;
`;

const Header = styled.h1`
  grid-row: 1;
  font-family: monospace;
  font-size: 40px;
  margin: auto;
`;

const Main = styled.main`
  overflow: scroll;
`;

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards()
      .then(data => setCards(data))
      .catch(error => console.log(error));
  }, []);

  function handleCreateCard(title, description, tags) {
    /*  const newCard = {title, description, tags}
    this.state.cards.push(newCard);
    this.setState({cards: this.state.cards}) ... optimistic Update*/
    postCard({ title, description, tags })
      .then(card => {
        setCards([...cards, card]); //pessimistic Update
      })
      .catch(err => console.log(err));
  }

  function handleBookmarkClick(card) {
    card.bookmark = !card.bookmark;
    const index = cards.indexOf(card);
    updateCard(card) // auch möglich nur den geänderten Teil mitzuschicken, dann brauch es aber die id zusätzlich und in der sevices muss die Funktion angepasst werden,  updateCard({card.bookmark = !card.bookmark}, card._id)
      .then(card => {
        setCards([...cards.slice(0, index), card, ...cards.slice(index + 1)]);
      })
      .catch(err => console.log(err));
  }

  return (
    <Grid>
      <Router>
        <GlobalStyles />
        <Header>Cards</Header>
        <Main>
          <Switch>
            <Route
              path="/create"
              render={props => (
                <FormPage onCreateCard={handleCreateCard} {...props} />
              )}
            />
            <Route
              exact
              path="/"
              render={props => (
                <CardPage cards={cards} onBookmarkClick={handleBookmarkClick} />
              )}
            />
          </Switch>
        </Main>
        <Navbar />
      </Router>
    </Grid>
  );
}

export default App;
